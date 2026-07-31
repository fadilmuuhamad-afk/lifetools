import { PDFDocument } from "pdf-lib";

export async function fileToUint8Array(
    file: File
): Promise<Uint8Array> {

    return new Uint8Array(
        await file.arrayBuffer()
    );

}

export async function loadPdf(
    file: File
): Promise<PDFDocument> {

    const bytes =
        await fileToUint8Array(file);

    return PDFDocument.load(bytes);

}

export async function savePdf(
    pdf: PDFDocument,
    filename: string
): Promise<File> {

    const bytes = await pdf.save({
        useObjectStreams: true,
    });

    const buffer = new ArrayBuffer(bytes.length);

    new Uint8Array(buffer).set(bytes);

    return new File(
        [buffer],
        filename,
        {
            type: "application/pdf",
            lastModified: Date.now(),
        }
    );

}

export type PdfPageSize =
    | "a4"
    | "letter"
    | "legal";

export function getPageSize(
    page: PdfPageSize
) {

    switch (page) {

        case "letter":

            return {
                width: 612,
                height: 792,
            };

        case "legal":

            return {
                width: 612,
                height: 1008,
            };

        default:

            return {
                width: 595,
                height: 842,
            };

    }

}

export function applyOrientation(

    width: number,

    height: number,

    orientation:
        | "portrait"
        | "landscape"

) {

    if (
        orientation ===
        "landscape"
    ) {

        return {

            width: height,

            height: width,

        };

    }

    return {

        width,

        height,

    };

}

export type PdfImageFit =
    | "contain"
    | "cover"
    | "stretch";

export interface ImageRect {

    x: number;

    y: number;

    width: number;

    height: number;

}

export function calculateImageRect(

    pageWidth: number,

    pageHeight: number,

    imageWidth: number,

    imageHeight: number,

    margin: number,

    fit: PdfImageFit

): ImageRect {

    const availableWidth =
        pageWidth -
        margin * 2;

    const availableHeight =
        pageHeight -
        margin * 2;

    if (fit === "stretch") {

        return {

            x: margin,

            y: margin,

            width:
                availableWidth,

            height:
                availableHeight,

        };

    }

    const scale =
        fit === "cover"

            ? Math.max(

                availableWidth /
                imageWidth,

                availableHeight /
                imageHeight

            )

            : Math.min(

                availableWidth /
                imageWidth,

                availableHeight /
                imageHeight

            );

    const width =
        imageWidth *
        scale;

    const height =
        imageHeight *
        scale;

    return {

        x:
            (pageWidth -
                width) /
            2,

        y:
            (pageHeight -
                height) /
            2,

        width,

        height,

    };

}