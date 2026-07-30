import {
    loadImage,
    canvasToBlob,
} from "./utils";

export type ImageOutputFormat =
    | "png"
    | "jpeg"
    | "webp";

export interface ConvertImageOptions {
    file: File;
    format: ImageOutputFormat;
    quality?: number;
}

export async function convertImage({
    file,
    format,
    quality = 0.92,
}: ConvertImageOptions): Promise<File> {

    const image = await loadImage(file);

    const canvas =
        document.createElement("canvas");

    canvas.width = image.width;
    canvas.height = image.height;

    const ctx =
        canvas.getContext("2d");

    if (!ctx) {
        throw new Error(
            "Canvas context unavailable."
        );
    }

    if (format === "jpeg") {

        ctx.fillStyle = "#ffffff";

        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

    }

    ctx.drawImage(
        image,
        0,
        0
    );

    const mime =
        getMimeType(format);

    const blob =
        await canvasToBlob(
            canvas,
            mime,
            quality
        );

    return new File(
        [blob],
        replaceExtension(
            file.name,
            format
        ),
        {
            type: mime,
            lastModified: Date.now(),
        }
    );

}

function getMimeType(
    format: ImageOutputFormat
): string {

    switch (format) {

        case "png":
            return "image/png";

        case "jpeg":
            return "image/jpeg";

        case "webp":
            return "image/webp";

        default:
            return "image/png";

    }

}

function replaceExtension(
    filename: string,
    extension: string
): string {

    const index =
        filename.lastIndexOf(".");

    const basename =
        index === -1
            ? filename
            : filename.substring(
                0,
                index
            );

    return `${basename}.${extension}`;

}

export function getImageFormat(
    file: File
): ImageOutputFormat | null {

    switch (file.type) {

        case "image/png":
            return "png";

        case "image/jpeg":
        case "image/jpg":
            return "jpeg";

        case "image/webp":
            return "webp";

        default:
            return null;

    }

}