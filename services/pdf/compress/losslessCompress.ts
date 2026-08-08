import { PDFDocument } from "pdf-lib";

import type {
    CompressPdfOptions,
} from "./types";

import {
    PdfCompressionError,
} from "./types";

export async function losslessCompress(
    options: CompressPdfOptions,
): Promise<File> {
    options.onStage?.("opening");

    try {
        const bytes =
            await options.file.arrayBuffer();

        const pdf =
            await PDFDocument.load(bytes);

        options.onStage?.("building");

        /*
         * Re-save the existing PDF without
         * rasterizing its pages.
         *
         * Object streams can reduce PDF overhead
         * while preserving the original page content.
         */
        const compressedBytes =
            await pdf.save({
                useObjectStreams: true,
                addDefaultPage: false,
            });

        options.onProgress?.({
            current: 1,
            total: 1,
            percent: 100,
        });

        options.onStage?.("saving");

        const compressedBuffer =
            compressedBytes.buffer.slice(
                compressedBytes.byteOffset,
                compressedBytes.byteOffset +
                compressedBytes.byteLength,
            ) as ArrayBuffer;

        const result =
            new File(
                [compressedBuffer],
                options.file.name.replace(
                    /\.pdf$/i,
                    "-compressed.pdf",
                ),
                {
                    type: "application/pdf",
                },
            );
        /*
         * Very important:
         *
         * Never return a compressed PDF that is
         * larger than the original.
         *
         * This protects small PDFs from becoming
         * larger because of PDF reconstruction
         * overhead.
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
    }
}