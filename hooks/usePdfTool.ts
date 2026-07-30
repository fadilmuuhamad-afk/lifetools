"use client";

import { useState } from "react";

import { downloadFile } from "@/utils/download";
import { useObjectUrl } from "./useObjectUrl";

export function usePdfTool() {

    const [result, setResult] =
        useState<File | null>(null);

    const [processing, setProcessing] =
        useState(false);

    const [error, setError] =
        useState("");

    const resultUrl =
        useObjectUrl(result);

    function download() {

        if (!result) {

            return;

        }

        downloadFile(result);

    }

    function clearResult() {

        setResult(null);

    }

    function clearError() {

        setError("");

    }

    return {

        result,

        setResult,

        processing,

        setProcessing,

        error,

        setError,

        resultUrl,

        download,

        clearResult,

        clearError,

    };

}