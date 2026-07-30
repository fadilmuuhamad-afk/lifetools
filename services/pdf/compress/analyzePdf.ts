import { PDFDocument } from "pdf-lib";

import {

    AnalyzePdfResult,

    CompressionLevel,

} from "./types";

export async function analyzePdf(

    file: File,

): Promise<AnalyzePdfResult> {

    const bytes =

        await file.arrayBuffer();

    const pdf =

        await PDFDocument.load(bytes);

    const pages =

        pdf.getPageCount();

    const fileSize =

        file.size;

    let recommendedLevel: CompressionLevel =

        "medium";

    if (fileSize > 20 * 1024 * 1024) {

        recommendedLevel = "high";

    }

    else if (fileSize < 5 * 1024 * 1024) {

        recommendedLevel = "low";

    }

    const estimatedSaving =

        recommendedLevel === "high"

            ? 45

            : recommendedLevel === "medium"

                ? 25

                : 10;

    return {

        pages,

        fileSize,

        estimatedImages: 0,

        largestImageWidth: 0,

        largestImageHeight: 0,

        recommendedLevel,

        estimatedSaving,

    };

}