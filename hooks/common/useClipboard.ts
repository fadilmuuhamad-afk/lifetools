"use client";

import { useState } from "react";

import { trackCopy } from "@/lib/analytics";

interface ClipboardOptions {
    category?: string;
    tool?: string;
}

export function useClipboard(
    options: ClipboardOptions = {},
) {
    const [copied, setCopied] =
        useState(false);

    async function copy(text: string) {
        if (!text) {
            return false;
        }

        try {
            await navigator.clipboard.writeText(text);

            setCopied(true);

            if (
                options.category &&
                options.tool
            ) {
                trackCopy(
                    options.category,
                    options.tool,
                );
            }

            window.setTimeout(() => {
                setCopied(false);
            }, 2000);

            return true;

        } catch {
            setCopied(false);

            return false;
        }
    }

    return {
        copied,
        copy,
    };
}