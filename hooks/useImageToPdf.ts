import { useState } from "react";

import {
    imageToPdf,
    PdfOrientation,
} from "@/services/pdf/imageToPdf";

import {
    PdfImageFit,
    PdfPageSize,
} from "@/services/pdf/utils";

import { downloadFile } from "@/utils/download";

import { useObjectUrl } from "./useObjectUrl";

export function useImageToPdf() {

    const [files, setFiles] =
        useState<File[]>([]);

    const [result, setResult] =
        useState<File | null>(null);

    const [processing, setProcessing] =
        useState(false);

    const [pageSize, setPageSize] =
        useState<PdfPageSize>("a4");

    const [orientation, setOrientation] =
        useState<PdfOrientation>("portrait");

    const [margin, setMargin] =
        useState(20);

    const [fit, setFit] =
        useState<PdfImageFit>("contain");

    const resultUrl =
        useObjectUrl(result);

    async function process() {

        if (
            files.length === 0 ||
            processing
        ) {

            return;

        }

        try {

            setProcessing(true);

            const pdf =
                await imageToPdf({

                    files,

                    pageSize,

                    orientation,

                    margin,

                    fit,

                });

            setResult(pdf);

        } finally {

            setProcessing(false);

        }

    }

    function selectFiles(
        selected: File[]
    ) {

        setFiles(selected);

        setResult(null);

    }

    function download() {

        if (!result) return;

        downloadFile(result);

    }

    function reset() {

        setFiles([]);

        setResult(null);

        setPageSize("a4");

        setOrientation(
            "portrait"
        );

        setMargin(20);

        setFit("contain");

    }

    return {

        files,

        result,

        resultUrl,

        processing,

        pageSize,

        orientation,

        margin,

        fit,

        selectFiles,

        process,

        download,

        reset,

        setPageSize,

        setOrientation,

        setMargin,

        setFit,

    };

}