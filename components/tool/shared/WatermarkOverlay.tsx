"use client";

import type {

    WatermarkPosition,

} from "@/services/pdf/watermark";

interface Props {

    text: string;

    fontSize: number;

    opacity: number;

    rotation: number;

    position: WatermarkPosition;

}

export default function WatermarkOverlay({

    text,

    fontSize,

    opacity,

    rotation,

    position,

}: Props) {

    const justify =

        position.includes("left")

            ? "flex-start"

            : position.includes("right")

                ? "flex-end"

                : "center";

    const align =

        position.startsWith("top")

            ? "flex-start"

            : position.startsWith("bottom")

                ? "flex-end"

                : "center";

    return (

        <div

            className="absolute inset-0 flex p-6 pointer-events-none"

            style={{

                justifyContent: justify,

                alignItems: align,

            }}

        >

            <div

                style={{

                    fontSize,

                    opacity,

                    transform: `rotate(${rotation}deg)`,

                    fontWeight: 700,

                    color: "#888",

                    userSelect: "none",

                }}

            >

                {text}

            </div>

        </div>

    );

}