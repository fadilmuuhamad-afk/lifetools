"use client";

interface TemperatureConverterResultProps {

    value: string;

    from: string;

    to: string;

    result: number;

    success: boolean;

}

const UNIT_SYMBOLS: Record<string, string> = {

    c: "°C",

    f: "°F",

    k: "K",

};

export default function TemperatureConverterResult({

    value,

    from,

    to,

    result,

    success,

}: TemperatureConverterResultProps) {

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

                    {UNIT_SYMBOLS[to]}

                </h2>

                <p className="text-sm text-muted-foreground">

                    {value} {UNIT_SYMBOLS[from]}

                    {" → "}

                    {UNIT_SYMBOLS[to]}

                </p>

            </div>

        </div>

    );

}