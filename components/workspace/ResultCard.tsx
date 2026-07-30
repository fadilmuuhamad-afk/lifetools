"use client";

import StatCard from "@/components/ui/StatCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

interface Props {
    originalFile: File;
    resultFile: File;
    onDownload: () => void;
}

function formatFileSize(bytes: number) {
    const units = ["B", "KB", "MB", "GB"];

    let size = bytes;
    let unit = 0;

    while (size >= 1024 && unit < units.length - 1) {
        size /= 1024;
        unit++;
    }

    return `${size.toFixed(unit === 0 ? 0 : 2)} ${units[unit]}`;
}

export default function ResultCard({
    originalFile,
    resultFile,
    onDownload,
}: Props) {

    const difference =
        ((resultFile.size - originalFile.size) /
            originalFile.size) *
        100;

    const differenceLabel =
        `${difference > 0 ? "+" : ""}${difference.toFixed(1)}%`;

    const status =
        difference < 0
            ? "Smaller File"
            : difference > 0
                ? "Larger File"
                : "No Size Change";

    const cardStyle =
        difference < 0
            ? "border-green-200 bg-green-50"
            : difference > 0
                ? "border-yellow-200 bg-yellow-50"
                : "border-gray-200 bg-gray-50";

    return (

        <div className={`rounded-2xl border p-6 ${cardStyle}`}>

            <h2 className="text-2xl font-bold">
                ✅ Result Ready
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-4">

                <StatCard
                    label="Original Size"
                    value={formatFileSize(originalFile.size)}
                />

                <StatCard
                    label="Result Size"
                    value={formatFileSize(resultFile.size)}
                />

                <StatCard
                    label="Difference"
                    value={differenceLabel}
                />

                <StatCard
                    label="Status"
                    value={status}
                />

            </div>

            <PrimaryButton
                className="mt-8"
                onClick={onDownload}
            >
                Download Result
            </PrimaryButton>

        </div>

    );

}