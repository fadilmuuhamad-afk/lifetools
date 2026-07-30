"use client";

import { useState } from "react";

import { protectPdf } from "@/services/pdf/protect";
import { usePdfTool } from "./usePdfTool";

export function useProtectPdf() {

    const pdf = usePdfTool();

    const [file, setFile] =
        useState<File | null>(null);

    const [password, setPassword] =
        useState("");

    function selectFile(file: File) {

        setFile(file);

        pdf.clearError();

        pdf.clearResult();

    }

    async function process() {

        if (!file) {

            pdf.setError(
                "Please choose a PDF.",
            );

            return;

        }

        if (!password.trim()) {

            pdf.setError(
                "Please enter a password.",
            );

            return;

        }

        try {

            pdf.setProcessing(true);

            pdf.clearError();

            const result =
                await protectPdf({

                    file,

                    userPassword:
                        password,

                });

            pdf.setResult(result);

        } catch (error) {

            pdf.setError(

                error instanceof Error

                    ? error.message

                    : "Failed to protect PDF.",

            );

        } finally {

            pdf.setProcessing(false);

        }

    }

    function reset() {

        setFile(null);

        setPassword("");

        pdf.clearResult();

        pdf.clearError();

    }

    return {

        file,

        password,
        setPassword,

        selectFile,

        process,

        reset,

        ...pdf,

    };

}