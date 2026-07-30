import {
    loadPdf,
    savePdf,
} from "./utils";

export interface RemovePagesOptions {

    file: File;

    pages: number[];

}

export async function removePages({

    file,

    pages,

}: RemovePagesOptions): Promise<File> {

    const pdf =
        await loadPdf(file);

    const sortedPages =
        [...pages].sort((a, b) => b - a);

    for (const page of sortedPages) {

        if (
            page >= 0 &&
            page < pdf.getPageCount()
        ) {

            pdf.removePage(page);

        }

    }

    return savePdf(

        pdf,

        "removed-pages.pdf"

    );

}