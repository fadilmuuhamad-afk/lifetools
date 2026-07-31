"use client";

import { UNIT_LABELS } from "@/services/converter/unit";

interface UnitConverterResultProps {

    value: string;

    from: string;

    to: string;

    result: number;

    success: boolean;

}

export default function UnitConverterResult({

    value,

    from,

    to,

    result,

    success,

}: UnitConverterResultProps) {

    if (!success) {

        return (

            <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-4">

                <p className="text-sm text-destructive">

                    Unable to perform the conversion.

                </p>

            </div>

        );

    }

    const formattedResult = result.toLocaleString(undefined, {

        maximumFractionDigits: 10,

    });

    return (

        <div className="rounded-lg border bg-card p-6">

            <div className="space-y-2">

                <p className="text-sm text-muted-foreground">

                    Conversion Result

                </p>

                <h2 className="break-all text-3xl font-bold">

                    {formattedResult}

                </h2>

                <p className="text-sm text-muted-foreground">

                    {value} {UNIT_LABELS[from] ?? from}

                    {" → "}

                    {UNIT_LABELS[to] ?? to}

                </p>

            </div>

        </div>

    );

}