"use client";

import SummaryInfo from "@/components/tool/shared/SummaryInfo";
import type { WatermarkType } from "@/services/pdf/watermark";

interface WatermarkPdfSummaryProps {

    fileName?: string;

    type: WatermarkType;

    text: string;

    image?: File | null;

    fontSize: number;

    width: number;

    height: number;

    opacity: number;

    rotation: number;

    position: string;

}

export default function WatermarkPdfSummary({

    fileName,

    type,

    text,

    image,

    fontSize,

    width,

    height,

    opacity,

    rotation,

    position,

}: WatermarkPdfSummaryProps) {

    return (

        <SummaryInfo

            title="Watermark Summary"

            items={[

                {
                    label: "File",
                    value: fileName ?? "-",
                },

                {
                    label: "Watermark Type",
                    value: type === "text"
                        ? "Text"
                        : "Image",
                },

                ...(type === "text"

                    ? [

                        {
                            label: "Watermark",
                            value: text,
                        },

                        {
                            label: "Font Size",
                            value: `${fontSize}px`,
                        },

                    ]

                    : [

                        {
                            label: "Image",
                            value: image?.name ?? "-",
                        },

                        {
                            label: "Width",
                            value: `${width}px`,
                        },

                        {
                            label: "Height",
                            value: `${height}px`,
                        },

                    ]),

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