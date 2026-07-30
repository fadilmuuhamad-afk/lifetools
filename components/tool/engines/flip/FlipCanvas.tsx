"use client";

import CardSection from "@/components/ui/CardSection";

import type { FlipDirection } from "@/services/image/flip";

interface FlipCanvasProps {

    image: string;

    direction: FlipDirection;

}

export default function FlipCanvas({

    image,

    direction,

}: FlipCanvasProps) {

    const transform =
        direction === "horizontal"
            ? "scaleX(-1)"
            : "scaleY(-1)";

    return (

        <CardSection title="Preview">

            <div
                className="
                    flex
                    items-center
                    justify-center
                    rounded-xl
                    border
                    bg-muted/30
                    p-6
                    overflow-hidden
                "
            >

                <img
                    src={image}
                    alt="Preview"
                    className="
                        max-h-[500px]
                        max-w-full
                        object-contain
                        transition-transform
                        duration-300
                    "
                    style={{
                        transform,
                    }}
                />

            </div>

        </CardSection>

    );

}