"use client";

import { Textarea } from "@/components/ui/textarea";

interface Props {

    input: string;

    setInput(value: string): void;

}

export default function JsonFormatterControls({

    input,

    setInput,

}: Props) {

    return (

        <div className="space-y-4">

            <Textarea

                value={input}

                onChange={(event) =>

                    setInput(

                        event.target.value,

                    )

                }

                rows={16}

                placeholder={`{

  "name": "LifeTools",

  "version": 1

}`}

            />

            <p className="text-sm text-muted-foreground">

                Paste raw JSON here.

            </p>

        </div>

    );

}