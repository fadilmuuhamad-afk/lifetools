/* eslint-disable @next/next/no-img-element */

"use client";

import CardSection from "@/components/ui/CardSection";

interface Props {
    image: string;
    angle: 90 | 180 | 270;
}

export default function RotateCanvas({
    image,
    angle,
}: Props) {

    return (

        <CardSection title="Preview">

            <div
                className="
                    flex
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-xl
                    bg-muted
                    p-6
                    min-h-[420px]
                "
            >

                <img
                    src={image}
                    alt="Preview"
                    className="
                        max-h-[420px]
                        max-w-full
                        object-contain
                        transition-transform
                        duration-300
                    "
                    style={{
                        transform: `rotate(${angle}deg)`,
                    }}
                />

            </div>

        </CardSection>

    );

}