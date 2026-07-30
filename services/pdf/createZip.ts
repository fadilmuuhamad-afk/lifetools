import JSZip from "jszip";

export async function createZip(

    files: File[],

    filename = "files.zip"

): Promise<File> {

    const zip =
        new JSZip();

    for (const file of files) {

        zip.file(

            file.name,

            file

        );

    }

    const blob =
        await zip.generateAsync({

            type: "blob",

        });

    return new File(

        [blob],

        filename,

        {

            type: "application/zip",

            lastModified:
                Date.now(),

        }

    );

}