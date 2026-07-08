"use client";

import { useEffect, useState } from "react";
import { getImageMetadata, ImageMetadata } from "@/services/image/metadata";

interface Props {
    file: File;
}

export default function ImagePreview({ file }: Props) {
    const [meta, setMeta] = useState<ImageMetadata | null>(null);
    const [previewUrl, setPreviewUrl] =
        useState("");

    useEffect(() => {
        const url = URL.createObjectURL(file);

        setPreviewUrl(url);

        getImageMetadata(file).then(setMeta);

        return () => {
            URL.revokeObjectURL(url);
        };
    }, [file]);

    if (!meta) {
        return <p>Loading image information...</p>;
    }

    return (
        <div className="rounded-2xl border p-6">
            <h2 className="text-xl font-bold">
                Image Information
            </h2>
            
            <img
                src={previewUrl}
                alt={meta.name}
                className="mt-6 mb-6 h-56 w-full rounded-xl border object-contain"
            />

            <div className="mt-6 space-y-2">

                <p>
                    <strong>Name:</strong> {meta.name}
                </p>

                <p>
                    <strong>Format:</strong> {meta.type}
                </p>

                <p>
                    <strong>Size:</strong>{" "}
                    {(meta.size / 1024 / 1024).toFixed(2)} MB
                </p>

                <p>
                    <strong>Resolution:</strong>{" "}
                    {meta.width} × {meta.height}
                </p>

            </div>
        </div>
    );
}