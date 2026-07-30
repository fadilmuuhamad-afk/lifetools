export function canvasToBlob(
    canvas: HTMLCanvasElement,
    type: string,
    quality?: number
) {

    return new Promise<Blob>(
        (resolve, reject) => {

            canvas.toBlob(

                (blob) => {

                    if (!blob) {

                        reject(
                            new Error(
                                "Blob generation failed."
                            )
                        );

                        return;

                    }

                    resolve(blob);

                },

                type,
                quality

            );

        }
    );

}