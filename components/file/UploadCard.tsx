"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";


import EmptyState from "./EmptyState";

interface Props {
    onFile(file: File): void;
}

export default function UploadCard({
    onFile,
}: Props) {
    const [error, setError] = useState("");
    const onDrop = useCallback(
        (acceptedFiles: File[], fileRejections) => {

            if (fileRejections.length > 0) {
                setError("Only JPG, PNG, WEBP files up to 20 MB are supported.");
                return;
            }

            setError("");

            if (acceptedFiles.length > 0) {
                onFile(acceptedFiles[0]);
            }

        },
        [onFile]
    );

    const {
        
        getRootProps,
        getInputProps,
        isDragActive,
    } = useDropzone({
        multiple: false,

        maxFiles: 1,

        maxSize: 20 * 1024 * 1024,

        accept: {
            "image/jpeg": [],
            "image/png": [],
            "image/webp": [],
        },

        onDrop,
    });

    return (
        <div
            {...getRootProps()}
            className={`
      group
      cursor-pointer
      rounded-3xl
      border-2
      border-dashed
      p-10
      transition-all
      duration-300

      ${isDragActive
                    ? "border-blue-600 bg-blue-50 scale-[1.01]"
                    : "border-border hover:border-blue-400 hover:bg-muted/40"
                }
    `}
        >
            <input {...getInputProps()} />

            <div className="flex flex-col items-center">

                <EmptyState />

                <button
                    type="button"
                    className="mt-8 rounded-xl bg-blue-600 px-8 py-3 font-medium text-white transition hover:bg-blue-700"
                >
                    Select Image
                </button>

                <p className="mt-6 text-sm text-muted-foreground">
                    Supports JPG, PNG, WEBP • Max 20 MB
                </p>
                

            </div>
            
            {error && (
                <p className="mt-4 text-center text-sm font-medium text-red-600">
                    {error}
                </p>
            )}

        </div>
    );
}