"use client";

import { useState } from "react";
import { usePdfTool }
    from "./usePdfTool";

export function useRotatePdf() {

    const [file, setFile] =
        useState<File | null>(null);

    const [rotation, setRotation] =
        useState<90 | 180 | 270>(90);

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

                rotatePdf,

            } = await import(
                "@/services/pdf/rotatePdf"
            );

            const output =
                await rotatePdf({

                    file,

                    rotation,

                });

            setResult(output);

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

        setRotation(90);

    }

    return {

        file,

        rotation,

        result,

        resultUrl,

        processing,

        selectFile,

        process,

        download,

        reset,

        setRotation,

    };

}