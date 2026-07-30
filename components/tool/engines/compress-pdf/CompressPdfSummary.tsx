"use client";

import type {
    CompressionProgress,
    CompressionStage,
} from "@/services/pdf/compress/types";

import SummaryInfo from "@/components/tool/shared/SummaryInfo";

interface CompressPdfSummaryProps {

    file: File;

    progress: CompressionProgress;

    stage: CompressionStage;

}

export default function CompressPdfSummary({

    file,

    progress,

    stage,

}: CompressPdfSummaryProps) {

    return (

        <SummaryInfo

            items={[

                {

                    label: "File",

                    value: file.name,

                },

                {

                    label: "Pages Processed",

                    value:

                        progress.total === 0

                            ? "-"

                            : `${progress.current} / ${progress.total}`,

                },

                {

                    label: "Progress",

                    value: `${progress.percent}%`,

                },

                {

                    label: "Stage",

                    value: stage,

                },

            ]}

        />

    );

}