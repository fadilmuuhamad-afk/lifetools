"use client";

import SliderField from "@/components/ui/fields/SliderField";

interface Props {

    length: number;

    setLength(value: number): void;

    uppercase: boolean;
    setUppercase(value: boolean): void;

    lowercase: boolean;
    setLowercase(value: boolean): void;

    numbers: boolean;
    setNumbers(value: boolean): void;

    symbols: boolean;
    setSymbols(value: boolean): void;

}

export default function PasswordGeneratorControls({

    length,

    setLength,

    uppercase,
    setUppercase,

    lowercase,
    setLowercase,

    numbers,
    setNumbers,

    symbols,
    setSymbols,

}: Props) {

    return (

        <div className="space-y-6">

            <SliderField

                label="Password Length"

                value={length}

                onChange={setLength}

                min={4}

                max={64}

                step={1}

            />

            <div className="space-y-3">

                <label className="flex items-center gap-3">

                    <input

                        type="checkbox"

                        checked={uppercase}

                        onChange={(e) =>

                            setUppercase(

                                e.target.checked,

                            )

                        }

                    />

                    Uppercase Letters

                </label>

                <label className="flex items-center gap-3">

                    <input

                        type="checkbox"

                        checked={lowercase}

                        onChange={(e) =>

                            setLowercase(

                                e.target.checked,

                            )

                        }

                    />

                    Lowercase Letters

                </label>

                <label className="flex items-center gap-3">

                    <input

                        type="checkbox"

                        checked={numbers}

                        onChange={(e) =>

                            setNumbers(

                                e.target.checked,

                            )

                        }

                    />

                    Numbers

                </label>

                <label className="flex items-center gap-3">

                    <input

                        type="checkbox"

                        checked={symbols}

                        onChange={(e) =>

                            setSymbols(

                                e.target.checked,

                            )

                        }

                    />

                    Symbols

                </label>

            </div>

        </div>

    );

}