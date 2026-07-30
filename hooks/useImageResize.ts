"use client";

import { useState } from "react";

import { resizeImage } from "@/services/image/resize";
import { downloadFile } from "@/services/image/download";
import { toast } from "sonner";

const MIN_DIMENSION = 1;
const MAX_DIMENSION = 10000;

export function useImageResize() {
    const [file, setFile] = useState<File | null>(null);

    const [width, setWidth] = useState(1920);

    const [height, setHeight] = useState(1080);
    
    const [originalWidth, setOriginalWidth] =
        useState(0);

    const [originalHeight, setOriginalHeight] =
        useState(0);

    const [keepAspectRatio, setKeepAspectRatio] =
        useState(true);

    const [processing, setProcessing] =
        useState(false);

    const [result, setResult] =
        useState<File | null>(null);

    const [originalUrl, setOriginalUrl] =
        useState("");

    const [resultUrl, setResultUrl] =
        useState("");

    async function resize() {

        if (!file) return;

        setProcessing(true);

        try {

            const resized =
                await resizeImage(file, {
                    width,
                    height,
                });

            setResult(resized);

            setResultUrl(
                URL.createObjectURL(resized)
            );

            toast.success(
                "Image resized successfully!"
            );

        } catch {

            toast.error(
                "Resize failed."
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
        toast.info(
            "Ready for another image."
        );

        setFile(null);

        setResult(null);

        setWidth(1920);

        setHeight(1080);

        setKeepAspectRatio(true);

        setProcessing(false);
    }

    function selectFile(file: File) {

        setFile(file);

        const url =
            URL.createObjectURL(file);

        setOriginalUrl(url);

        setResult(null);

        setResultUrl("");

        const image =
            new Image();

        image.onload = () => {

            setOriginalWidth(image.width);

            setOriginalHeight(image.height);

            setWidth(image.width);

            setHeight(image.height);

        };

        image.src = url;

    }

    function updateWidth(value: number) {

        if (value < MIN_DIMENSION) return;

        if (value > MAX_DIMENSION) return;

        setWidth(value);

        if (
            keepAspectRatio &&
            originalWidth > 0 &&
            originalHeight > 0
        ) {

            const ratio =
                originalHeight /
                originalWidth;

            setHeight(
                Math.round(value * ratio)
            );

        }

    }

    function updateHeight(value: number) {

        if (value < MIN_DIMENSION) return;

        if (value > MAX_DIMENSION) return;  

        setHeight(value);

        if (
            keepAspectRatio &&
            originalWidth > 0 &&
            originalHeight > 0
        ) {

            const ratio =
                originalWidth /
                originalHeight;

            setWidth(
                Math.round(value * ratio)
            );

        }

    }

    return {
        file,
        selectFile,

        width,
        updateWidth,

        height,
        updateHeight,

        originalWidth,
        originalHeight,

        keepAspectRatio,
        setKeepAspectRatio,

        processing,

        result,

        originalUrl,
        resultUrl,

        resize,
        download,
        reset,
    };
}