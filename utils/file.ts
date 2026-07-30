export function getExtension(filename: string) {

    return filename.split(".").pop() ?? "";

}

export function replaceExtension(

    filename: string,

    extension: string

) {

    return filename.replace(/\.[^/.]+$/, "") + extension;

}

export function createOutputName(

    filename: string,

    suffix: string,

    extension: string

) {

    return replaceExtension(

        filename,

        `${suffix}${extension}`

    );

}

export function formatBytes(bytes: number): string {

    if (bytes === 0) {

        return "0 B";

    }

    const units = [

        "B",

        "KB",

        "MB",

        "GB",

        "TB",

    ];

    const index = Math.floor(

        Math.log(bytes) / Math.log(1024)

    );

    const value =

        bytes /

        Math.pow(1024, index);

    return `${value.toFixed(

        index === 0 ? 0 : 2

    )} ${units[index]}`;

}