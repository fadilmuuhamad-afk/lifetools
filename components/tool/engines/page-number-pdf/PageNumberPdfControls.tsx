"use client";

import type { WatermarkPosition } from "@/services/pdf/watermark";

import NumberField from "@/components/ui/fields/NumberField";
import SelectField from "@/components/ui/fields/SelectField";

interface Props {
    startNumber: number;
    setStartNumber: (value: number) => void;

    fontSize: number;
    setFontSize: (value: number) => void;

    opacity: number;
    setOpacity: (value: number) => void;

    rotation: number;
    setRotation: (value: number) => void;

    position: WatermarkPosition;
    setPosition: (value: WatermarkPosition) => void;

    error?: string | null;
}

const positionOptions = [
    { label: "Top Left", value: "top-left" },
    { label: "Top Center", value: "top-center" },
    { label: "Top Right", value: "top-right" },

    { label: "Center Left", value: "center-left" },
    { label: "Center", value: "center" },
    { label: "Center Right", value: "center-right" },

    { label: "Bottom Left", value: "bottom-left" },
    { label: "Bottom Center", value: "bottom-center" },
    { label: "Bottom Right", value: "bottom-right" },
];

export default function PageNumberPdfControls({

    startNumber,
    setStartNumber,

    fontSize,
    setFontSize,

    opacity,
    setOpacity,

    rotation,
    setRotation,

    position,
    setPosition,

    error,

}: Props) {

    return (

        <div className="space-y-6">

            <NumberField
                label="Start Number"
                value={startNumber}
                min={1}
                onChange={setStartNumber}
            />

            <NumberField
                label="Font Size"
                value={fontSize}
                min={8}
                max={200}
                onChange={setFontSize}
            />

            <NumberField
                label="Opacity (%)"
                value={opacity}
                min={0}
                max={100}
                onChange={setOpacity}
            />

            <NumberField
                label="Rotation"
                value={rotation}
                min={-180}
                max={180}
                onChange={setRotation}
            />

            <SelectField
                label="Position"
                value={position}
                options={positionOptions}
                onChange={(value) =>
                    setPosition(
                        value as WatermarkPosition,
                    )
                }
            />

            {error && (

                <div
                    className="
            rounded-xl
            border
            border-red-300
            bg-red-50
            px-4
            py-3
            text-sm
            text-red-600
        "
                >
                    {error}
                </div>

            )}

        </div>

    );

}