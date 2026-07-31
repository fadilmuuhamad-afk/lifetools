    import { PDFDocument } from "pdf-lib";

    export async function savePdf(

        pdf: PDFDocument,

        name: string,

    ) {

        const bytes =
            await pdf.save({

                useObjectStreams: true,

            });

        const buffer = new ArrayBuffer(bytes.length);

        new Uint8Array(buffer).set(bytes);

        return new File(

            [buffer],

            name,

            {

                type: "application/pdf",

            },

        );

    }