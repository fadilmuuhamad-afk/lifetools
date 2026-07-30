import {
    PDFPage,
    PDFFont,
    rgb,
    degrees,
} from "pdf-lib";

import { getPosition } from "@/services/pdf/shared";

import type { PageNumberOptions } from "./types";

interface DrawPageNumberOptions {
    page: PDFPage;
    font: PDFFont;
}

export function drawPageNumber(
    pageOptions: DrawPageNumberOptions,
    options: PageNumberOptions,
    pageNumber: number,
) {
    const {
        page,
        font,
    } = pageOptions;

    const text = String(pageNumber);

    const pageWidth = page.getWidth();
    const pageHeight = page.getHeight();

    const textWidth = font.widthOfTextAtSize(
        text,
        options.fontSize,
    );

    const textHeight = options.fontSize;

    const { x, y } = getPosition({
        pageWidth,
        pageHeight,
        elementWidth: textWidth,
        elementHeight: textHeight,
        position: options.position,
    });

    page.drawText(text, {
        x,
        y,
        size: options.fontSize,
        font,
        color: rgb(
            0.65,
            0.65,
            0.65,
        ),
        rotate: degrees(options.rotation),
        opacity: options.opacity,
    });
}