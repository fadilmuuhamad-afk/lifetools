"use client";

import SummaryInfo from "@/components/tool/shared/SummaryInfo";

import { formatBytes } from "@/utils/file";

interface Props {

    file: File;

    rotation: number;

}

export default function RotatePdfSummary({

    file,

    rotation,

}: Props) {

    return (

        <SummaryInfo

            title="Rotation Summary"

            items={[

                {

                    label: "Input File",

                    value: file.name,

                },

                {

                    label: "File Size",

                    value: formatBytes(
                        file.size
                    ),

                },

                {

                    label: "Rotation",

                    value: `${rotation}°`,

                },

                {

                    label: "Output",

                    value: "rotated.pdf",

                },

            ]}

        />

    );

}