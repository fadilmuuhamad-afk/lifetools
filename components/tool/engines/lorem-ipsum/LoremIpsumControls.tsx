"use client";

import type {

    LoremType,

} from "@/services/utility/lorem-ipsum";

interface Props {

    type: LoremType;

    amount: number;

    onTypeChange: (

        type: LoremType,

    ) => void;

    onAmountChange: (

        value: number,

    ) => void;

}

const options: {

    value: LoremType;

    label: string;

}[] = [

        {

            value: "words",

            label: "Words",

        },

        {

            value: "sentences",

            label: "Sentences",

        },

        {

            value: "paragraphs",

            label: "Paragraphs",

        },

    ];

export default function LoremIpsumControls({

    type,

    amount,

    onTypeChange,

    onAmountChange,

}: Props) {

    return (

        <div className="space-y-6">

            <div className="space-y-2">

                <label className="text-sm font-medium">

                    Generate

                </label>

                <select

                    value={type}

                    onChange={(event) =>

                        onTypeChange(

                            event.target.value as LoremType,

                        )

                    }

                    className="
                        flex
                        h-10
                        w-full
                        rounded-md
                        border
                        bg-background
                        px-3
                        py-2
                        text-sm
                    "

                >

                    {

                        options.map(

                            (option) => (

                                <option

                                    key={option.value}

                                    value={option.value}

                                >

                                    {option.label}

                                </option>

                            ),

                        )

                    }

                </select>

            </div>

            <div className="space-y-2">

                <label className="text-sm font-medium">

                    Amount

                </label>

                <input

                    type="number"

                    min={1}

                    max={100}

                    value={amount}

                    onChange={(event) => {

                        const value = Number(event.target.value);

                        onAmountChange(

                            Number.isNaN(value)
                                ? 1
                                : Math.min(
                                    100,
                                    Math.max(1, value),
                                ),

                        );

                    }}

                    className="
                        flex
                        h-10
                        w-full
                        rounded-md
                        border
                        bg-background
                        px-3
                        py-2
                        text-sm
                    "

                />

            </div>

        </div>

    );

}