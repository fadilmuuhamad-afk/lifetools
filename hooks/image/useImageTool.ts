"use client";

import { useState } from "react";
import { downloadFile } from "@/services/image/download";

export function useImageTool() {

    const [file, setFile] =
        useState<File | null>(null);

    const [processing, setProcessing] =
        useState(false);

    const [result, setResult] =
        useState<File | null>(null);

    const [originalUrl, setOriginalUrl] =
        useState("");

    const [resultUrl, setResultUrl] =
        useState("");

    function selectFile(file: File) {

        setFile(file);

        setOriginalUrl(
            URL.createObjectURL(file)
        );

        setResult(null);

        setResultUrl("");

    }

    function setOutput(file: File) {

        setResult(file);

        setResultUrl(
            URL.createObjectURL(file)
        );

    }

    function download() {

        if (!result) return;

        downloadFile(
            result,
            result.name
        );

    }

    function reset() {

        setFile(null);

        setResult(null);

        setOriginalUrl("");

        setResultUrl("");

        setProcessing(false);

    }

    return {

        file,
        selectFile,

        processing,
        setProcessing,

        result,
        setResult,

        originalUrl,
        resultUrl,

        setOutput,

        download,

        reset,

    };

}