"use client";

import { useState } from "react";


import { downloadFile } from "@/utils/download";
import { useObjectUrl } from "./useObjectUrl";

export function usePdfToImage() {

    const [file, setFile] =
        useState<File | null>(null);

    const [result, setResult] =
        useState<File | null>(null);

    const [processing, setProcessing] =
        useState(false);

    const [scale, setScale] =
        useState(2);

    const [format, setFormat] =
        useState<"png" | "jpeg">("png");

    const [quality, setQuality] =
        useState(0.95);

    const resultUrl =
        useObjectUrl(result);

    async function process() {

        const {

            pdfToImage,

        } = await import(
            "@/services/pdf/pdfToImage"
        );

        const zip =
            await pdfToImage({

                file,

                scale,

                format,

                quality,

            });

        setResult(zip);
    }

    function selectFile(
        selected: File
    ) {

        setFile(selected);

        setResult(null);

    }

    function download() {

        if (!result) {

            return;

        }

        downloadFile(result);

    }

    function reset() {

        setFile(null);

        setResult(null);

        setScale(2);

        setFormat("png");

        setQuality(0.95);

    }

    return {

        file,

        result,

        resultUrl,

        processing,

        scale,

        format,

        quality,

        selectFile,

        process,

        download,

        reset,

        setScale,

        setFormat,

        setQuality,

    };

}