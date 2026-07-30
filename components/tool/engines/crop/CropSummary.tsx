"use client";

import CardSection from "@/components/ui/CardSection";

interface Props {
    zoom: number;
    rotation: number;
    aspect: number;
    file: File;
}

const aspectLabels: Record<number, string> = {
    1: "1:1",
    [4 / 3]: "4:3",
    [3 / 2]: "3:2",
    [16 / 9]: "16:9",
};

export default function CropSummary({
    zoom,
    rotation,
    aspect,
    file,
}: Props) {
    const aspectLabel =
        aspectLabels[aspect] ?? "Custom";

    return (
        <CardSection title="Crop Summary">

            <div className="space-y-4 text-sm">

                <div className="flex justify-between">
                    <span className="text-muted-foreground">
                        File
                    </span>

                    <span className="font-medium">
                        {file.name}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-muted-foreground">
                        Aspect Ratio
                    </span>

                    <span className="font-medium">
                        {aspectLabel}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-muted-foreground">
                        Zoom
                    </span>

                    <span className="font-medium">
                        {zoom.toFixed(1)}×
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-muted-foreground">
                        Rotation
                    </span>

                    <span className="font-medium">
                        {rotation}°
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-muted-foreground">
                        Original Size
                    </span>

                    <span className="font-medium">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                    </span>
                </div>

            </div>

        </CardSection>
    );
}