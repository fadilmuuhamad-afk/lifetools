"use client";

import { useState } from "react";

import {

    encodeUrl,

    decodeUrl,

} from "@/services/utility/url";

import { useClipboard } from "@/hooks/common/useClipboard";

import { useTextDownload } from "@/hooks/common/useTextDownload";

export function useUrlEncoder() {

    const [input, setInput] =

        useState("");

    const [output, setOutput] =

        useState("");

    const [error, setError] =

        useState("");

    const {

        copied,

        copy,

    } = useClipboard();

    const {

        download,

    } = useTextDownload();

    function encode() {

        const result =

            encodeUrl(input);

        if (!result.success) {

            setError(

                result.error ?? "Unable to encode URL.",

            );

            setOutput("");

            return;

        }

        setError("");

        setOutput(result.output);

    }

    function decode() {

        const result =

            decodeUrl(input);

        if (!result.success) {

            setError(

                result.error ?? "Unable to decode URL.",

            );

            setOutput("");

            return;

        }

        setError("");

        setOutput(result.output);

    }

    async function copyResult() {

        await copy(output);

    }

    function downloadResult() {

        download(

            output,

            "url-result.txt",

        );

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

        copied,

        encode,

        decode,

        copyResult,

        downloadResult,

        clear,

    };

}