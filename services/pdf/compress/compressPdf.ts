import {
    scanCompress,
} from "./scanCompress";

import {
    losslessCompress,
} from "./losslessCompress";

import {
    analyzePdf,
} from "./analyzePdf";

import type {
    CompressPdfOptions,
} from "./types";

import {
    PdfCompressionError,
} from "./types";

export async function compressPdf(
    options: CompressPdfOptions,
): Promise<File> {
    try {
        const analysis =
            await analyzePdf(
                options.file,
            );

        /*
         * Text PDFs should NOT be rasterized.
         *
         * Rasterizing text PDFs can make them
         * larger and can unnecessarily turn
         * selectable text into pixels.
         */
        if (
            analysis.contentType ===
            "text"
        ) {
            return losslessCompress(
                options,
            );
        }

        /*
         * Image-heavy and mixed PDFs use
         * the existing raster/JPEG pipeline.
         */
        return scanCompress(
            options,
        );
    } catch (error) {
        if (
            error instanceof
            PdfCompressionError
        ) {
            throw error;
        }

        throw new PdfCompressionError(
            error instanceof Error
                ? error.message
                : "Failed to compress PDF.",
        );
    }
}