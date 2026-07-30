import {
    loadImage,
    canvasToBlob,
} from "./utils";

export interface RotateImageOptions {
    angle: 90 | 180 | 270;
}

export async function rotateImage(
    file: File,
    options: RotateImageOptions
): Promise<File> {

    const image =
        await loadImage(file);

    const angle =
        options.angle % 360;

    const radians =
        angle * Math.PI / 180;

    const canvas =
        document.createElement("canvas");

    const ctx =
        canvas.getContext("2d");

    if (!ctx) {

        throw new Error(
            "Canvas is not supported."
        );

    }

    const swapSize =
        angle === 90 ||
        angle === 270;

    canvas.width =
        swapSize
            ? image.height
            : image.width;

    canvas.height =
        swapSize
            ? image.width
            : image.height;

    ctx.translate(
        canvas.width / 2,
        canvas.height / 2
    );

    ctx.rotate(
        radians
    );

    ctx.drawImage(
        image,
        -image.width / 2,
        -image.height / 2
    );

    const blob =
        await canvasToBlob(
            canvas,
            file.type,
            0.95
        );

    return new File(

        [blob],

        file.name,

        {
            type: file.type,
            lastModified: Date.now(),
        }

    );

}