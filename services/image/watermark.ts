import {
    loadImage,
    canvasToBlob,
} from "./utils";

export type WatermarkPosition =
    | "top-left"
    | "top-center"
    | "top-right"
    | "center-left"
    | "center"
    | "center-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";

interface ApplyWatermarkOptions {
    image: File;
    watermark: File;
    opacity: number;
    scale: number;
    position: WatermarkPosition;
}

function replaceExtension(
    filename: string
): string {

    const index =
        filename.lastIndexOf(".");

    if (index === -1) {
        return `${filename}-watermarked`;
    }

    return `${filename.substring(
        0,
        index
    )}-watermarked`;

}

function calculatePosition(
    position: WatermarkPosition,
    canvasWidth: number,
    canvasHeight: number,
    watermarkWidth: number,
    watermarkHeight: number
) {

    const padding = 24;

    let x = 0;
    let y = 0;

    switch (position) {

        case "top-left":
            x = padding;
            y = padding;
            break;

        case "top-center":
            x =
                (canvasWidth - watermarkWidth) / 2;
            y = padding;
            break;

        case "top-right":
            x =
                canvasWidth -
                watermarkWidth -
                padding;
            y = padding;
            break;

        case "center-left":
            x = padding;
            y =
                (canvasHeight -
                    watermarkHeight) /
                2;
            break;

        case "center":
            x =
                (canvasWidth -
                    watermarkWidth) /
                2;
            y =
                (canvasHeight -
                    watermarkHeight) /
                2;
            break;

        case "center-right":
            x =
                canvasWidth -
                watermarkWidth -
                padding;
            y =
                (canvasHeight -
                    watermarkHeight) /
                2;
            break;

        case "bottom-left":
            x = padding;
            y =
                canvasHeight -
                watermarkHeight -
                padding;
            break;

        case "bottom-center":
            x =
                (canvasWidth - watermarkWidth) / 2;
            y =
                canvasHeight -
                watermarkHeight -
                padding;
            break;

        case "bottom-right":
            x =
                canvasWidth -
                watermarkWidth -
                padding;
            y =
                canvasHeight -
                watermarkHeight -
                padding;
            break;

    }

    return { x, y };

}

export async function applyWatermark({

    image,

    watermark,

    opacity,

    scale,

    position,

}: ApplyWatermarkOptions): Promise<File> {

    const base =
        await loadImage(image);

    const logo =
        await loadImage(watermark);

    const canvas =
        document.createElement("canvas");

    canvas.width =
        base.width;

    canvas.height =
        base.height;

    const context =
        canvas.getContext("2d");

    if (!context) {

        throw new Error(
            "Canvas not supported."
        );

    }

    context.drawImage(
        base,
        0,
        0
    );

    const watermarkWidth =
        base.width * scale;

    const watermarkHeight =
        (logo.height / logo.width) *
        watermarkWidth;

    const { x, y } =
        calculatePosition(

            position,

            canvas.width,

            canvas.height,

            watermarkWidth,

            watermarkHeight

        );

    context.globalAlpha =
        opacity;

    context.drawImage(

        logo,

        x,

        y,

        watermarkWidth,

        watermarkHeight

    );

    context.globalAlpha = 1;

    const blob =
        await canvasToBlob(
            canvas,
            "image/png"
        );

    return new File(

        [blob],

        `${replaceExtension(
            image.name
        )}.png`,

        {
            type: "image/png",
            lastModified: Date.now(),
        }

    );

}