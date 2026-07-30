import { PDFDocument } from "pdf-lib";

export async function loadPdf(

    file: File,

) {

    const bytes =

        await file.arrayBuffer();

    return PDFDocument.load(bytes);

}