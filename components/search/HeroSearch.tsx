"use client";

import { Search } from "lucide-react";

export default function HeroSearch() {
    return (
        <div className="mx-auto mt-10 max-w-2xl">

            <div className="flex h-16 items-center rounded-2xl border bg-white px-6 shadow-sm">

                <Search className="mr-4 h-5 w-5 text-muted-foreground" />

                <input
                    placeholder="Search 500+ tools..."
                    className="flex-1 bg-transparent outline-none"
                />

            </div>

        </div>
    );
}