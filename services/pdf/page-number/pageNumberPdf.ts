import {
    PDFDocument,
    StandardFonts,
} from "pdf-lib";

import { savePdf } from "@/services/pdf/core";

import { createOutputName } from "@/utils/file";

import { drawPageNumber } from "./drawPageNumber";

import type { PageNumberOptions } from "./types";

export async function pageNumberPdf(
    options: PageNumberOptions,
): Promise<File> {

    const bytes =
        await options.file.arrayBuffer();

    const pdf =
        await PDFDocument.load(bytes);

    const font =
        await pdf.embedFont(
            StandardFonts.HelveticaBold,
        );

    let pageNumber =
        options.startNumber;

    for (const page of pdf.getPages()) {

        drawPageNumber(
            {
                page,
                font,
            },
            options,
            pageNumber,
        );

        pageNumber++;

    }

    return savePdf(
        pdf,
        createOutputName(
            options.file.name,
            "-page-numbered",
            ".pdf",
        ),
    );

}