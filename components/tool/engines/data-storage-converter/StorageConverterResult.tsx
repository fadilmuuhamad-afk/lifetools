"use client";

import {
    STORAGE_LABELS,
    type StorageUnit,
} from "@/services/converter/storage";

interface StorageConverterResultProps {

    value: string;

    from: StorageUnit;

    to: StorageUnit;

    result: number;

    success: boolean;

}

export default function StorageConverterResult({

    value,

    from,

    to,

    result,

    success,

}: StorageConverterResultProps) {

    if (!success) {

        return (

            <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-4">

                <p className="text-sm text-destructive">

                    Unable to perform the conversion.

                </p>

            </div>

        );

    }

    return (

        <div className="rounded-lg border bg-card p-6">

            <div className="space-y-2">

                <p className="text-sm text-muted-foreground">

                    Conversion Result

                </p>

                <h2 className="break-all text-3xl font-bold">

                    {result.toLocaleString(undefined, {

                        maximumFractionDigits: 10,

                    })}{" "}

                    {STORAGE_LABELS[to]}

                </h2>

                <p className="text-sm text-muted-foreground">

                    {value} {STORAGE_LABELS[from]}

                    {" → "}

                    {STORAGE_LABELS[to]}

                </p>

            </div>

        </div>

    );

}