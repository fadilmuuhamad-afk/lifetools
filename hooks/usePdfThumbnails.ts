"use client";

import { useEffect, useState } from "react";

import {
    createPdfRenderer,
} from "@/services/pdf/core";

export interface PdfThumbnail {

    page: number;

    url: string;

}

export interface UsePdfThumbnailsOptions {

    /**
     * Maximum number of pages to render.
     * Default: render all pages.
     */
    maxPages?: number;

}

export function usePdfThumbnails(

    file: File | null,

    options?: UsePdfThumbnailsOptions,

) {

    const [pages, setPages] =
        useState<PdfThumbnail[]>([]);

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState("");

    useEffect(() => {
        if (!file) {
            setPages([]);
            setError("");
            return;
        }

        const selectedFile: File = file;

        let cancelled = false;
        let renderer: Awaited<
            ReturnType<typeof createPdfRenderer>
        > | null = null;

        async function load() {
            try {
                setLoading(true);
                setError("");

                renderer = await createPdfRenderer(selectedFile);

            

                const thumbnails: PdfThumbnail[] = [];

                const totalPages =
                    Math.min(

                        renderer.pageCount,

                        options?.maxPages ??
                        renderer.pageCount,

                    );

                for (

                    let page = 1;

                    page <= totalPages;

                    page++

                ) {

                    if (cancelled) {

                        return;

                    }

                    const rendered =
                        await renderer.render(

                            page,

                            0.35,

                        );

                    thumbnails.push({

                        page,

                        url:
                            rendered.canvas.toDataURL(
                                "image/png",
                            ),

                    });

                }

                if (!cancelled) {

                    setPages(
                        thumbnails,
                    );

                }

            } catch (err) {

                if (!cancelled) {

                    setPages([]);

                    setError(

                        err instanceof Error

                            ? err.message

                            : "Failed to render PDF preview.",

                    );

                }

            } finally {

                if (renderer) {

                    await renderer.destroy();

                }

                if (!cancelled) {

                    setLoading(false);

                }

            }

        }

        load();

        return () => {

            cancelled = true;

        };

    }, [

        file,

        options?.maxPages,

    ]);

    return {

        pages,

        loading,

        error,

    };

}