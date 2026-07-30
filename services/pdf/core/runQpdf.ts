"use client";

import { getQpdfRunner } from "./qpdf";

export type RunQpdfOptions = {
    inputs: Record<string, Uint8Array>;
    outputs: string[];
    args: string[];
};

export async function runQpdf({
    inputs,
    outputs,
    args,
}: RunQpdfOptions) {
    const runner = await getQpdfRunner();

    const result = await runner.run({
        inputs,
        outputs,
        args,
    });

    if (!result.ok) {
        const message =
            result.stderr.join("\n") ||
            result.warnings.join("\n") ||
            "QPDF execution failed.";

        throw new Error(message);
    }

    return result;
}