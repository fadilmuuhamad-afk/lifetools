"use client";

import {

    UNIT_LABELS,

    type UnitCategory,

} from "@/services/converter/unit";

interface UnitConverterControlsProps {

    category: UnitCategory;

    categories: UnitCategory[];

    units: string[];

    value: string;

    from: string;

    to: string;

    onCategoryChange: (value: UnitCategory) => void;

    onValueChange: (value: string) => void;

    onFromChange: (value: string) => void;

    onToChange: (value: string) => void;


}

export default function UnitConverterControls({

    category,

    categories,

    units,

    value,

    from,

    to,

    onCategoryChange,

    onValueChange,

    onFromChange,

    onToChange,



}: UnitConverterControlsProps) {

    return (

        <div className="space-y-6">

            <div className="space-y-2">

                <label className="text-sm font-medium">

                    Category

                </label>

                <select

                    value={category}

                    onChange={(e) =>

                        onCategoryChange(

                            e.target.value as UnitCategory,

                        )

                    }

                    className="w-full rounded-md border bg-background px-3 py-2"

                >

                    {categories.map((item) => (

                        <option

                            key={item}

                            value={item}

                        >

                            {item.charAt(0).toUpperCase() +

                                item.slice(1)}

                        </option>

                    ))}

                </select>

            </div>

            <div className="space-y-2">

                <label className="text-sm font-medium">

                    Value

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

                                e.target.value,

                            )

                        }

                        className="w-full rounded-md border bg-background px-3 py-2"

                    >

                        {units.map((unit) => (

                            <option
                                key={unit}
                                value={unit}
                            >
                                {UNIT_LABELS[unit] ?? unit}
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

                                e.target.value,

                            )

                        }

                        className="w-full rounded-md border bg-background px-3 py-2"

                    >

                        {units.map((unit) => (

                            <option
                                key={unit}
                                value={unit}
                            >
                                {UNIT_LABELS[unit] ?? unit}
                            </option>

                        ))}

                    </select>

                </div>

            </div>

        </div>

    );

}