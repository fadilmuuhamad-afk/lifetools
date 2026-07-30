"use client";

import { useEffect, useState } from "react";

import {
    convertImage,
    getImageFormat,
    ImageOutputFormat,
} from "@/services/image/converter";


export default function useImageConverter() {

    const [file, setFile] = useState<File | null>(null);

    const [outputFormat, setOutputFormat] =
        useState<ImageOutputFormat>("png");

    const [processing, setProcessing] =
        useState(false);

    const [result, setResult] =
        useState<File | null>(null);

    const [originalUrl, setOriginalUrl] =
        useState("");

    const [resultUrl, setResultUrl] =
        useState("");

    const [imageWidth, setImageWidth] =
        useState(0);

    const [imageHeight, setImageHeight] =
        useState(0);

    const [imageSize, setImageSize] =
        useState(0);

    const [inputFormat, setInputFormat] =
        useState<ImageOutputFormat | null>(null);

    const [quality, setQuality] =
        useState(92);

    // Create object URL untuk file asli
    useEffect(() => {

        if (!file) {

            setOriginalUrl("");

            return;

        }

        const url = URL.createObjectURL(file);

        setOriginalUrl(url);

        return () => {

            URL.revokeObjectURL(url);

        };

    }, [file]);

    // Create object URL untuk hasil convert
    useEffect(() => {

        if (!result) {

            setResultUrl("");

            return;

        }

        const url = URL.createObjectURL(result);

        setResultUrl(url);

        return () => {

            URL.revokeObjectURL(url);

        };

    }, [result]);

    async function readImageInfo(file: File) {

        return new Promise<{
            width: number;
            height: number;
        }>((resolve, reject) => {

            const url = URL.createObjectURL(file);

            const image = new Image();

            image.onload = () => {

                resolve({

                    width: image.naturalWidth,

                    height: image.naturalHeight,

                });

                URL.revokeObjectURL(url);

            };

            image.onerror = () => {

                URL.revokeObjectURL(url);

                reject();

            };

            image.src = url;

        });

    }

    async function selectFile(selected: File) {

        setResult(null);

        setFile(selected);

        setImageSize(selected.size);

        const detected = getImageFormat(selected);

        setInputFormat(detected);

        if (detected === "png") {

            setOutputFormat("jpeg");

        } else {

            setOutputFormat("png");

        }

        const info = await readImageInfo(selected);

        setImageWidth(info.width);

        setImageHeight(info.height);

    }

    async function convert() {

        if (!file) return;

        try {

            setProcessing(true);

            const converted = await convertImage({

                file,

                format: outputFormat,
                quality: quality / 100,

            });

            setResult(converted);

        } finally {

            setProcessing(false);

        }

    }

    function download() {

        if (!result) return;

        const link = document.createElement("a");

        link.href = resultUrl;

        link.download = result.name;

        link.click();

    }

    function reset() {

        setFile(null);

        setResult(null);

        setOutputFormat("png");

        setImageWidth(0);

        setImageHeight(0);

        setImageSize(0);

    }

    return {

        file,

        originalUrl,

        result,

        resultUrl,

        outputFormat,

        processing,

        setOutputFormat,

        selectFile,

        convert,

        download,

        reset,

        inputFormat,

        quality,

        setQuality,

        imageWidth,

        imageHeight,

        imageSize,

    };

}