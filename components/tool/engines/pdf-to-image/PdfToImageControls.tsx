"use client";

interface Props {

    scale: number;

    format: "png" | "jpeg";

    quality: number;

    onScaleChange(
        value: number
    ): void;

    onFormatChange(
        value: "png" | "jpeg"
    ): void;

    onQualityChange(
        value: number
    ): void;

}

export default function PdfToImageControls({

    scale,

    format,

    quality,

    onScaleChange,

    onFormatChange,

    onQualityChange,

}: Props) {

    return (

        <div className="space-y-6">

            <div>

                <label className="mb-2 block text-sm font-medium">

                    Output Format

                </label>

                <select

                    className="w-full rounded-md border p-2"

                    value={format}

                    onChange={(e) =>
                        onFormatChange(
                            e.target.value as
                            | "png"
                            | "jpeg"
                        )
                    }

                >

                    <option value="png">

                        PNG

                    </option>

                    <option value="jpeg">

                        JPG

                    </option>

                </select>

            </div>

            <div>

                <label className="mb-2 block text-sm font-medium">

                    Render Scale

                </label>

                <input

                    type="range"

                    min={1}

                    max={4}

                    step={0.5}

                    value={scale}

                    onChange={(e) =>
                        onScaleChange(
                            Number(
                                e.target.value
                            )
                        )
                    }

                    className="w-full"

                />

                <p className="mt-1 text-sm text-muted-foreground">

                    {scale}x

                </p>

            </div>

            <div>

                <label className="mb-2 block text-sm font-medium">

                    JPEG Quality

                </label>

                <input

                    type="range"

                    min={0.5}

                    max={1}

                    step={0.05}

                    value={quality}

                    onChange={(e) =>
                        onQualityChange(
                            Number(
                                e.target.value
                            )
                        )
                    }

                    className="w-full"

                />

                <p className="mt-1 text-sm text-muted-foreground">

                    {Math.round(
                        quality * 100
                    )}
                    %

                </p>

            </div>

        </div>

    );

}