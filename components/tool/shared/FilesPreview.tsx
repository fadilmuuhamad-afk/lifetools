"use client";

interface Props {

    files: File[];

    title?: string;

}

export default function FilesPreview({

    files,

    title = "Selected Files",

}: Props) {

    return (

        <div className="rounded-xl border p-6">

            <h3 className="font-semibold">

                {title}

            </h3>

            <div className="mt-4 space-y-2">

                {files.map((file, index) => (

                    <div

                        key={`${file.name}-${index}`}

                        className="rounded-lg border px-3 py-2 text-sm"

                    >

                        {index + 1}. {file.name}

                    </div>

                ))}

            </div>

        </div>

    );

}