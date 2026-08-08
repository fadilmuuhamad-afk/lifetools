"use client";

import { useState } from "react";

import { usePdfTool } from "./usePdfTool";

import {
    parsePageSelection,
    isValidPageSelection,
    stringifyPageSelection,
} from "@/utils/pageSelection";

export function useRemovePages() {

    const [file, setFile] =
        useState<File | null>(null);

    const [pages, setPages] =
        useState("");

    const [

        selectedPages,

        setSelectedPages,

    ] = useState<number[]>([]);

    const {

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

    } = usePdfTool(
        "pdf",
        "remove-pages",
    );

    async function process() {

        if (!file || processing) {

            return;

        }

        try {

            // ✅ Validasi dulu
            setProcessing(true);

            setError("");

            if (!isValidPageSelection(pages)) {

                setError(
                    "Invalid page selection. Example: 1-3,5,8-10"
                );

                setProcessing(false);

                return;

            }

            const {

                removePages,

            } = await import(
                "@/services/pdf/removePages"
            );

            const pageNumbers =
                parsePageSelection(pages);

            const output =
                await removePages({

                    file,

                    pages: pageNumbers,

                });

            setResult(output);

        }
        catch (error) {

            setError(

                error instanceof Error

                    ? error.message

                    : "Something went wrong."

            );

        }
        finally {

            setProcessing(false);

        }

    }
    

    function selectFile(selected: File) {

        setFile(selected);

        setPages("");

        setSelectedPages([]);

        clearResult();

        clearError();

    }

    function reset() {

        setFile(null);

        setPages("");

        setSelectedPages([]);

        clearResult();

        clearError();

    }
    function togglePage(page: number) {

        setSelectedPages((current) => {

            const index = page - 1;

            let updated: number[];

            if (current.includes(index)) {

                updated = current.filter(
                    (item) => item !== index,
                );

            } else {

                updated = [
                    ...current,
                    index,
                ];

            }

            setPages(
                stringifyPageSelection(updated),
            );

            return updated;

        });

    }

    function updatePages(value: string) {

        setPages(value);

        if (isValidPageSelection(value)) {

            setSelectedPages(
                parsePageSelection(value),
            );

        } else {

            setSelectedPages([]);

        }

    }

    return {

        file,

        pages,

        updatePages,

        selectedPages,

        togglePage,

        result,

        error,

        resultUrl,

        processing,

        selectFile,

        process,

        download,

        reset,

    }

}