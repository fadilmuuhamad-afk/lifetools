"use client";

import { Textarea } from "@/components/ui/textarea";

interface Props {

    value: string;

    onChange: (value: string) => void;

}

export default function CharacterCounterControls({

    value,

    onChange,

}: Props) {

    return (

        <div className="space-y-2">

            <label className="text-sm font-medium">

                Text

            </label>

            <Textarea

                rows={16}

                value={value}

                placeholder="Type or paste your text here..."

                onChange={(event) =>

                    onChange(

                        event.target.value,

                    )

                }

            />

        </div>

    );

}