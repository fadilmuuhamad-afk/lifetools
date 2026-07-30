"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";
import type { Accept, FileRejection } from "react-dropzone";

import EmptyState from "./EmptyState";

interface Props {

    onFile?(file: File): void;

    onFiles?(files: File[]): void;

    multiple?: boolean;

    accept?: Accept;

    maxFiles?: number;

    maxSize?: number;

    buttonText?: string;

    helperText?: string;

}

export default function UploadCard({

    onFile,

    onFiles,

    multiple = false,

    accept = {

        "image/jpeg": [],

        "image/png": [],

        "image/webp": [],

    },

    maxFiles = 1,

    maxSize = 20 * 1024 * 1024,

    buttonText = "Select Image",

    helperText = "Supports JPG, PNG, WEBP • Max 20 MB",

}: Props) {

    const onDrop = useCallback(

        (
            acceptedFiles: File[],
            fileRejections: FileRejection[]
        ) => {

            if (fileRejections.length > 0) {

                const error =
                    fileRejections[0].errors[0];

                switch (error.code) {

                    case "file-too-large":

                        toast.error(
                            "Maximum file size exceeded."
                        );

                        return;

                    case "file-invalid-type":

                        toast.error(
                            "Unsupported file type."
                        );

                        return;

                    case "too-many-files":

                        toast.error(
                            `Maximum ${maxFiles} file(s).`
                        );

                        return;

                    default:

                        toast.error(
                            "Unable to upload file."
                        );

                        return;

                }

            }

            if (acceptedFiles.length === 0) {

                return;

            }

            if (multiple) {

                onFiles?.(
                    acceptedFiles
                );

            } else {

                onFile?.(
                    acceptedFiles[0]
                );

            }

        },

        [

            multiple,

            onFile,

            onFiles,

            maxFiles,

        ]

    );

    const {

        getRootProps,

        getInputProps,

        isDragActive,

    } = useDropzone({

        multiple,

        maxFiles,

        maxSize,

        accept,

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

                p-6 sm:p-10

                transition-all

                duration-300

                ${isDragActive

                    ? "border-blue-600 bg-blue-50 scale-[1.01]"

                    : "border-border hover:border-blue-400 hover:bg-muted/40"

                }

            `}

        >

            <input

                {...getInputProps()}

            />

            <div className="flex flex-col items-center">

                <EmptyState />

                <button

                    type="button"

                    className="mt-8 w-full rounded-xl bg-blue-600 px-8 py-3 font-medium text-white transition hover:bg-blue-700 sm:w-auto"

                >

                    {buttonText}

                </button>

                <p className="mt-6 text-sm text-muted-foreground">

                    {helperText}

                </p>

            </div>

        </div>

    );

}