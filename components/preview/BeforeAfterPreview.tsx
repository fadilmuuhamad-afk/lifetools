/* eslint-disable @next/next/no-img-element */

"use client";

interface Props {
    before?: string;
    after?: string;

    beforeLabel?: string;
    afterLabel?: string;

    previewType?: "image" | "pdf";
}

export default function BeforeAfterPreview({
    before,
    after,
    beforeLabel = "Original",
    afterLabel = "Result",
    previewType = "image",
}: Props) {
    function renderPreview(
        url: string | undefined,
        label: string
    ) {
        if (!url) {
            return (
                <div className="flex h-64 items-center justify-center rounded-xl border text-sm text-muted-foreground">
                    No preview
                </div>
            );
        }

        if (previewType === "pdf") {
            return (
                <iframe
                    src={url}
                    title={label}
                    className="h-96 w-full rounded-xl border bg-white"
                />
            );
        }

        return (
            <img
                src={url}
                alt={label}
                className="w-full rounded-xl border"
            />
        );
    }

    return (
        <div className="grid gap-6 md:grid-cols-2">

            <div>

                <h3 className="mb-3 font-semibold">
                    {beforeLabel}
                </h3>

                {renderPreview(before, beforeLabel)}

            </div>

            <div>

                <h3 className="mb-3 font-semibold">
                    {afterLabel}
                </h3>

                {renderPreview(after, afterLabel)}

            </div>

        </div>
    );
}