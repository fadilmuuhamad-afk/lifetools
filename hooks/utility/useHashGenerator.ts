"use client";

import { useState } from "react";

import {

    generateHash,

    type HashAlgorithm,

} from "@/services/utility/hash";

import { useClipboard } from "@/hooks/common/useClipboard";

import { useTextDownload } from "@/hooks/common/useTextDownload";

export function useHashGenerator() {

    const [input, setInput] =

        useState("");

    const [output, setOutput] =

        useState("");

    const [error, setError] =

        useState("");

    const [

        algorithm,

        setAlgorithm,

    ] = useState<HashAlgorithm>(

        "SHA-256",

    );

    const {

        copied,

        copy,

    } = useClipboard();

    const {

        download,

    } = useTextDownload();

    async function generate() {

        const result =

            await generateHash(

                input,

                algorithm,

            );

        if (!result.success) {

            setError(

                result.error ??

                "Unable to generate hash.",

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

            "hash.txt",

        );

    }

    function clear() {

        setInput("");

        setOutput("");

        setError("");

        setAlgorithm(

            "SHA-256",

        );

    }

    return {

        input,

        setInput,

        output,

        error,

        copied,

        algorithm,

        setAlgorithm,

        generate,

        copyResult,

        downloadResult,

        clear,

    };

}