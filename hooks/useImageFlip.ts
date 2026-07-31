"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import {
    flipImage,
    type FlipDirection,
} from "@/services/image/flip";

import { downloadFile } from "@/services/image/download";
import { getImageMetadata } from "@/services/image/metadata";

export default function useImageFlip() {

    const [file, setFile] =
        useState<File | null>(null);

    const [imageUrl, setImageUrl] =
        useState("");

    const [direction, setDirection] =
        useState<FlipDirection>("horizontal");

    const [processing, setProcessing] =
        useState(false);

    const [result, setResult] =
        useState<File | null>(null);

    const [resultUrl, setResultUrl] =
        useState("");

    const [imageWidth, setImageWidth] =
        useState(0);

    const [imageHeight, setImageHeight] =
        useState(0);

    async function selectFile(file: File) {

        reset();

        const url =
            URL.createObjectURL(file);

        setFile(file);
        setImageUrl(url);

        const metadata =
            await getImageMetadata(file);

        setImageWidth(metadata.width);
        setImageHeight(metadata.height);

    }

    async function flipCurrentImage() {

        if (!file) return;

        try {

            setProcessing(true);

            const flipped =
                await flipImage(file, {
                    direction,
                });

            if (resultUrl) {

                URL.revokeObjectURL(resultUrl);

            }

            const url =
                URL.createObjectURL(flipped);

            setResult(flipped);
            setResultUrl(url);

            toast.success(
                "Image flipped successfully."
            );

        } catch {

            toast.error(
                "Failed to flip image."
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

        if (imageUrl) {

            URL.revokeObjectURL(imageUrl);

        }

        if (resultUrl) {

            URL.revokeObjectURL(resultUrl);

        }

        setFile(null);

        setImageUrl("");

        setDirection("horizontal");

        setResult(null);

        setResultUrl("");

        setImageWidth(0);

        setImageHeight(0);

        setProcessing(false);

    }

    useEffect(() => {

        return () => {

            if (imageUrl) {

                URL.revokeObjectURL(imageUrl);

            }

            if (resultUrl) {

                URL.revokeObjectURL(resultUrl);

            }

        };

    }, [imageUrl, resultUrl]);

    return {

        file,

        imageUrl,

        direction,

        setDirection,

        processing,

        result,

        resultUrl,

        imageWidth,

        imageHeight,

        selectFile,

        flipCurrentImage,

        download,

        reset,

    };

}