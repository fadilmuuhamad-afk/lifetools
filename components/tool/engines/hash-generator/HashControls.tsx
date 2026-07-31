"use client";

import { Textarea } from "@/components/ui/textarea";

import type { HashAlgorithm } from "@/services/utility/hash";

interface Props {

    value: string;

    algorithm: HashAlgorithm;

    onValueChange: (value: string) => void;

    onAlgorithmChange: (

        algorithm: HashAlgorithm,

    ) => void;

}

const algorithms: HashAlgorithm[] = [

    "SHA-256",

    "SHA-384",

    "SHA-512",

];

export default function HashControls({

    value,

    algorithm,

    onValueChange,

    onAlgorithmChange,

}: Props) {

    return (

        <div className="space-y-6">

            <div className="space-y-2">

                <label className="text-sm font-medium">

                    Algorithm

                </label>

                <select

                    value={algorithm}

                    onChange={(event) =>

                        onAlgorithmChange(

                            event.target

                                .value as HashAlgorithm,

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

                        algorithms.map(

                            (item) => (

                                <option

                                    key={item}

                                    value={item}

                                >

                                    {item}

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

                    placeholder="Enter text..."

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