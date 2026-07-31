"use client";

import { useState } from "react";

import {

    generateLorem,

    type LoremType,

} from "@/services/utility/lorem-ipsum";

import { useClipboard } from "@/hooks/common/useClipboard";

import { useTextDownload } from "@/hooks/common/useTextDownload";

export function useLoremIpsum() {

    const [type, setType] =

        useState<LoremType>("paragraphs");

    const [amount, setAmount] =

        useState(3);

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

        const result = generateLorem({

            type,

            amount,

        });

        setOutput(result);

    }

    async function copyResult() {

        await copy(output);

    }

    function downloadResult() {

        download(

            output,

            "lorem-ipsum.txt",

        );

    }

    function clear() {

        setOutput("");

        setAmount(3);

        setType("paragraphs");

    }

    return {

        type,

        setType,

        amount,

        setAmount,

        output,

        copied,

        generate,

        copyResult,

        downloadResult,

        clear,

    };

}