export type CompressionMode =
    | "scan";

export type CompressionLevel =
    | "low"
    | "medium"
    | "high";

export type CompressionStage =
    | "idle"
    | "opening"
    | "rendering"
    | "encoding"
    | "building"
    | "saving";

export type PdfContentType =
    | "text"
    | "image-heavy"
    | "mixed"
    | "unknown";

export interface CompressionProgress {

    current: number;

    total: number;

    percent: number;

}

export interface AnalyzePdfResult {

    pages: number;

    fileSize: number;

    estimatedImages: number;

    largestImageWidth: number;

    largestImageHeight: number;

    contentType: PdfContentType;

    recommendedLevel: CompressionLevel;

    estimatedSaving: number;

}

export interface CompressPdfOptions {

    file: File;

    mode: CompressionMode;

    level: CompressionLevel;

    onStage?(
        stage: CompressionStage,
    ): void;

    onProgress?(
        progress: CompressionProgress,
    ): void;

}

export class PdfCompressionError extends Error {

    constructor(message: string) {

        super(message);

        this.name =
            "PdfCompressionError";

    }

}