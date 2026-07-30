import { PDFDocument } from "pdf-lib";

export async function loadWatermarkImage(

    pdf: PDFDocument,

    file: File,

) {

    const bytes =
        await file.arrayBuffer();

    if (

        file.type === "image/png"

    ) {

        return pdf.embedPng(bytes);

    }

    return pdf.embedJpg(bytes);

}