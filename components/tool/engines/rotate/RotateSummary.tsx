"use client";

import CardSection from "@/components/ui/CardSection";

interface Props {

    file: File;

    angle: number;

}

export default function RotateSummary({

    file,

    angle,

}: Props) {

    return (

        <CardSection title="Rotation Summary">

            <div className="space-y-4 text-sm">

                <div className="flex justify-between">

                    <span className="text-muted-foreground">
                        File
                    </span>

                    <span className="font-medium">

                        {file.name}

                    </span>

                </div>

                <div className="flex justify-between">

                    <span className="text-muted-foreground">
                        Rotation
                    </span>

                    <span className="font-medium">

                        {angle}°

                    </span>

                </div>

                <div className="flex justify-between">

                    <span className="text-muted-foreground">
                        Size
                    </span>

                    <span className="font-medium">

                        {(file.size / 1024 / 1024).toFixed(2)} MB

                    </span>

                </div>

            </div>

        </CardSection>

    );

}