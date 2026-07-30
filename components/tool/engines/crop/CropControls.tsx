"use client";

import CardSection from "@/components/ui/CardSection";
import SliderField from "@/components/ui/SliderField";

interface Props {
    zoom: number;
    setZoom(value: number): void;

    rotation: number;
    setRotation(value: number): void;

    aspect: number;
    setAspect(value: number): void;
}

const aspectPresets = [
    {
        label: "1:1",
        value: 1,
    },
    {
        label: "4:3",
        value: 4 / 3,
    },
    {
        label: "3:2",
        value: 3 / 2,
    },
    {
        label: "16:9",
        value: 16 / 9,
    },
];

export default function CropControls({
    zoom,
    setZoom,

    rotation,
    setRotation,

    aspect,
    setAspect,
}: Props) {
    return (
        <CardSection title="Crop Settings">

            {/* Aspect Ratio */}
            <div className="space-y-3">

                <label className="text-sm font-semibold">
                    Aspect Ratio
                </label>

                <div className="flex flex-wrap gap-2">

                    {aspectPresets.map((preset) => (

                        <button
                            key={preset.label}
                            type="button"
                            onClick={() => setAspect(preset.value)}
                            className={`rounded-lg border px-4 py-2 text-sm transition
                                ${aspect === preset.value
                                    ? "bg-primary text-primary-foreground border-primary"
                                    : "hover:bg-muted"
                                }`}
                        >
                            {preset.label}
                        </button>

                    ))}

                </div>

            </div>

            {/* Zoom */}
            <div className="space-y-3">

                <div className="flex items-center justify-between">

                    <label className="text-sm font-semibold">
                        Zoom
                    </label>

                    <span className="text-sm text-muted-foreground">
                        {zoom.toFixed(1)}×
                    </span>

                </div>

                <SliderField
                    label="Zoom"
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.1}
                    suffix="×"
                    onChange={setZoom}
                />

            </div>

            {/* Rotation */}
            <div className="space-y-3">

                <div className="flex items-center justify-between">

                    <label className="text-sm font-semibold">
                        Rotation
                    </label>

                    <span className="text-sm text-muted-foreground">
                        {rotation}°
                    </span>

                </div>

                <SliderField
                    label="Rotation"
                    value={rotation}
                    min={0}
                    max={360}
                    suffix="°"
                    onChange={setRotation}
                />

            </div>

        </CardSection>
    );
}