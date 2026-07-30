"use client";

import SummaryInfo from "@/components/tool/shared/SummaryInfo";

import { formatBytes } from "@/utils/file";

interface Props {

    files: File[];

}

export default function MergePdfSummary({

    files,

}: Props) {

    const totalSize = files.reduce(

        (sum, file) => sum + file.size,

        0

    );

    return (

        <SummaryInfo

            title="Merge Summary"

            items={[

                {

                    label: "PDF Files",

                    value: files.length,

                },

                {

                    label: "Total Size",

                    value: formatBytes(totalSize),

                },

                {

                    label: "Output",

                    value: "merged.pdf",

                },

            ]}

        />

    );

}