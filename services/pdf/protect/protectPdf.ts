"use client";

import type { ProtectPdfOptions } from "./types";

import {
    runQpdf,
    savePdfBytes,
} from "@/services/pdf/core";

import { createOutputName } from "@/utils/file";

export async function protectPdf({
    file,
    userPassword,
    ownerPassword,
}: ProtectPdfOptions) {

    if (!userPassword.trim()) {
        throw new Error(
            "Password is required.",
        );
    }

    const input =
        new Uint8Array(
            await file.arrayBuffer(),
        );

    const owner =
        ownerPassword?.trim() ||
        userPassword;

    const result =
        await runQpdf({

            inputs: {
                "input.pdf": input,
            },

            outputs: [
                "protected.pdf",
            ],

            args: [

                "--encrypt",

                `--user-password=${userPassword}`,

                `--owner-password=${owner}`,

                "--bits=256",

                "--",

                "input.pdf",

                "protected.pdf",

            ],

        });

    const output =
        result.outputs["protected.pdf"];

    if (!output) {
        throw new Error(
            "Protected PDF was not generated.",
        );
    }

    return savePdfBytes(

        output,

        createOutputName(

            file.name,

            "-protected",

            ".pdf",

        ),

    );
}