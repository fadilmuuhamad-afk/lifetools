"use client";

import { ImageOutputFormat } from "@/services/image/converter";

interface Props {
    inputFormat: ImageOutputFormat | null;

    outputFormat: ImageOutputFormat;

    quality: number;

    setQuality(value: number): void;

    onChange(value: ImageOutputFormat): void;
}

const formats: ImageOutputFormat[] = [
    "png",
    "jpeg",
    "webp",
];

export default function ConverterControls({
    inputFormat,
    outputFormat,
    quality,
    setQuality,
    onChange,
}: Props) {

    return (
        <div className="space-y-6">

            <div className="space-y-4">

                <h3 className="text-lg font-semibold">
                    Output Format
                </h3>

                <div className="grid grid-cols-3 gap-3">

                    {formats.map((format) => {

                        const active = outputFormat === format;
                        const disabled = inputFormat === format;

                        return (

                            <button
                                key={format}
                                type="button"
                                disabled={disabled}
                                onClick={() => onChange(format)}
                                className={`
                                    rounded-xl
                                    border
                                    p-4
                                    text-center
                                    font-medium
                                    transition-all

                                    ${active
                                        ? "border-primary bg-primary text-primary-foreground"
                                        : "hover:border-primary"
                                    }

                                    ${disabled
                                        ? "cursor-not-allowed opacity-40"
                                        : ""
                                    }
                                `}
                            >

                                {format.toUpperCase()}

                            </button>

                        );

                    })}

                </div>

            </div>

            {(outputFormat === "jpeg" ||
                outputFormat === "webp") && (

                    <div className="space-y-3">

                        <div className="flex items-center justify-between">

                            <span className="text-sm font-medium">
                                Quality
                            </span>

                            <span className="text-sm font-semibold">
                                {quality}%
                            </span>

                        </div>

                        <input
                            type="range"
                            min={10}
                            max={100}
                            step={1}
                            value={quality}
                            onChange={(e) =>
                                setQuality(Number(e.target.value))
                            }
                            className="w-full"
                        />

                        <p className="text-xs text-muted-foreground">
                            Higher quality produces larger file sizes.
                        </p>

                    </div>

                )}

        </div>
    );

}