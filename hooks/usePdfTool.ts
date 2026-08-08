"use client";

import { useState } from "react";

import { downloadFile } from "@/utils/download";
import { useObjectUrl } from "./useObjectUrl";
import { trackDownload } from "@/lib/analytics";

export function usePdfTool(
    category: string,
    tool: string,
) {

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

        trackDownload(category, tool);
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