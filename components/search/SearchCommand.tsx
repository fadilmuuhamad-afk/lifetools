"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { getPopularTools } from "@/lib/tools";

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";

import { searchTools } from "@/lib/search";

export default function SearchCommand() {

    const [query, setQuery] =
        useState("");

    const hasQuery = query.trim().length > 0;

    const results = useMemo(() => {
        return hasQuery
            ? searchTools(query)
            : getPopularTools();
    }, [hasQuery, query]);

    const router = useRouter();

    return (

        <div className="mx-auto w-full max-w-2xl">

            <Command className="rounded-2xl border shadow-lg">

                <CommandInput
                    placeholder="Search tools..."
                    value={query}
                    onValueChange={setQuery}
                />

                <CommandList>

                    <CommandEmpty>

                        No tool found.

                    </CommandEmpty>

                    <CommandGroup>

                        {results.map((tool) => (

                            <CommandItem
                                key={tool.id}
                                onSelect={() => {
                                    router.push(
                                        `/tool/${tool.category}/${tool.slug}`
                                    );
                                }}
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    rounded-xl
                                    px-4
                                    py-3
                                    transition-colors
                                "   
                            >
                                <div>

                                    <div
                                        className="
                                        font-semibold
                                        leading-none
                                    "
                                    >
                                        {tool.title}
                                    </div>

                                    <div
                                        className="
                                        mt-1
                                        line-clamp-1
                                        text-sm
                                        text-muted-foreground
                                    "
                                    >
                                        {tool.description}
                                    </div>

                                </div>

                                <span
                                    className="
                                    inline-flex
                                    items-center
                                    rounded-full
                                    bg-primary/10
                                    px-3
                                    py-1
                                    text-xs
                                    font-medium
                                    text-primary
                                    "
                                >
                                    {tool.category}
                                </span>

                            </CommandItem>

                        ))}

                    </CommandGroup>

                </CommandList>

            </Command>

        </div>

    );

}