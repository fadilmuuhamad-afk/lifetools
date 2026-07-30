import type { PdfRenderer, RenderResult } from "./PdfRenderer";

export interface RenderPagesOptions {
    scale?: number;
    startPage?: number;
    endPage?: number;
}

export async function* renderPages(
    renderer: PdfRenderer,
    options: RenderPagesOptions = {},
): AsyncGenerator<RenderResult> {

    const {
        scale = 1,
        startPage = 1,
        endPage = renderer.pageCount,
    } = options;

    for (let page = startPage; page <= endPage; page++) {
        yield await renderer.render(page, scale);
    }
}