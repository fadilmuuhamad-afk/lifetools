"use client";

import SummaryInfo from "@/components/tool/shared/SummaryInfo";

interface PageNumberPdfSummaryProps {

    fileName?: string;

    startNumber: number;

    fontSize: number;

    opacity: number;

    rotation: number;

    position: string;

}

export default function PageNumberPdfSummary({

    fileName,

    startNumber,

    fontSize,

    opacity,

    rotation,

    position,

}: PageNumberPdfSummaryProps) {

    return (

        <SummaryInfo

            title="Page Number Settings"

            items={[

                {
                    label: "File",
                    value: fileName ?? "-",
                },

                {
                    label: "Start Number",
                    value: String(startNumber),
                },

                {
                    label: "Font Size",
                    value: `${fontSize}px`,
                },

                {
                    label: "Opacity",
                    value: `${opacity}%`,
                },

                {
                    label: "Rotation",
                    value: `${rotation}°`,
                },

                {
                    label: "Position",
                    value: position,
                },

            ]}

        />

    );

}