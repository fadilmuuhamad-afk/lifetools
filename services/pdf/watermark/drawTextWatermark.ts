import {
    PDFPage,
    PDFFont,
    rgb,
    degrees,
} from "pdf-lib";

import { getPosition } from "@/services/pdf/shared";

import type { TextWatermarkOptions } from "./types";

interface DrawTextWatermarkOptions {

    page: PDFPage;

    font: PDFFont;

}

export function drawTextWatermark(

    pageOptions: DrawTextWatermarkOptions,

    options: TextWatermarkOptions,

) {

    const {

        page,

        font,

    } = pageOptions;

    const width = page.getWidth();

    const height = page.getHeight();

    const textWidth =
        font.widthOfTextAtSize(
            options.text,
            options.fontSize,
        );

    const textHeight =
        options.fontSize;

    const { x, y } =
        getPosition({

            pageWidth: width,

            pageHeight: height,

            elementWidth: textWidth,

            elementHeight: textHeight,

            position: options.position,

        });

    page.drawText(

        options.text,

        {

            x,

            y,

            size: options.fontSize,

            font,

            color: rgb(

                0.65,

                0.65,

                0.65,

            ),

            rotate: degrees(

                options.rotation,

            ),

            opacity: options.opacity,

        },

    );

}