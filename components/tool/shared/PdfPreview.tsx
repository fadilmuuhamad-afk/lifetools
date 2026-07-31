/* eslint-disable @next/next/no-img-element */

"use client";

import { usePdfThumbnails } from "@/hooks/usePdfThumbnails";

interface Props {

    file: File;

    overlay?: React.ReactNode;

}

export default function PdfPreview({

    file,

    overlay,

}: Props) {

    const {

        pages,

        loading,

        error,

    } = usePdfThumbnails(

        file,

        {

            maxPages: 1,

        },

    );

    if (loading) {

        return (

            <div className="flex aspect-[3/4] items-center justify-center rounded-xl border">

                Loading preview...

            </div>

        );

    }

    if (error) {

        return (

            <div className="rounded-xl border p-6 text-sm text-destructive">

                {error}

            </div>

        );

    }

    if (!pages.length) {

        return null;

    }

    return (

        <div className="relative overflow-hidden rounded-xl border bg-muted">

            <img

                src={pages[0].url}

                alt="PDF Preview"

                className="block w-full"

            />

            {overlay}

        </div>

    );

}