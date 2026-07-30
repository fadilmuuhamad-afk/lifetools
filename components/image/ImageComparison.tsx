"use client";

import { useState } from "react";

interface Props {
    before: string;
    after: string;
}

export default function ImageComparison({
    before,
    after,
}: Props) {

    const [position, setPosition] =
        useState(50);

    return (

        <div className="space-y-4">

            <div className="relative overflow-hidden rounded-2xl border">

                <img
                    src={before}
                    alt="Before"
                    className="block w-full"
                />

                <div
                    className="absolute inset-y-0 left-0 overflow-hidden"
                    style={{
                        width: `${position}%`,
                    }}
                >

                    <img
                        src={after}
                        alt="After"
                        className="block w-full"
                    />

                </div>

            </div>

            <input
                type="range"
                min={0}
                max={100}
                value={position}
                onChange={(e) =>
                    setPosition(
                        Number(e.target.value)
                    )
                }
                className="w-full"
            />

        </div>

    );

}