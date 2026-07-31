"use client";

import NumberField from "@/components/ui/fields/NumberField";

interface Props {

    count: number;

    setCount(value: number): void;

}

export default function UuidGeneratorControls({

    count,

    setCount,

}: Props) {

    return (

        <div className="space-y-6">

            <NumberField

                label="Number of UUIDs"

                value={count}

                onChange={setCount}

                min={1}

                max={100}

            />

            <p className="text-sm text-muted-foreground">

                Generate between 1 and 100 RFC 4122 Version 4 UUIDs.

            </p>

        </div>

    );

}