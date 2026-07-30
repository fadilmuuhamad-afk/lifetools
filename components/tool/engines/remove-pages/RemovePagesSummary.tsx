"use client";

import SummaryInfo from "@/components/tool/shared/SummaryInfo";

import { formatBytes } from "@/utils/file";

interface Props {

    file: File;

    pages: string;

}

export default function RemovePagesSummary({

    file,

    pages,

}: Props) {

    return (

        <SummaryInfo

            title="Remove Pages Summary"

            items={[

                {

                    label: "Input File",

                    value: file.name,

                },

                {

                    label: "File Size",

                    value: formatBytes(file.size),

                },

                {

                    label: "Pages",

                    value: pages || "-",

                },

                {

                    label: "Output",

                    value: "removed-pages.pdf",

                },

            ]}

        />

    );

}