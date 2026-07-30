"use client";

import CardSection from "@/components/ui/CardSection";

import { Button } from "@/components/ui/button";

import type { FlipDirection } from "@/services/image/flip";

interface Props {

    direction: FlipDirection;

    setDirection: (value: FlipDirection) => void;

}

export default function FlipControls({

    direction,

    setDirection,

}: Props) {

    return (

        <CardSection title="Flip Direction">

            <div className="grid grid-cols-2 gap-3">

                <Button
                    variant={
                        direction === "horizontal"
                            ? "default"
                            : "outline"
                    }
                    onClick={() =>
                        setDirection("horizontal")
                    }
                >
                    Horizontal
                </Button>

                <Button
                    variant={
                        direction === "vertical"
                            ? "default"
                            : "outline"
                    }
                    onClick={() =>
                        setDirection("vertical")
                    }
                >
                    Vertical
                </Button>

            </div>

        </CardSection>

    );

}