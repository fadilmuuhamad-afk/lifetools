"use client";

import { useState } from "react";

import {

    convertCase,

    type CaseType,

} from "@/services/utility/case";

import { useClipboard } from "@/hooks/common/useClipboard";

import { useTextDownload } from "@/hooks/common/useTextDownload";

export function useCaseConverter() {

    const [input, setInput] =

        useState("");

    const [output, setOutput] =

        useState("");

    const [type, setType] =

        useState<CaseType>("lowercase");

    const {

        copied,

        copy,

    } = useClipboard();

    const {

        download,

    } = useTextDownload();

    function convert() {

        const result =

            convertCase(

                input,

                type,

            );

        setOutput(

            result.output,

        );

    }

    async function copyResult() {

        await copy(output);

    }

    function downloadResult() {

        download(

            output,

            "converted-text.txt",

        );

    }

    function clear() {

        setInput("");

        setOutput("");

        setType("lowercase");

    }

    return {

        input,

        setInput,

        output,

        type,

        setType,

        copied,

        convert,

        copyResult,

        downloadResult,

        clear,

    };

}