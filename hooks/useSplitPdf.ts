"use client";

import { useState } from "react";

import { usePdfTool }
    from "./usePdfTool";

export function useSplitPdf() {

    const [file, setFile] =
        useState<File | null>(null);

    const {

        result,

        setResult,

        processing,

        setProcessing,

        resultUrl,

        download,

        error,

        setError,

        clearError,

        clearResult,

    } = usePdfTool();

    async function process() {

        if (!file || processing) {

            return;

        }

        try {

            setProcessing(true);

            const {

                splitPdf,

            } = await import(
                "@/services/pdf/splitPdf"
            );

            const {

                createZip,

            } = await import(
                "@/services/pdf/createZip"
            );

            const pages =
                await splitPdf({

                    file,

                });

            const zip =
                await createZip(

                    pages,

                    "split-pages.zip"

                );

            setResult(zip);

        } finally {

            setProcessing(false);

        }

    }

    function selectFile(
        selected: File
    ) {

        setFile(selected);

        setResult(null);

    }

    

    function reset() {

        setFile(null);

        clearResult();

        clearError();

    }

    return {

        file,

        result,

        resultUrl,

        processing,

        selectFile,

        process,

        download,

        reset,

    };

}