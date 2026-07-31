"use client";

import { Textarea } from "@/components/ui/textarea";

interface Props {

    input: string;

    setInput(value: string): void;

}

export default function Base64Controls({

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

                rows={14}

                placeholder="Enter plain text or Base64 string..."

            />

            <p className="text-sm text-muted-foreground">

                Enter text to encode or a Base64 string to decode.

            </p>

        </div>

    );

}