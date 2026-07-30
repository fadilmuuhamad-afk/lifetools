"use client";

import {
    SummaryCard,
    SummaryGrid,
    SummaryRow,
} from "@/components/tool/summary";

import {
    PdfImageFit,
    PdfPageSize,
} from "@/services/pdf/utils";

import {
    PdfOrientation,
} from "@/services/pdf/imageToPdf";

interface Props {
    imageCount: number;
    pageSize: PdfPageSize;
    orientation: PdfOrientation;
    margin: number;
    fit: PdfImageFit;
}

export default function ImageToPdfSummary({
    imageCount,
    pageSize,
    orientation,
    margin,
    fit,
}: Props) {

    return (

        <SummaryCard title="PDF Summary">

            <SummaryGrid>

                <SummaryRow
                    label="Images"
                    value={imageCount}
                />

                <SummaryRow
                    label="Pages"
                    value={imageCount}
                />

                <SummaryRow
                    label="Page Size"
                    value={pageSize.toUpperCase()}
                />

                <SummaryRow
                    label="Orientation"
                    value={orientation}
                    valueClassName="capitalize"
                />

                <SummaryRow
                    label="Margin"
                    value={`${margin} pt`}
                />

                <SummaryRow
                    label="Image Fit"
                    value={fit}
                    valueClassName="capitalize"
                />

            </SummaryGrid>

        </SummaryCard>

    );

}