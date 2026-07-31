"use client";

import type { TemperatureUnit } from "@/services/converter/temperature";

const TEMPERATURE_UNITS: Record<TemperatureUnit, string> = {

    c: "Celsius (°C)",

    f: "Fahrenheit (°F)",

    k: "Kelvin (K)",

};

interface TemperatureConverterControlsProps {

    value: string;

    from: TemperatureUnit;

    to: TemperatureUnit;

    onValueChange: (value: string) => void;

    onFromChange: (value: TemperatureUnit) => void;

    onToChange: (value: TemperatureUnit) => void;

}

export default function TemperatureConverterControls({

    value,

    from,

    to,

    onValueChange,

    onFromChange,

    onToChange,

}: TemperatureConverterControlsProps) {

    return (

        <div className="space-y-6">

            <div className="space-y-2">

                <label className="text-sm font-medium">

                    Temperature

                </label>

                <input

                    type="number"

                    step="any"

                    inputMode="decimal"

                    value={value}

                    onChange={(e) => onValueChange(e.target.value)}

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

                                e.target.value as TemperatureUnit,

                            )

                        }

                        className="w-full rounded-md border bg-background px-3 py-2"

                    >

                        {Object.entries(TEMPERATURE_UNITS).map(

                            ([key, label]) => (

                                <option

                                    key={key}

                                    value={key}

                                >

                                    {label}

                                </option>

                            ),

                        )}

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

                                e.target.value as TemperatureUnit,

                            )

                        }

                        className="w-full rounded-md border bg-background px-3 py-2"

                    >

                        {Object.entries(TEMPERATURE_UNITS).map(

                            ([key, label]) => (

                                <option

                                    key={key}

                                    value={key}

                                >

                                    {label}

                                </option>

                            ),

                        )}

                    </select>

                </div>

            </div>

        </div>

    );

}