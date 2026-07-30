"use client";

import { useState } from "react";

import {
    applyWatermark,
    WatermarkPosition,
} from "@/services/image/watermark";

import { useObjectUrl } from "@/hooks/useObjectUrl";
import { downloadFile } from "@/hooks/useDownload";

export function useImageWatermark() {

    const [file, setFile] =
        useState<File | null>(null);

    const [watermarkFile, setWatermarkFile] =
        useState<File | null>(null);

    const [result, setResult] =
        useState<File | null>(null);

    const [processing, setProcessing] =
        useState(false);

    const [opacity, setOpacity] =
        useState(0.8);

    const [scale, setScale] =
        useState(0.25);

    const [position, setPosition] =
        useState<WatermarkPosition>("bottom-right");

    // Preview URLs

    const originalUrl =
        useObjectUrl(file);

    const watermarkUrl =
        useObjectUrl(watermarkFile);

    const resultUrl =
        useObjectUrl(result);

    function selectImage(file: File) {

        setResult(null);

        setFile(file);

    }

    function selectWatermark(file: File) {

        setResult(null);

        setWatermarkFile(file);

    }

    async function process() {

        if (!file || !watermarkFile) {

            return;

        }

        try {

            setProcessing(true);

            const output =
                await applyWatermark({

                    image: file,

                    watermark: watermarkFile,

                    opacity,

                    scale,

                    position,

                });

            setResult(output);

        } finally {

            setProcessing(false);

        }

    }

    function download() {

        if (!result || !resultUrl) {

            return;

        }

        downloadFile(result, resultUrl);

    }

    function reset() {

        setFile(null);

        setWatermarkFile(null);

        setResult(null);

        setOpacity(0.8);

        setScale(0.25);

        setPosition("bottom-right");

    }

    return {

        file,

        watermarkFile,

        result,

        originalUrl,

        watermarkUrl,

        resultUrl,

        processing,

        opacity,

        scale,

        position,

        setOpacity,

        setScale,

        setPosition,

        selectImage,

        selectWatermark,

        process,

        download,

        reset,

    };

}