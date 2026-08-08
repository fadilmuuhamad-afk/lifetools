"use client";

import { useState } from "react";

import { useClipboard } from "@/hooks/common/useClipboard";

import {

    encodeBase64,

    decodeBase64,

} from "@/services/utility/base64";

export function useBase64() {

    const [input, setInput] =

        useState("");

    const [output, setOutput] =

        useState("");

    const [error, setError] =

        useState("");

    const { copy: copyText } = useClipboard({
        category: "developer",
        tool: "base64-encoder-decoder",
    });

    function encode() {

        const result =

            encodeBase64(input);

        if (!result.success) {

            setError(

                result.error ??

                "Unable to encode.",

            );

            setOutput("");

            return;

        }

        setError("");

        setOutput(result.output);

    }

    function decode() {

        const result =

            decodeBase64(input);

        if (!result.success) {

            setError(

                result.error ??

                "Unable to decode.",

            );

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

        if (!output) {

            return;

        }

        const blob = new Blob(

            [output],

            {

                type: "text/plain;charset=utf-8",

            },

        );

        const url =

            URL.createObjectURL(blob);

        const link =

            document.createElement("a");

        link.href = url;

        link.download = "base64.txt";

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

        encode,

        decode,

        copy,

        download,

        clear,

    };

}