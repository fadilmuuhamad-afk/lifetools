import { PDFDocument } from "pdf-lib";

import {
    loadPdf,
    savePdf,
} from "./utils";

export interface MergePdfOptions {

    files: File[];

}

export async function mergePdf({

    files,

}: MergePdfOptions): Promise<File> {

    if (files.length < 2) {

        throw new Error(
            "Please select at least two PDF files."
        );

    }

    const merged =
        await PDFDocument.create();

    for (const file of files) {

        const pdf =
            await loadPdf(file);

        const pages =
            await merged.copyPages(

                pdf,

                pdf.getPageIndices()

            );

        for (const page of pages) {

            merged.addPage(page);

        }

    }

    return savePdf(

        merged,

        "merged.pdf"

    );

}