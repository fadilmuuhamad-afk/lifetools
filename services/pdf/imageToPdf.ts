import {
    PDFDocument,
} from "pdf-lib";

import {
    applyOrientation,
    calculateImageRect,
    getPageSize,
    PdfImageFit,
    PdfPageSize,
    savePdf,
} from "./utils";

export type PdfOrientation =
    | "portrait"
    | "landscape";

export interface ImageToPdfOptions {

    files: File[];

    pageSize: PdfPageSize;

    orientation: PdfOrientation;

    margin: number;

    fit: PdfImageFit;

}

export async function imageToPdf({

    files,

    pageSize,

    orientation,

    margin,

    fit,

}: ImageToPdfOptions): Promise<File> {

    if (files.length === 0) {

        throw new Error(
            "No images selected."
        );

    }

    const pdf =
        await PDFDocument.create();

    const page =
        getPageSize(pageSize);

    const pageSizeResult =
        applyOrientation(

            page.width,

            page.height,

            orientation

        );

    for (const file of files) {

        const bytes =
            new Uint8Array(
                await file.arrayBuffer()
            );

        let image;

        switch (file.type) {

            case "image/png":

                image =
                    await pdf.embedPng(
                        bytes
                    );

                break;

            case "image/jpeg":

            case "image/jpg":

                image =
                    await pdf.embedJpg(
                        bytes
                    );

                break;

            default:

                throw new Error(
                    `Unsupported image format: ${file.type}`
                );

        }

        const pdfPage =
            pdf.addPage([

                pageSizeResult.width,

                pageSizeResult.height,

            ]);

        const rect =
            calculateImageRect(

                pageSizeResult.width,

                pageSizeResult.height,

                image.width,

                image.height,

                margin,

                fit

            );

        pdfPage.drawImage(

            image,

            {

                x: rect.x,

                y: rect.y,

                width: rect.width,

                height: rect.height,

            }

        );

    }

    return savePdf(

        pdf,

        "images.pdf"

    );

}