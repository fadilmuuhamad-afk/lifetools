"use client";

import { useState } from "react";

import { mergePdf } from "@/services/pdf/mergePdf";

import { usePdfTool }
    from "./usePdfTool";

export function useMergePdf() {

    const [files, setFiles] =
        useState<File[]>([]);

    const {
        result,
        setResult,
        processing,
        setProcessing,
        resultUrl,
        download,
        clearResult,
        clearError,
    } = usePdfTool();

    async function process() {

        if (
            files.length < 2 ||
            processing
        ) {

            return;

        }

        try {

            setProcessing(true);

            const pdf =
                await mergePdf({

                    files,

                });

            setResult(pdf);

        } finally {

            setProcessing(false);

        }

    }

    function selectFiles(
        selected: File[]
    ) {

        setFiles(selected);

        setResult(null);

    }

    

    function reset() {

        setFiles([]);

        clearResult();

        clearError();

    }

    return {

        files,

        result,

        resultUrl,

        processing,

        selectFiles,

        process,

        download,

        reset,

    };

}