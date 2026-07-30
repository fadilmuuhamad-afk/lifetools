"use client";

let initialized = false;

export async function initPdfWorker() {

    if (initialized) {

        return;

    }

    const pdfjs = await import("pdfjs-dist");

    pdfjs.GlobalWorkerOptions.workerSrc =
        "/pdf.worker.min.mjs";

    initialized = true;

}