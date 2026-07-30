"use client";

import { useState } from "react";

import { rotateImage } from "@/services/image/rotate";
import { downloadFile } from "@/services/image/download";
import { getImageMetadata } from "@/services/image/metadata";

import { toast } from "sonner";

export default function useImageRotate() {

    const [file, setFile] =
        useState<File | null>(null);

    const [imageUrl, setImageUrl] =
        useState("");

    const [angle, setAngle] =
        useState<90 | 180 | 270>(90);

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

        if (imageUrl) {
            URL.revokeObjectURL(imageUrl);
        }

        if (resultUrl) {
            URL.revokeObjectURL(resultUrl);
        }

        setFile(file);

        const url =
            URL.createObjectURL(file);

        setImageUrl(url);

        setResult(null);

        setResultUrl("");

        try {

            const metadata =
                await getImageMetadata(file);

            setImageWidth(metadata.width);

            setImageHeight(metadata.height);

        } catch (error) {

            console.error(error);

            toast.error(
                "Failed to read image information."
            );

        }

    }

    async function rotateCurrentImage() {

        if (!file) {
            return;
        }

        try {

            setProcessing(true);

            if (resultUrl) {
                URL.revokeObjectURL(resultUrl);
            }

            const rotated =
                await rotateImage(
                    file,
                    {
                        angle,
                    }
                );

            const url =
                URL.createObjectURL(rotated);

            setResult(rotated);

            setResultUrl(url);

            toast.success(
                "Image rotated successfully."
            );

        } catch (error) {

            console.error(error);

            toast.error(
                "Failed to rotate image."
            );

        } finally {

            setProcessing(false);

        }

    }

    function download() {

        if (!result) {
            return;
        }

        downloadFile(
            result,
            result.name
        );

        toast.success(
            "Download started."
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

        setAngle(90);

        setProcessing(false);

        setResult(null);

        setResultUrl("");

        setImageWidth(0);

        setImageHeight(0);

        toast.info(
            "Ready for another image."
        );

    }

    return {

        file,

        imageUrl,

        imageWidth,

        imageHeight,

        angle,

        setAngle,

        processing,

        result,

        resultUrl,

        selectFile,

        rotateCurrentImage,

        download,

        reset,

    };

}