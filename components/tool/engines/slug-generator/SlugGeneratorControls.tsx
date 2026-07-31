"use client";

import { Textarea } from "@/components/ui/textarea";

interface Props {

    value: string;

    onChange: (value: string) => void;

}

export default function SlugGeneratorControls({

    value,

    onChange,

}: Props) {

    return (

        <div className="space-y-2">

            <label className="text-sm font-medium">

                Text

            </label>

            <Textarea

                rows={12}

                value={value}

                placeholder="Enter your title..."

                onChange={(event) =>

                    onChange(
                        event.target.value,
                    )

                }

            />

        </div>

    );

}