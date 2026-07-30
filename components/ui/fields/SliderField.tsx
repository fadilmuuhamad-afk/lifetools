"use client";

interface Props {
    label: string;
    value: number;
    min: number;
    max: number;
    step?: number;
    suffix?: string;
    onChange(value: number): void;
}

export default function SliderField({
    label,
    value,
    min,
    max,
    step = 1,
    suffix = "",
    onChange,
}: Props) {
    return (
        <div className="space-y-3">

            <div className="flex items-center justify-between">

                <label className="text-sm font-medium">
                    {label}
                </label>

                <span className="text-sm text-muted-foreground">
                    {value}
                    {suffix}
                </span>

            </div>

            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) =>
                    onChange(Number(e.target.value))
                }
                className="w-full"
            />

        </div>
    );
}