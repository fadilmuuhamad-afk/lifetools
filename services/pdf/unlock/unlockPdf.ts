"use client";

import type { UnlockPdfOptions } from "./types";

import {
    runQpdf,
    savePdfBytes,
} from "@/services/pdf/core";

import { createOutputName } from "@/utils/file";

export async function unlockPdf({
    file,
    password,
}: UnlockPdfOptions) {

    if (!password.trim()) {

        throw new Error(
            "Password is required.",
        );

    }

    const input =
        new Uint8Array(
            await file.arrayBuffer(),
        );

    const result =
        await runQpdf({

            inputs: {

                "input.pdf": input,

            },

            outputs: [

                "unlocked.pdf",

            ],

            args: [

                `--password=${password}`,

                "--decrypt",

                "input.pdf",

                "unlocked.pdf",

            ],

        });

    const output =
        result.outputs["unlocked.pdf"];

    if (!output) {

        throw new Error(
            "Unlocked PDF was not generated.",
        );

    }

    return savePdfBytes(

        output,

        createOutputName(

            file.name,

            "-unlocked",

            ".pdf",

        ),

    );

}