import { degrees } from "pdf-lib";

import {
    loadPdf,
    savePdf,
} from "./utils";

export interface RotatePdfOptions {

    file: File;

    rotation: 90 | 180 | 270;

}

export async function rotatePdf({

    file,

    rotation,

}: RotatePdfOptions): Promise<File> {

    const pdf =
        await loadPdf(file);

    for (const page of pdf.getPages()) {

        page.setRotation(
            degrees(rotation)
        );

    }

    return savePdf(

        pdf,

        "rotated.pdf"

    );

}