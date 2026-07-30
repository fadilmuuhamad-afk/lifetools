export async function loadImage(
    file: File
): Promise<HTMLImageElement> {

    return new Promise((resolve, reject) => {

        const url = URL.createObjectURL(file);

        const image = new Image();

        image.onload = () => {

            URL.revokeObjectURL(url);

            resolve(image);

        };

        image.onerror = () => {

            URL.revokeObjectURL(url);

            reject(new Error("Failed to load image."));

        };

        image.src = url;

    });

}

export function canvasToBlob(
    canvas: HTMLCanvasElement,
    type: string,
    quality?: number
): Promise<Blob> {

    return new Promise((resolve, reject) => {

        canvas.toBlob(

            (blob) => {

                if (!blob) {

                    reject(
                        new Error(
                            "Failed to create blob."
                        )
                    );

                    return;

                }

                resolve(blob);

            },

            type,

            quality

        );

    });

}