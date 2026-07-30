import { PDFDocument } from "pdf-lib";

import {
    encodeImage,
} from "./imageEncoder";

import type {
    CompressionPreset,
} from "./quality";

import type {
    RenderResult,
} from "@/services/pdf/core";

export interface RebuildStageOptions {

    pdf: PDFDocument;

    page: RenderResult;

    preset: CompressionPreset;

}

export async function rebuildStage({

    pdf,

    page,

    preset,

}: RebuildStageOptions): Promise<void> {

    const blob =
        await encodeImage({

            canvas: page.canvas,

            type: "image/jpeg",

            quality:
                preset.quality,

        });

    const bytes =
        await blob.arrayBuffer();

    const image =
        await pdf.embedJpg(
            bytes,
        );

    const pdfPage =
        pdf.addPage([

            page.width,

            page.height,

        ]);

    pdfPage.drawImage(

        image,

        {

            x: 0,

            y: 0,

            width:
                page.width,

            height:
                page.height,

        },

    );

}