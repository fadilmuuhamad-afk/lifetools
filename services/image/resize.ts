import {
    loadImage,
    canvasToBlob,
} from "./utils";

export interface ResizeOptions {
    width: number;
    height: number;
    format?: string;
}

export async function resizeImage(
    file: File,
    options: ResizeOptions
): Promise<File> {

    const image =
        await loadImage(file);

    const canvas =
        document.createElement("canvas");

    canvas.width =
        options.width;

    canvas.height =
        options.height;

    const ctx =
        canvas.getContext("2d");

    if (!ctx) {

        throw new Error(
            "Canvas not supported."
        );

    }

    ctx.drawImage(

        image,

        0,

        0,

        options.width,

        options.height

    );

    const blob =
        await canvasToBlob(
            canvas,
            file.type
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