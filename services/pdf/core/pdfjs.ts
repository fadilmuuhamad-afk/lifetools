"use client";

import { initPdfWorker } from "./worker";

export async function loadPdfJs() {

    await initPdfWorker();

    return import("pdfjs-dist");

}