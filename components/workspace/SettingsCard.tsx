"use client";

interface Props {
    quality: number;

    setQuality(value: number): void;
}

export default function SettingsCard({
    quality,
    setQuality,
}: Props) {
    return (
        <div className="rounded-2xl border p-6">

            <h2 className="text-xl font-semibold">

                Compression Settings

            </h2>

            <div className="mt-6">

                <input
                    type="range"
                    min={10}
                    max={100}
                    value={quality}
                    onChange={(e) =>
                        setQuality(Number(e.target.value))
                    }
                    className="w-full"
                />

                <p className="mt-4">

                    Quality

                    <strong>

                        {quality}%

                    </strong>

                </p>

            </div>

        </div>
    );
}