import { PDFDocument } from "pdf-lib";

import {
    loadPdf,
    savePdf,
} from "./utils";

export interface SplitPdfOptions {

    file: File;

}

export async function splitPdf({

    file,

}: SplitPdfOptions): Promise<File[]> {

    const pdf =
        await loadPdf(file);

    const outputs: File[] = [];

    const pageIndices =
        pdf.getPageIndices();

    for (const index of pageIndices) {

        const document =
            await PDFDocument.create();

        const [page] =
            await document.copyPages(
                pdf,
                [index]
            );

        document.addPage(page);

        const output =
            await savePdf(

                document,

                `page-${index + 1}.pdf`

            );

        outputs.push(output);

    }

    return outputs;

}