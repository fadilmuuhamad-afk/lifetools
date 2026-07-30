"use client";

import PdfThumbnail from "./PdfThumbnail";

import {

    PdfThumbnail as Thumbnail,

} from "@/hooks/usePdfThumbnails";

interface Props {

    pages: Thumbnail[];

    selectedPages: number[];

    onToggle(
        page: number,
    ): void;

}

export default function PdfThumbnailGrid({

    pages,

    selectedPages,

    onToggle,

}: Props) {

    if (pages.length === 0) {

        return (

            <div className="rounded-xl border p-6 text-center text-muted-foreground">

                No preview available.

            </div>

        );

    }

    return (

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">

            {

                pages.map((page) => (

                    <PdfThumbnail

                        key={page.page}

                        page={page.page}

                        url={page.url}

                        selected={

                            selectedPages.includes(

                                page.page

                            )

                        }

                        onClick={() =>

                            onToggle(

                                page.page

                            )

                        }

                    />

                ))

            }

        </div>

    );

}