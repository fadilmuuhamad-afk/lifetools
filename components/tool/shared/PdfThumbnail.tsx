"use client";

interface Props {

    page: number;

    url: string;

    selected?: boolean;

    onClick?(): void;

}

export default function PdfThumbnail({

    page,

    url,

    selected = false,

    onClick,

}: Props) {

    return (

        <button

            type="button"

            onClick={onClick}

            className={`

                overflow-hidden

                rounded-xl

                border-2

                transition-all

                cursor-pointer

                bg-background

                ${selected

                    ? "border-primary shadow-md"

                    : "border-transparent hover:border-primary/50"

                }

            `}

        >

            <img

                src={url}

                alt={`Page ${page}`}

                className="w-full"

            />

            <div className="border-t px-2 py-2 text-center text-sm font-medium">

                {

                    selected

                        ? `✓ Page ${page}`

                        : `Page ${page}`

                }

            </div>

        </button>

    );

}