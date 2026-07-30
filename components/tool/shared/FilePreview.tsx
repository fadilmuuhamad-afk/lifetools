"use client";

import { ReactNode } from "react";

interface Props {

    file: File;

    title?: string;

    preview?: ReactNode;

}

export default function FilePreview({

    file,

    title = "Selected File",

    preview,

}: Props) {

    return (

        <div className="rounded-xl border p-6">

            <h3 className="font-semibold">

                {title}

            </h3>

            {preview && (

                <div className="mt-4 overflow-hidden rounded-lg border">

                    {preview}

                </div>

            )}

            <div className="mt-4 rounded-lg border p-3">

                {file.name}

            </div>

        </div>

    );

}