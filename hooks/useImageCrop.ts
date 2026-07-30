"use client";

import { useState } from "react";
import type { Area } from "react-easy-crop";

import { cropImage } from "@/services/image/crop";
import { downloadFile } from "@/services/image/download";
import { getImageMetadata } from "@/services/image/metadata";

import { toast } from "sonner";

export default function useImageCrop() {

    const [file, setFile] =
        useState<File | null>(null);

    const [imageUrl, setImageUrl] =
        useState("");

    const [crop, setCrop] =
        useState({
            x: 0,
            y: 0,
        });

    const [zoom, setZoom] =
        useState(1);

    const [rotation, setRotation] =
        useState(0);

    const [aspect, setAspect] =
        useState(1);

    const [
        croppedAreaPixels,
        setCroppedAreaPixels,
    ] = useState<Area | null>(null);

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

        const url = URL.createObjectURL(file);

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

    async function cropCurrentImage() {

        if (!file || !croppedAreaPixels) {
            return;
        }

        try {

            setProcessing(true);

            if (resultUrl) {
                URL.revokeObjectURL(resultUrl);
            }

            const resultFile =
                await cropImage(
                    file,
                    croppedAreaPixels,
                    rotation
                );

            const url =
                URL.createObjectURL(resultFile);

            setResult(resultFile);

            setResultUrl(url);

            toast.success(
                "Image cropped successfully."
            );

        } catch (error) {

            console.error(error);

            toast.error(
                "Failed to crop image."
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

        setCrop({
            x: 0,
            y: 0,
        });

        setZoom(1);

        setRotation(0);

        setAspect(1);

        setResult(null);

        setResultUrl("");

        setImageWidth(0);

        setImageHeight(0);

        setProcessing(false);

        setCroppedAreaPixels(null);

        toast.info(
            "Ready for another image."
        );

    }

    return {

        file,
        imageUrl,

        imageWidth,
        imageHeight,

        crop,
        setCrop,

        zoom,
        setZoom,

        rotation,
        setRotation,

        aspect,
        setAspect,

        croppedAreaPixels,
        setCroppedAreaPixels,

        processing,

        result,
        resultUrl,

        selectFile,

        cropCurrentImage,

        download,

        reset,

    };

}