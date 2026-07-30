"use client";

import CardSection from "@/components/ui/CardSection";

import type { FlipDirection } from "@/services/image/flip";

interface Props {

    file: File;

    direction: FlipDirection;

}

export default function FlipSummary({

    file,

    direction,

}: Props) {

    return (

        <CardSection title="Summary">

            <dl className="space-y-4">

                <div className="flex justify-between gap-4">

                    <dt className="text-muted-foreground">
                        File
                    </dt>

                    <dd className="font-medium break-all text-right">
                        {file.name}
                    </dd>

                </div>

                <div className="flex justify-between gap-4">

                    <dt className="text-muted-foreground">
                        Size
                    </dt>

                    <dd className="font-medium">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                    </dd>

                </div>

                <div className="flex justify-between gap-4">

                    <dt className="text-muted-foreground">
                        Flip Direction
                    </dt>

                    <dd className="font-medium capitalize">
                        {direction}
                    </dd>

                </div>

            </dl>

        </CardSection>

    );

}