"use client";
import StatCard from "@/components/ui/StatCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

interface Props {
    originalFile: File;
    compressedFile: File;
    onDownload: () => void;
}

export default function ResultCard({
    originalFile,
    compressedFile,
    onDownload,
}: Props) {
    const originalMB = originalFile.size / 1024 / 1024;
    const compressedMB = compressedFile.size / 1024 / 1024;

    const saved =
        (
            ((originalFile.size - compressedFile.size) /
                originalFile.size) *
            100
        ).toFixed(1);

    return (
        <div className="rounded-2xl border border-green-200 bg-green-50 p-6">

            <h2 className="text-2xl font-bold text-green-700">

                ✅ Compression Complete

            </h2>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

                <StatCard
                    label="Original"
                    value={`${originalMB.toFixed(2)} MB`}
                />

                <StatCard
                    label="Compressed"
                    value={`${compressedMB.toFixed(2)} MB`}
                />

                <StatCard
                    label="Saved"
                    value={`${saved}%`}
                />

            </div>

            <PrimaryButton
                className="mt-8"
                onClick={onDownload}
            >
                Download Image
            </PrimaryButton>

        </div>
    );
}