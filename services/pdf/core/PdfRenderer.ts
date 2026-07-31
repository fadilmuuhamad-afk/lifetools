"use client";

import { initPdfWorker } from "./worker";

export interface RenderResult {

    pageNumber: number;

    canvas: HTMLCanvasElement;

    width: number;

    height: number;

}

export interface PdfRenderer {

    readonly pageCount: number;

    render(
        pageNumber: number,
        scale?: number,
    ): Promise<RenderResult>;

    destroy(): Promise<void>;

}

export async function createPdfRenderer(
    file: File,
): Promise<PdfRenderer> {

    await initPdfWorker();

    const pdfjs = await import("pdfjs-dist");

    const bytes = await file.arrayBuffer();

    const loadingTask = pdfjs.getDocument({

        data: bytes,

    });

    const pdf = await loadingTask.promise;

    const cache = new Map<
        string,
        RenderResult
    >();

    return {

        get pageCount() {

            return pdf.numPages;

        },

        async render(

            pageNumber,

            scale = 1.5,

        ) {

            const key = `${pageNumber}-${scale}`;

            const cached =
                cache.get(key);

            if (cached) {

                return cached;

            }

            const page =
                await pdf.getPage(
                    pageNumber,
                );

            const viewport =
                page.getViewport({

                    scale,

                });

            const canvas =
                document.createElement(
                    "canvas",
                );

            const context =
                canvas.getContext(
                    "2d",
                );

            if (!context) {

                throw new Error(
                    "Unable to create canvas.",
                );

            }

            canvas.width =
                viewport.width;

            canvas.height =
                viewport.height;

            await page.render({
                canvas,
                canvasContext: context,
                viewport,
            }).promise;

            page.cleanup();

            const result: RenderResult = {

                pageNumber,

                canvas,

                width: viewport.width,

                height: viewport.height,

            };

            cache.set(
                key,
                result,
            );

            return result;

        },

        async destroy() {

            cache.clear();

            pdf.cleanup();

            await loadingTask.destroy();

        }

    };

}