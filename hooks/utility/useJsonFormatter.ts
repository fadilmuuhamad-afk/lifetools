"use client";

import { useState } from "react";

import {

    formatJson,

    minifyJson,

} from "@/services/utility/json";

import { useClipboard } from "@/hooks/common/useClipboard";

export function useJsonFormatter() {

    const [input, setInput] =

        useState("");

    const [output, setOutput] =

        useState("");

    const [error, setError] =

        useState("");

    const { copy: copyText } = useClipboard({
        category: "developer",
        tool: "json-formatter",
    });

    function format() {

        const result = formatJson(input);

        if (!result.valid) {

            setError(result.error ?? "Invalid JSON.");

            setOutput("");

            return;

        }

        setError("");

        setOutput(result.output);

    }

    function minify() {

        const result = minifyJson(input);

        if (!result.valid) {

            setError(result.error ?? "Invalid JSON.");

            setOutput("");

            return;

        }

        setError("");

        setOutput(result.output);

    }

    async function copy() {
        if (!output) {
            return;
        }

        await copyText(output);
    }

    function download() {

        if (!output) return;

        const blob = new Blob(

            [output],

            {

                type: "application/json",

            },

        );

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;

        link.download = "formatted.json";

        link.click();

        URL.revokeObjectURL(url);

    }

    function clear() {

        setInput("");

        setOutput("");

        setError("");

    }

    return {

        input,

        setInput,

        output,

        error,

        format,

        minify,

        copy,

        download,

        clear,

    };

}