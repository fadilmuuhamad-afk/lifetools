import { GlobalWorkerOptions } from "pdfjs-dist";

GlobalWorkerOptions.workerSrc = new URL(
    "pdf.worker.min.mjs",
    import.meta.url
).toString();