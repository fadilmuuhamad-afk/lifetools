"use client";

import { Textarea } from "@/components/ui/textarea";

import type { CaseType } from "@/services/utility/case";

interface Props {

    value: string;

    type: CaseType;

    onValueChange: (value: string) => void;

    onTypeChange: (type: CaseType) => void;

}

const caseTypes: {

    value: CaseType;

    label: string;

}[] = [

        {

            value: "lowercase",

            label: "lowercase",

        },

        {

            value: "uppercase",

            label: "UPPERCASE",

        },

        {

            value: "title",

            label: "Title Case",

        },

        {

            value: "sentence",

            label: "Sentence case",

        },

        {

            value: "camel",

            label: "camelCase",

        },

        {

            value: "pascal",

            label: "PascalCase",

        },

        {

            value: "snake",

            label: "snake_case",

        },

        {

            value: "kebab",

            label: "kebab-case",

        },

    ];

export default function CaseConverterControls({

    value,

    type,

    onValueChange,

    onTypeChange,

}: Props) {

    return (

        <div className="space-y-6">

            <div className="space-y-2">

                <label className="text-sm font-medium">

                    Convert To

                </label>

                <select

                    value={type}

                    onChange={(event) =>

                        onTypeChange(

                            event.target.value as CaseType,

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

                        caseTypes.map(

                            (item) => (

                                <option

                                    key={item.value}

                                    value={item.value}

                                >

                                    {item.label}

                                </option>

                            ),

                        )

                    }

                </select>

            </div>

            <div className="space-y-2">

                <label className="text-sm font-medium">

                    Input

                </label>

                <Textarea

                    rows={12}

                    value={value}

                    placeholder="Enter your text..."

                    onChange={(event) =>

                        onValueChange(

                            event.target.value,

                        )

                    }

                />

            </div>

        </div>

    );

}