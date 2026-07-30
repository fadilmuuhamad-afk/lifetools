import {
    loadImage,
    canvasToBlob,
} from "./utils";

export interface CropArea {
    x: number;
    y: number;
    width: number;
    height: number;
}

export async function cropImage(
    file: File,
    crop: CropArea,
    rotation = 0
): Promise<File> {

    const image =
        await loadImage(file);

    const canvas =
        document.createElement("canvas");

    const ctx =
        canvas.getContext("2d");

    if (!ctx) {

        throw new Error(
            "Canvas is not supported."
        );

    }

    const radians =
        (rotation * Math.PI) / 180;

    const safeArea =
        Math.max(
            image.width,
            image.height
        ) * 2;

    const tempCanvas =
        document.createElement("canvas");

    tempCanvas.width =
        safeArea;

    tempCanvas.height =
        safeArea;

    const tempCtx =
        tempCanvas.getContext("2d");

    if (!tempCtx) {

        throw new Error(
            "Canvas is not supported."
        );

    }

    tempCtx.translate(
        safeArea / 2,
        safeArea / 2
    );

    tempCtx.rotate(
        radians
    );

    tempCtx.drawImage(
        image,
        -image.width / 2,
        -image.height / 2
    );

    canvas.width =
        crop.width;

    canvas.height =
        crop.height;

    ctx.drawImage(

        tempCanvas,

        crop.x +
        safeArea / 2 -
        image.width / 2,

        crop.y +
        safeArea / 2 -
        image.height / 2,

        crop.width,

        crop.height,

        0,

        0,

        crop.width,

        crop.height

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