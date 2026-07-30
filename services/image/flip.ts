import {
    loadImage,
    canvasToBlob,
} from "./utils";

export type FlipDirection =
    | "horizontal"
    | "vertical";

export interface FlipOptions {
    direction: FlipDirection;
}

export async function flipImage(
    file: File,
    options: FlipOptions
): Promise<File> {

    const image =
        await loadImage(file);

    const canvas =
        document.createElement("canvas");

    canvas.width =
        image.width;

    canvas.height =
        image.height;

    const ctx =
        canvas.getContext("2d");

    if (!ctx) {

        throw new Error(
            "Unable to create canvas."
        );

    }

    if (
        options.direction ===
        "horizontal"
    ) {

        ctx.translate(
            canvas.width,
            0
        );

        ctx.scale(
            -1,
            1
        );

    } else {

        ctx.translate(
            0,
            canvas.height
        );

        ctx.scale(
            1,
            -1
        );

    }

    ctx.drawImage(
        image,
        0,
        0
    );

    const blob =
        await canvasToBlob(
            canvas,
            file.type
        );

    const extension =
        file.name.includes(".")
            ? file.name.substring(
                file.name.lastIndexOf(".")
            )
            : "";

    const filename =
        file.name.replace(
            /\.[^.]+$/,
            ""
        ) +
        "-flipped" +
        extension;

    return new File(

        [blob],

        filename,

        {
            type: file.type,
            lastModified: Date.now(),
        }

    );

}