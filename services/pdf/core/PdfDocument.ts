"use client";

import { initPdfWorker } from "./worker";

import {
    createPdfRenderer,
    type PdfRenderer,
} from "./PdfRenderer";

export interface PdfDocument {
    readonly pageCount: number;

    createRenderer(): Promise<PdfRenderer>;

    destroy(): Promise<void>;
}

export async function openPdf(

    file: File,

): Promise<PdfDocument> {

    initPdfWorker();

    const pdfjs =
        await import("pdfjs-dist");

    const bytes =
        await file.arrayBuffer();

    const pdf =
        await pdfjs.getDocument({

            data: bytes,

        }).promise;

    return {
        get pageCount() {
            return pdf.numPages;
        },

        async createRenderer() {
            return createPdfRenderer(file);
        },

        async destroy() {
            pdf.cleanup();
        },
    };

}