import { PDFDocument } from "pdf-lib";

export async function savePdf(

    pdf: PDFDocument,

    name: string,

) {

    const bytes =

        await pdf.save({

            useObjectStreams: true,

        });

    return new File(

        [bytes],

        name,

        {

            type: "application/pdf",

        },

    );

}