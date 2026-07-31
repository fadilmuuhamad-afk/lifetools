"use client";

export function useTextDownload() {

    function download(

        content: string,

        filename: string,

        mimeType = "text/plain;charset=utf-8",

    ) {

        if (!content) {

            return;

        }

        const blob = new Blob(

            [content],

            {

                type: mimeType,

            },

        );

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;

        link.download = filename;

        link.click();

        URL.revokeObjectURL(url);

    }

    return {

        download,

    };

}