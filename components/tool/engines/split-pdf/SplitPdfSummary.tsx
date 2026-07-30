"use client";

import {

    SummaryCard,

    SummaryGrid,

    SummaryRow,

} from "@/components/tool/summary";

import { formatBytes } from "@/utils/file";

interface Props {

    file: File;

}

export default function SplitPdfSummary({

    file,

}: Props) {

    return (

        <SummaryCard title="Split Summary">

            <SummaryGrid>

                <SummaryRow

                    label="Input File"

                    value={file.name}

                />

                <SummaryRow

                    label="File Size"

                    value={formatBytes(file.size)}

                />

                <SummaryRow

                    label="Output"

                    value="ZIP Archive"

                />

            </SummaryGrid>

        </SummaryCard>

    );

}