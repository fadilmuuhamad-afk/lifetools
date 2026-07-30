"use client";

import { createQpdfRunner } from "qpdf-run";

let runner:
    Awaited<
        ReturnType<
            typeof createQpdfRunner
        >
    > | null = null;

export async function getQpdfRunner() {

    if (runner) {
        return runner;
    }

    const origin =
        window.location.origin;

    runner =
        await createQpdfRunner({

            workerUrl:
                `${origin}/qpdf/worker.js`,

            qpdfJsUrl:
                `${origin}/qpdf/qpdf.js`,

            wasmUrl:
                `${origin}/qpdf/qpdf.wasm`,

        });

    return runner;

}

export async function destroyQpdfRunner() {

    if (!runner) {
        return;
    }

    await runner.destroy();

    runner = null;

}