"use client";

import { useState } from "react";

import { usePdfTool } from "./usePdfTool";

import { compressPdf } from "@/services/pdf/compress/compressPdf";

import type {
    CompressionLevel,
    CompressionProgress,
    CompressionStage,
} from "@/services/pdf/compress/types";

export function useCompressPdf() {

    const tool = usePdfTool(
        "pdf",
        "compress-pdf",
    );

    const [file, setFile] =
        useState<File | null>(null);

    const [level, setLevel] =
        useState<CompressionLevel>("medium");

    const [progress, setProgress] =
        useState<CompressionProgress>({

            current: 0,

            total: 0,

            percent: 0,

        });

    const [stage, setStage] =
        useState<CompressionStage>("idle");

    function selectFile(file: File) {

        tool.clearError();

        tool.clearResult();

        setFile(file);

        setProgress({

            current: 0,

            total: 0,

            percent: 0,

        });

        setStage("idle");

    }

    async function process() {

        if (!file) {

            return;

        }

        tool.clearError();

        tool.clearResult();

        tool.setProcessing(true);

        setProgress({

            current: 0,

            total: 0,

            percent: 0,

        });

        try {

            const result =
                await compressPdf({

                    file,

                    mode: "scan",

                    level,

                    onStage: setStage,

                    onProgress: setProgress,

                });

            tool.setResult(result);

        } catch (error) {

            tool.setError(

                error instanceof Error

                    ? error.message

                    : "Failed to compress PDF.",

            );

        } finally {

            tool.setProcessing(false);

        }

    }

    function reset() {

        setFile(null);

        setLevel("medium");

        setProgress({

            current: 0,

            total: 0,

            percent: 0,

        });

        setStage("idle");

        tool.clearResult();

        tool.clearError();

    }

    return {

        file,

        level,

        setLevel,

        progress,

        stage,

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