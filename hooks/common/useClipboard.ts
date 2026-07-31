"use client";

import { useState } from "react";

export function useClipboard() {

    const [copied, setCopied] =

        useState(false);

    async function copy(text: string) {

        if (!text) {

            return false;

        }

        try {

            await navigator.clipboard.writeText(text);

            setCopied(true);

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