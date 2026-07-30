"use client";

import { Search } from "lucide-react";

import { useState } from "react";

import SearchDialog from "./SearchDialog";

export default function HeroSearch() {

    const [open, setOpen] =
        useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="
                mx-auto
                mt-10
                flex
                h-14
                sm:h-16
                w-full
                max-w-2xl
                items-center
                rounded-2xl
                border
                bg-white
                px-5
                sm:px-6
                text-left
                shadow-sm
                transition-all
                duration-200
                hover:border-blue-500
                hover:shadow-md
                focus-visible:ring-2
                focus-visible:ring-blue-500
            "
            >
                <Search
                    className="
                        mr-4
                        h-5
                        w-5
                        text-muted-foreground
                    "
                />

                <span
                    className="text-sm text-muted-foreground sm:text-base"
                >

                    Search 500+ tools...

                </span>

            </button>

            <SearchDialog
                open={open}
                onOpenChange={setOpen}
            />
        </>
    );

}