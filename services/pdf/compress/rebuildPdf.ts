import { PDFDocument } from "pdf-lib";

export interface RebuildPage {

    blob: Blob;

    width: number;

    height: number;

}

export async function rebuildPdf(

    pages: RebuildPage[],

) {

    const pdf =

        await PDFDocument.create();

    for (const page of pages) {

        const bytes =

            await page.blob.arrayBuffer();

        const image =

            await pdf.embedJpg(bytes);

        const pdfPage =

            pdf.addPage([

                page.width,

                page.height,

            ]);

        pdfPage.drawImage(image, {

            x: 0,

            y: 0,

            width: page.width,

            height: page.height,

        });

    }

    return pdf;

}