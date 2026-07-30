"use client";

import {
    runQpdf,
    savePdfBytes,
} from "@/services/pdf/core";

import { createOutputName } from "@/utils/file";

export async function linearizePdf(
    file: File,
) {
    const inputBytes =
        new Uint8Array(
            await file.arrayBuffer(),
        );

    const result =
        await runQpdf({
            inputs: {
                "input.pdf": inputBytes,
            },

            outputs: [
                "output.pdf",
            ],

            args: [
                "--linearize",
                "--",
                "input.pdf",
                "output.pdf",
            ],
        });

    const output =
        result.outputs["output.pdf"];

    if (!output) {
        throw new Error(
            "Output PDF not found.",
        );
    }

    return savePdfBytes(
        output,
        createOutputName(
            file.name,
            "-linearized",
            ".pdf",
        ),
    );
}