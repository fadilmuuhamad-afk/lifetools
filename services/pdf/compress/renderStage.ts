import type {
    PdfRenderer,
    RenderResult,
} from "@/services/pdf/core";

import {
    renderPages,
    resizeCanvas,
} from "@/services/pdf/core";

import type {
    CompressionPreset,
} from "./quality";

export async function* renderStage(

    renderer: PdfRenderer,

    preset: CompressionPreset,

): AsyncGenerator<RenderResult> {

    for await (

        const page of renderPages(

            renderer,

            {

                scale: preset.scale,

            },

        )

    ) {

        const canvas = resizeCanvas(
            page.canvas,
            preset.resize,
        );

        yield {
            pageNumber: page.pageNumber,
            canvas,
            width: canvas.width,
            height: canvas.height,
        };

    }

}