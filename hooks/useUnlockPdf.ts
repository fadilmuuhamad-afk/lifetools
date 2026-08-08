"use client";

import { useState } from "react";

import { unlockPdf } from "@/services/pdf/unlock";
import { usePdfTool } from "./usePdfTool";

export function useUnlockPdf() {

    const pdf = usePdfTool(
        "pdf",
        "unlock-pdf",
    );

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
                "Please choose a protected PDF.",
            );

            return;

        }

        if (!password.trim()) {

            pdf.setError(
                "Please enter the password.",
            );

            return;

        }

        try {

            pdf.setProcessing(true);

            pdf.clearError();

            const result =
                await unlockPdf({

                    file,

                    password,

                });

            pdf.setResult(result);

        } catch (error) {

            pdf.setError(

                error instanceof Error

                    ? error.message

                    : "Failed to unlock PDF.",

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