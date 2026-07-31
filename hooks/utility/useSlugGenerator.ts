"use client";

import { useState } from "react";

import { slugify } from "@/services/utility/slug";

import { useClipboard } from "@/hooks/common/useClipboard";
import { useTextDownload } from "@/hooks/common/useTextDownload";

export function useSlugGenerator() {

    const [input, setInput] =
        useState("");

    const [output, setOutput] =
        useState("");

    const {

        copied,

        copy,

    } = useClipboard();

    const {

        download,

    } = useTextDownload();

    function generate() {

        const result = slugify(input);

        setOutput(result.output);

    }

    async function copyResult() {

        await copy(output);

    }

    function downloadResult() {

        download(
            output,
            "slug.txt",
        );

    }

    function clear() {

        setInput("");
        setOutput("");

    }

    return {

        input,
        setInput,

        output,

        copied,

        generate,

        copyResult,

        downloadResult,

        clear,

    };

}