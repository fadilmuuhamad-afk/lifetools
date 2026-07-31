import JSZip from "jszip";

export interface PdfToImageOptions {
    file: File;
    scale?: number;
    format?: "png" | "jpeg";
    quality?: number;
}

export async function pdfToImage({
    

    file,

    scale = 2,

    format = "png",

    quality = 0.95,

}: PdfToImageOptions): Promise<File> {

    // ✅ Tambahkan di sini
    if (typeof window === "undefined") {
        throw new Error(
            "PDF conversion is only available in the browser."
        );
    }

    const {

        getDocument,

        GlobalWorkerOptions,

    } = await import("pdfjs-dist");

    GlobalWorkerOptions.workerSrc =
        "/pdf.worker.min.mjs";

    const bytes =
        await file.arrayBuffer();

    const pdf =
        await getDocument({

            data: bytes,

        }).promise;

    const zip =
        new JSZip();

    for (

        let pageNumber = 1;

        pageNumber <= pdf.numPages;

        pageNumber++

    ) {

        const page =
            await pdf.getPage(
                pageNumber
            );

        const viewport =
            page.getViewport({

                scale,

            });

        const canvas =
            document.createElement(
                "canvas"
            );

        const context =
            canvas.getContext("2d");

        if (!context) {

            throw new Error(
                "Canvas rendering is not supported."
            );

        }

        canvas.width =
            viewport.width;

        canvas.height =
            viewport.height;

        await page.render({
            canvas,
            canvasContext: context,
            viewport,
        }).promise;

        const blob =
            await new Promise<Blob>(

                (

                    resolve,

                    reject

                ) => {

                    canvas.toBlob(

                        (

                            result

                        ) => {

                            if (

                                result

                            ) {

                                resolve(
                                    result
                                );

                            } else {

                                reject(

                                    new Error(

                                        "Failed to create image."

                                    )

                                );

                            }

                        },

                        format ===
                            "png"

                            ? "image/png"

                            : "image/jpeg",

                        quality

                    );

                }

            );

        zip.file(

            `page-${pageNumber}.${format === "png" ? "png" : "jpg"}`,

            blob

        );

    }

    const output =
        await zip.generateAsync({

            type: "blob",

        });

    return new File(

        [output],

        "images.zip",

        {

            type:
                "application/zip",

            lastModified:
                Date.now(),

        }

    );

}