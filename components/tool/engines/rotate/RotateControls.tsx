"use client";

import CardSection from "@/components/ui/CardSection";

interface Props {

    angle: 90 | 180 | 270;

    setAngle(
        value: 90 | 180 | 270
    ): void;

}

const presets = [

    90,

    180,

    270,

] as const;

export default function RotateControls({

    angle,

    setAngle,

}: Props) {

    return (

        <CardSection title="Rotation">

            <div className="grid grid-cols-3 gap-3">

                {presets.map((value) => (

                    <button
                        key={value}
                        type="button"
                        onClick={() => setAngle(value)}
                        className={`

                            rounded-xl

                            border

                            py-3

                            transition

                            ${angle === value
                                ? "border-primary bg-primary text-primary-foreground"
                                : "hover:bg-muted"
                            }

                        `}
                    >

                        {value}°

                    </button>

                ))}

            </div>

        </CardSection>

    );

}