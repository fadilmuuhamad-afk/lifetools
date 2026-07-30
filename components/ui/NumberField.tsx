"use client";

interface Props {
    label: string;
    value: number;
    onChange(value: number): void;
    min?: number;
}

export default function NumberField({
    label,
    value,
    onChange,
    min = 1,
}: Props) {

    return (

        <div className="space-y-2">

            <label className="text-sm font-medium">
                {label}
            </label>

            <input
                type="number"
                min={min}
                value={value}
                onChange={(e) =>
                    onChange(Number(e.target.value))
                }
                className="w-full rounded-xl border bg-background px-3 py-2"
            />

        </div>

    );

}