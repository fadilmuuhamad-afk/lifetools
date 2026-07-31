"use client";

import {
    STORAGE_LABELS,
    type StorageUnit,
} from "@/services/converter/storage";

interface StorageConverterControlsProps {
    value: string;

    from: StorageUnit;

    to: StorageUnit;

    onValueChange: (value: string) => void;

    onFromChange: (value: StorageUnit) => void;

    onToChange: (value: StorageUnit) => void;
}

export default function StorageConverterControls({
    value,
    from,
    to,
    onValueChange,
    onFromChange,
    onToChange,
}: StorageConverterControlsProps) {
    const units = Object.keys(STORAGE_LABELS) as StorageUnit[];

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <label className="text-sm font-medium">
                    Value
                </label>

                <input
                    type="number"
                    step="any"
                    inputMode="decimal"
                    value={value}
                    onChange={(e) =>
                        onValueChange(e.target.value)
                    }
                    className="w-full rounded-md border bg-background px-3 py-2"
                />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                    <label className="text-sm font-medium">
                        From
                    </label>

                    <select
                        value={from}
                        onChange={(e) =>
                            onFromChange(
                                e.target.value as StorageUnit,
                            )
                        }
                        className="w-full rounded-md border bg-background px-3 py-2"
                    >
                        {units.map((unit) => (
                            <option
                                key={unit}
                                value={unit}
                            >
                                {STORAGE_LABELS[unit]}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">
                        To
                    </label>

                    <select
                        value={to}
                        onChange={(e) =>
                            onToChange(
                                e.target.value as StorageUnit,
                            )
                        }
                        className="w-full rounded-md border bg-background px-3 py-2"
                    >
                        {units.map((unit) => (
                            <option
                                key={unit}
                                value={unit}
                            >
                                {STORAGE_LABELS[unit]}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}