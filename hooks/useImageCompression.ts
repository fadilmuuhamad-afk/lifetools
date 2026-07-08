"use client";

import { useState } from "react";

import { compressImage } from "@/services/image/compress";
import { downloadFile } from "@/services/image/download";

export function useImageCompression() {
    const [file, setFile] = useState<File | null>(null);

    const [quality, setQuality] = useState(80);

    const [processing, setProcessing] =
        useState(false);

    const [result, setResult] =
        useState<File | null>(null);
    
    const [originalUrl, setOriginalUrl] =
        useState("");

    const [resultUrl, setResultUrl] =
        useState("");

    async function compress() {
        if (!file) return;

        setProcessing(true);

        try {
            const compressed =
                await compressImage(
                    file,
                    quality
                );

            setResult(compressed);
            setResultUrl(
                URL.createObjectURL(compressed)
            );

        } finally {
            setProcessing(false);
        }
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

        setQuality(80);

        setProcessing(false);
    }

    function selectFile(file: File) {
        setFile(file);

        const url = URL.createObjectURL(file);

        setOriginalUrl(url);

        setResult(null);
        setResultUrl("");
    }

    return {
        file,
        selectFile,

        quality,
        setQuality,

        processing,

        result,

        originalUrl,
        resultUrl,

        compress,
        download,
        reset,
    };
}