"use client";

import StatCard from "@/components/ui/StatCard";

interface Props {

    format?: string | null;

    width: number;

    height: number;

    size: number;

}

function formatBytes(bytes: number) {

    const units = ["B", "KB", "MB", "GB"];

    let value = bytes;
    let index = 0;

    while (value >= 1024 && index < units.length - 1) {

        value /= 1024;
        index++;

    }

    return `${value.toFixed(index === 0 ? 0 : 2)} ${units[index]}`;

}

function greatestCommonDivisor(a: number, b: number): number {

    while (b !== 0) {

        [a, b] = [b, a % b];

    }

    return a;

}

export default function ImageInfo({

    format,

    width,

    height,

    size,

}: Props) {

    const megapixels =
        ((width * height) / 1_000_000).toFixed(2);

    const orientation =
        width > height
            ? "Landscape"
            : width < height
                ? "Portrait"
                : "Square";

    const gcd =
        greatestCommonDivisor(width, height);

    const aspectRatio =
        width && height
            ? `${width / gcd}:${height / gcd}`
            : "-";

    return (

        <div className="space-y-4">

            <h3 className="text-lg font-semibold">

                Image Information

            </h3>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                <StatCard
                    label="Format"
                    value={format?.toUpperCase() ?? "-"}
                />

                <StatCard
                    label="Dimensions"
                    value={`${width} × ${height}`}
                />

                <StatCard
                    label="Resolution"
                    value={`${megapixels} MP`}
                />

                <StatCard
                    label="Orientation"
                    value={orientation}
                />

                <StatCard
                    label="Aspect Ratio"
                    value={aspectRatio}
                />

                <StatCard
                    label="File Size"
                    value={formatBytes(size)}
                />

            </div>

        </div>

    );

}