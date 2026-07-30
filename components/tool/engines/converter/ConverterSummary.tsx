"use client";

import { ImageOutputFormat } from "@/services/image/converter";

interface Props {
    file: File;

    inputFormat: ImageOutputFormat | null;

    outputFormat: ImageOutputFormat;

    imageWidth: number;

    imageHeight: number;

    imageSize: number;

    quality: number;
}

function formatFileSize(bytes: number) {

    if (bytes < 1024) {

        return `${bytes} B`;

    }

    if (bytes < 1024 * 1024) {

        return `${(bytes / 1024).toFixed(1)} KB`;

    }

    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;

}

export default function ConverterSummary({

    inputFormat,

    outputFormat,

    imageWidth,

    imageHeight,

    imageSize,

    quality,

}: Props) {

    return (

        <div className="rounded-xl border p-5 space-y-4">

            <h3 className="text-lg font-semibold">

                Conversion Summary

            </h3>

            <div className="grid grid-cols-2 gap-y-3 text-sm">

                <span className="text-muted-foreground">

                    Original Format

                </span>

                <strong className="text-right">

                    {inputFormat?.toUpperCase() ?? "-"}

                </strong>

                <span className="text-muted-foreground">

                    Output Format

                </span>

                <strong className="text-right">

                    {outputFormat.toUpperCase()}

                </strong>

                <span className="text-muted-foreground">

                    Dimensions

                </span>

                <strong className="text-right">

                    {imageWidth} × {imageHeight}

                </strong>

                <span className="text-muted-foreground">

                    Original Size

                </span>

                <strong className="text-right">

                    {formatFileSize(imageSize)}

                </strong>

                {(outputFormat === "jpeg" ||
                    outputFormat === "webp") && (

                        <>

                            <span className="text-muted-foreground">

                                Quality

                            </span>

                            <strong className="text-right">

                                {quality}%

                            </strong>

                        </>

                    )}

            </div>

        </div>

    );

}