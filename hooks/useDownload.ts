"use client";

export function downloadFile(
    file: File,
    url: string
) {

    const link =
        document.createElement("a");

    link.href = url;
    link.download = file.name;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

}