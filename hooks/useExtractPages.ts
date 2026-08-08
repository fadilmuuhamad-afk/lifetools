"use client";

import { useState } from "react";

import { usePdfTool } from "./usePdfTool";

import {

    parsePageSelection,

    isValidPageSelection,

} from "@/utils/pageSelection";

export function useExtractPages() {

    const [file, setFile] =
        useState<File | null>(null);

    const [pages, setPages] =
        useState("");

    const {

        result,

        setResult,

        processing,

        setProcessing,

        resultUrl,

        download,

        error,

        setError,

        clearError,

        clearResult,

    } = usePdfTool(
        "pdf",
        "extract-pages",
    );

    async function process() {

        if (!file || processing) {

            return;

        }

        try {

            setProcessing(true);

            clearError();

            if (
                !isValidPageSelection(
                    pages
                )
            ) {

                setError(

                    "Invalid page selection."

                );

                return;

            }

            const {

                extractPages,

            } = await import(
                "@/services/pdf/extractPages"
            );

            const {

                createZip,

            } = await import(
                "@/services/pdf/createZip"
            );

            const outputs =
                await extractPages({

                    file,

                    pages:
                        parsePageSelection(
                            pages
                        ),

                });

            const zip =
                await createZip(

                    outputs,

                    "extracted-pages.zip"

                );

            setResult(zip);

        } catch (error) {

            setError(

                error instanceof Error

                    ? error.message

                    : "Something went wrong."

            );

        } finally {

            setProcessing(false);

        }

    }

    function selectFile(
        selected: File
    ) {

        setFile(selected);

        clearResult();

        clearError();

    }

    function reset() {

        setFile(null);

        setPages("");

        clearResult();

        clearError();

    }

    return {

        file,

        pages,

        result,

        resultUrl,

        processing,

        error,

        selectFile,

        process,

        download,

        reset,

        setPages,

    };

}