import { PDFDocument } from "pdf-lib";

import {
    createPdfRenderer,
} from "@/services/pdf/core";

import {
    savePdf,
} from "@/services/pdf/core";

import {
    getCompressionPreset,
} from "./quality";

import {
    renderStage,
} from "./renderStage";

import {
    rebuildStage,
} from "./rebuildStage";

import type {
    CompressPdfOptions,
} from "./types";

import {
    PdfCompressionError,
} from "./types";

export async function scanCompress(

    options: CompressPdfOptions,

): Promise<File> {

    options.onStage?.(
        "opening",
    );

    const renderer =
        await createPdfRenderer(
            options.file,
        );

    const output =
        await PDFDocument.create();

    const preset =
        getCompressionPreset(
            options.level,
        );

    let processed = 0;

    try {

        options.onStage?.(
            "rendering",
        );

        for await (

            const page of renderStage(

                renderer,

                preset,

            )

        ) {

            options.onStage?.(
                "encoding",
            );

            await rebuildStage({

                pdf: output,

                page,

                preset,

            });

            processed++;

            options.onProgress?.({

                current:
                    processed,

                total:
                    renderer.pageCount,

                percent:
                    Math.round(

                        processed /

                        renderer.pageCount *

                        100,

                    ),

            });

        }

        options.onStage?.(
            "saving",
        );

        const result =
            await savePdf(
                output,
                options.file.name.replace(
                    /\.pdf$/i,
                    "-compressed.pdf",
                ),
            );

        /*
         * Compression should never make the
         * resulting file larger.
         *
         * If rasterization produced a larger
         * file, keep the original instead.
         */
        if (
            result.size >=
            options.file.size
        ) {
            return new File(
                [await options.file.arrayBuffer()],
                options.file.name.replace(
                    /\.pdf$/i,
                    "-compressed.pdf",
                ),
                {
                    type: "application/pdf",
                },
            );
        }

        return result;

    } catch (error) {

        throw new PdfCompressionError(

            error instanceof Error

                ? error.message

                : "Failed to compress PDF.",

        );

    } finally {

        await renderer.destroy();

    }

}