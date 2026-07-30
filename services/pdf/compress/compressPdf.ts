import {
    scanCompress,
} from "./scanCompress";

import type {
    CompressPdfOptions,
} from "./types";

import {
    PdfCompressionError,
} from "./types";

export async function compressPdf(

    options: CompressPdfOptions,

): Promise<File> {

    switch (options.mode) {

        case "scan":

            return scanCompress(
                options,
            );

        default:

            throw new PdfCompressionError(

                `Unsupported compression mode: ${options.mode}`,

            );

    }

}