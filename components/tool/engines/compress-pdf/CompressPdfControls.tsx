"use client";

import SelectField from "@/components/ui/fields/SelectField";

import type {

    CompressionLevel,

} from "@/services/pdf/compress/types";

interface Props {

    level: CompressionLevel;

    setLevel(level: CompressionLevel): void;

    error: string;

}

export default function CompressPdfControls({

    level,

    setLevel,

    error,

}: Props) {

    return (

        <div className="space-y-5">

            <SelectField

                label="Compression Level"

                value={level}

                onChange={(value) =>

                    setLevel(

                        value as CompressionLevel,

                    )

                }

                options={[

                    {

                        value: "low",

                        label: "Low (Best Quality)",

                    },

                    {

                        value: "medium",

                        label: "Medium (Recommended)",

                    },

                    {

                        value: "high",

                        label: "High (Smallest File)",

                    },

                ]}

            />

            {error && (

                <p className="text-sm text-red-500">

                    {error}

                </p>

            )}

        </div>

    );

}