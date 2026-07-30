export function createImageFile(

    blob: Blob,

    filename: string,

    type: string

) {

    return new File(

        [blob],

        filename,

        {

            type,

            lastModified:
                Date.now(),

        }

    );

}