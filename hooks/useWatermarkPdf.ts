"use client";

import { useState } from "react";

import { usePdfTool } from "./usePdfTool";


import {
    watermarkPdf,
} from "@/services/pdf/watermark";

import type {
    WatermarkPosition,
    WatermarkType,
} from "@/services/pdf/watermark";



export function useWatermarkPdf() {

    const tool = usePdfTool(
        "pdf",
        "watermark-pdf",
    );

    const [file, setFile] =
        useState<File | null>(null);

    const [text, setText] =
        useState("CONFIDENTIAL");

    const [fontSize, setFontSize] =
        useState(48);

    // UI menggunakan persen (0-100)
    const [opacity, setOpacity] =
        useState(20);

    const [rotation, setRotation] =
        useState(-45);

    const [position, setPosition] =
        useState<WatermarkPosition>("center");

    const [type, setType] =
        useState<WatermarkType>("text");

    const [image, setImage] =
        useState<File | null>(null);

    const [width, setWidth] =
        useState(180);

    const [height, setHeight] =
        useState(180);

    function selectFile(file: File) {

        tool.clearError();

        tool.clearResult();

        setFile(file);

    }

    function selectImage(file: File) {

        tool.clearError();

        setImage(file);

    }

    async function process() {

        if (!file) {

            return;

        }

        tool.clearError();

        tool.clearResult();

        tool.setProcessing(true);

        try {

            let result: File;

            if (type === "text") {

                result = await watermarkPdf({

                    file,

                    type,

                    text,

                    fontSize,

                    opacity: opacity / 100,

                    rotation,

                    position,

                });

            } else {

                if (!image) {

                    throw new Error(
                        "Please select an image watermark.",
                    );

                }

                result = await watermarkPdf({

                    file,

                    type,

                    image,

                    width,

                    height,

                    opacity: opacity / 100,

                    rotation,

                    position,

                });

            }

            tool.setResult(result);

            

            

        } catch (error) {

            tool.setError(

                error instanceof Error

                    ? error.message

                    : "Failed to add watermark.",

            );

        } finally {

            tool.setProcessing(false);

        }

    }

    function reset() {

        setFile(null);

        setText("CONFIDENTIAL");

        setFontSize(48);

        setOpacity(20);

        setRotation(-45);

        setPosition("center");

        setType("text");

        setImage(null);

        setWidth(180);

        setHeight(180);

        tool.clearResult();

        tool.clearError();

    }

    return {

        file,

        text,

        setText,

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

        type,
        setType,

        image,
        selectImage,

        width,
        setWidth,

        height,
        setHeight,

    };

}