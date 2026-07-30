"use client";

import {
    SummaryCard,
    SummaryGrid,
    SummaryRow,
} from "@/components/tool/summary";

import { formatBytes } from "@/utils/file";

interface Props {

    file: File;

    scale: number;

    format: "png" | "jpeg";

    quality: number;

}

export default function PdfToImageSummary({

    file,

    scale,

    format,

    quality,

}: Props) {

    return (

        <SummaryCard title="Conversion Summary">

            <SummaryGrid>

                <SummaryRow
                    label="Filename"
                    value={file.name}
                />

                <SummaryRow
                    label="File Size"
                    value={formatBytes(file.size)}
                />

                <SummaryRow
                    label="Output"
                    value={
                        format === "png"
                            ? "PNG"
                            : "JPG"
                    }
                />

                <SummaryRow
                    label="Render Scale"
                    value={`${scale}x`}
                />

                <SummaryRow
                    label="JPEG Quality"
                    value={`${Math.round(
                        quality * 100
                    )}%`}
                />

            </SummaryGrid>

        </SummaryCard>

    );

}