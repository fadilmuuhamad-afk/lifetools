"use client";

interface Props {
    file: File;
}

export default function FilePreview({
    file,
}: Props) {
    return (
        <div className="rounded-2xl border p-6">

            <h2 className="text-xl font-semibold">

                Selected File

            </h2>

            <div className="mt-6">

                <p>

                    <strong>Name:</strong>

                    {file.name}

                </p>

                <p className="mt-2">

                    <strong>Size:</strong>

                    {(file.size / 1024 / 1024).toFixed(2)}

                    MB

                </p>

            </div>

        </div>
    );
}