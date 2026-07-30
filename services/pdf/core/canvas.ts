"use client";

export async function canvasToBlob(

    canvas: HTMLCanvasElement,

    type = "image/jpeg",

    quality = 0.8,

): Promise<Blob> {

    return new Promise(

        (resolve, reject) => {

            canvas.toBlob(

                (blob) => {

                    if (!blob) {

                        reject(

                            new Error(

                                "Failed to create blob.",

                            ),

                        );

                        return;

                    }

                    resolve(blob);

                },

                type,

                quality,

            );

        },

    );

}

export async function canvasToJpeg(

    canvas: HTMLCanvasElement,

    quality = 0.8,

) {

    return canvasToBlob(

        canvas,

        "image/jpeg",

        quality,

    );

}

export async function canvasToWebP(

    canvas: HTMLCanvasElement,

    quality = 0.8,

) {

    return canvasToBlob(

        canvas,

        "image/webp",

        quality,

    );

}

export function resizeCanvas(

    source: HTMLCanvasElement,

    scale: number,

) {

    const canvas =

        document.createElement(

            "canvas",

        );

    canvas.width =

        source.width * scale;

    canvas.height =

        source.height * scale;

    const context =

        canvas.getContext("2d");

    if (!context) {

        throw new Error(

            "Unable to resize canvas.",

        );

    }

    context.drawImage(

        source,

        0,

        0,

        canvas.width,

        canvas.height,

    );

    return canvas;

}