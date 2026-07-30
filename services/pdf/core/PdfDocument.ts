"use client";

import { initPdfWorker } from "./worker";

import type { PDFDocumentProxy } from "pdfjs-dist";

import {
    createRenderer,
    type PdfRenderer,
} from "./PdfRenderer";

export interface PdfDocument {

    readonly pageCount: number;

    createRenderer(): PdfRenderer;

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

        createRenderer() {

            return createRenderer(pdf);

        },

        async destroy() {

            pdf.cleanup();

            await pdf.destroy();

        },

    };

}