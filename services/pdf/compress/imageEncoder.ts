import {
    canvasToJpeg,
    canvasToWebP,
} from "@/services/pdf/core/canvas";

export type ImageEncoderType =
    | "image/jpeg"
    | "image/webp";

export interface EncodeImageOptions {

    canvas: HTMLCanvasElement;

    type?: ImageEncoderType;

    quality?: number;

}

export async function encodeImage({

    canvas,

    type = "image/jpeg",

    quality = 0.8,

}: EncodeImageOptions): Promise<Blob> {

    if (!canvas.width || !canvas.height) {

        throw new Error(
            "Canvas is empty.",
        );

    }

    const safeQuality = Math.min(
        1,
        Math.max(
            0.1,
            quality,
        ),
    );

    switch (type) {

        case "image/webp":

            return canvasToWebP(

                canvas,

                safeQuality,

            );

        case "image/jpeg":

        default:

            return canvasToJpeg(

                canvas,

                safeQuality,

            );

    }

}