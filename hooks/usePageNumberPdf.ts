"use client";

import { useState } from "react";

import { usePdfTool } from "./usePdfTool";

import {
    pageNumberPdf,
} from "@/services/pdf/page-number";

import type {
    WatermarkPosition,
} from "@/services/pdf/watermark";

export function usePageNumberPdf() {

    const tool = usePdfTool();

    const [file, setFile] =
        useState<File | null>(null);

    const [startNumber, setStartNumber] =
        useState(1);

    const [fontSize, setFontSize] =
        useState(48);

    // UI menggunakan persen (0-100)
    const [opacity, setOpacity] =
        useState(20);

    const [rotation, setRotation] =
        useState(-45);

    const [position, setPosition] =
        useState<WatermarkPosition>("center");

    function selectFile(file: File) {

        tool.clearError();

        tool.clearResult();

        setFile(file);

    }

    async function process() {

        if (!file) {

            return;

        }

        tool.clearError();

        tool.clearResult();

        tool.setProcessing(true);

        try {

            const result =
                await pageNumberPdf({

                    file,

                    startNumber,

                    fontSize,

                    opacity: opacity / 100,

                    rotation,

                    position,

                });

            tool.setResult(result);

        } catch (error) {

            tool.setError(

                error instanceof Error

                    ? error.message

                    : "Failed to add page numbers.",

            );

        } finally {

            tool.setProcessing(false);

        }

    }

    function reset() {

        setFile(null);

        setStartNumber(1);

        setFontSize(48);

        setOpacity(20);

        setRotation(-45);

        setPosition("center");

        tool.clearResult();

        tool.clearError();

    }

    return {

        file,

        startNumber,
        setStartNumber,

        fontSize,
        setFontSize,

        opacity,
        setOpacity,

        rotation,
        setRotation,

        position,
        setPosition,

        result: tool.result,

        error: tool.error,

        resultUrl: tool.resultUrl,

        processing: tool.processing,

        selectFile,

        process,

        download: tool.download,

        reset,

    };

}