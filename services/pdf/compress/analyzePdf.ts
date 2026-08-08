import { PDFDocument } from "pdf-lib";

import type {
    AnalyzePdfResult,
    CompressionLevel,
} from "./types";

type PdfContentType =
    | "text"
    | "image-heavy"
    | "mixed"
    | "unknown";

function detectPdfContent(
    bytes: Uint8Array,
): {
    contentType: PdfContentType;
    estimatedImages: number;
    largestImageWidth: number;
    largestImageHeight: number;
} {
    try {
        const text = new TextDecoder("latin1").decode(bytes);

        const imageMatches =
            text.match(
                /\/Subtype\s*\/Image\b/g,
            ) ?? [];

        const estimatedImages =
            imageMatches.length;

        const fontMatches =
            text.match(
                /\/(?:Type\s*\/Font|Subtype\s*\/Type1|Subtype\s*\/TrueType|Subtype\s*\/Type0)\b/g,
            ) ?? [];

        const hasFonts =
            fontMatches.length > 0;

        const widthMatches = [
            ...text.matchAll(
                /\/Width\s+(\d+)/g,
            ),
        ];

        const heightMatches = [
            ...text.matchAll(
                /\/Height\s+(\d+)/g,
            ),
        ];

        let largestImageWidth = 0;
        let largestImageHeight = 0;

        for (
            let i = 0;
            i < Math.min(
                widthMatches.length,
                heightMatches.length,
            );
            i++
        ) {
            const width =
                Number(
                    widthMatches[i][1],
                );

            const height =
                Number(
                    heightMatches[i][1],
                );

            if (
                width > 0 &&
                height > 0 &&
                width * height >
                largestImageWidth *
                largestImageHeight
            ) {
                largestImageWidth =
                    width;

                largestImageHeight =
                    height;
            }
        }

        /*
         * Conservative classification.
         *
         * No detected images + fonts:
         *     probably text/vector PDF.
         *
         * Several images:
         *     likely image-heavy PDF.
         *
         * Otherwise:
         *     mixed/unknown.
         */

        if (
            estimatedImages === 0 &&
            hasFonts
        ) {
            return {
                contentType: "text",
                estimatedImages,
                largestImageWidth,
                largestImageHeight,
            };
        }

        if (
            estimatedImages >= 3 ||
            largestImageWidth *
            largestImageHeight >=
            1_000_000
        ) {
            return {
                contentType: "image-heavy",
                estimatedImages,
                largestImageWidth,
                largestImageHeight,
            };
        }

        if (
            estimatedImages > 0 &&
            hasFonts
        ) {
            return {
                contentType: "mixed",
                estimatedImages,
                largestImageWidth,
                largestImageHeight,
            };
        }

        return {
            contentType: "unknown",
            estimatedImages,
            largestImageWidth,
            largestImageHeight,
        };
    } catch {
        return {
            contentType: "unknown",
            estimatedImages: 0,
            largestImageWidth: 0,
            largestImageHeight: 0,
        };
    }
}

function getRecommendedLevel(
    fileSize: number,
    contentType: PdfContentType,
): CompressionLevel {
    /*
     * Text/vector PDFs should not be aggressively
     * rasterized because doing so can make them larger.
     */
    if (contentType === "text") {
        return "low";
    }

    if (
        contentType === "image-heavy"
    ) {
        if (
            fileSize >
            20 * 1024 * 1024
        ) {
            return "high";
        }

        if (
            fileSize >
            5 * 1024 * 1024
        ) {
            return "medium";
        }

        return "low";
    }

    if (fileSize > 20 * 1024 * 1024) {
        return "high";
    }

    if (fileSize < 5 * 1024 * 1024) {
        return "low";
    }

    return "medium";
}

function getEstimatedSaving(
    contentType: PdfContentType,
    level: CompressionLevel,
): number {
    if (contentType === "text") {
        return 0;
    }

    if (level === "high") {
        return 45;
    }

    if (level === "medium") {
        return 25;
    }

    return 10;
}

export async function analyzePdf(
    file: File,
): Promise<AnalyzePdfResult> {
    const bytes =
        new Uint8Array(
            await file.arrayBuffer(),
        );

    const pdf =
        await PDFDocument.load(bytes);

    const pages =
        pdf.getPageCount();

    const fileSize =
        file.size;

    const analysis =
        detectPdfContent(bytes);

    const recommendedLevel =
        getRecommendedLevel(
            fileSize,
            analysis.contentType,
        );

    const estimatedSaving =
        getEstimatedSaving(
            analysis.contentType,
            recommendedLevel,
        );

    return {
        pages,
        fileSize,

        estimatedImages:
            analysis.estimatedImages,

        largestImageWidth:
            analysis.largestImageWidth,

        largestImageHeight:
            analysis.largestImageHeight,

        contentType:
            analysis.contentType,

        recommendedLevel,

        estimatedSaving,
    };
}