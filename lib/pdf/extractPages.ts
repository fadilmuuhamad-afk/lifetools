import { PDFDocument } from "pdf-lib";

import {
    loadPdf,
    savePdf,
} from "@/services/pdf/core";

export interface ExtractPagesOptions {

    file: File;

    pages: number[];

}

export async function extractPages({

    file,

    pages,

}: ExtractPagesOptions): Promise<File[]> {

    const pdf =
        await loadPdf(file);

    const outputs: File[] = [];

    for (const pageIndex of pages) {

        if (
            pageIndex < 0 ||
            pageIndex >= pdf.getPageCount()
        ) {

            continue;

        }

        const document =
            await PDFDocument.create();

        const [page] =
            await document.copyPages(
                pdf,
                [pageIndex]
            );

        document.addPage(page);

        outputs.push(

            await savePdf(

                document,

                `page-${pageIndex + 1}.pdf`

            )

        );

    }

    return outputs;

}