import {
    PDFDocument,
    StandardFonts,
} from "pdf-lib";

import { drawTextWatermark } from "./drawTextWatermark";
import { drawImageWatermark } from "./drawImageWatermark";
import { loadWatermarkImage } from "./loadWatermarkImage";

import { savePdf } from "@/services/pdf/core";

import { createOutputName } from "@/utils/file";


import type {

    WatermarkOptions,

} from "./types";

export async function watermarkPdf(

    options: {

        file: File;

    } & WatermarkOptions,

): Promise<File> {

    const bytes =
        await options.file.arrayBuffer();

    const pdf =
        await PDFDocument.load(bytes);

    const font =
        await pdf.embedFont(

            StandardFonts.HelveticaBold,

        );

    const image =
        options.type === "image"
            ? await loadWatermarkImage(
                pdf,
                options.image,
            )
            : null;

    for (const page of pdf.getPages()) {

        if (options.type === "text") {

            drawTextWatermark(

                {

                    page,

                    font,

                },

                options,

            );

        } else if (image) {

            drawImageWatermark(

                {

                    page,

                    image,

                },

                options,

            );

        }

    }

    return savePdf(

        pdf,

        createOutputName(

            options.file.name,

            "-watermarked",

            ".pdf",

        ),

    );

}