"use client";

import { Textarea } from "@/components/ui/textarea";

interface Props {

    value: string;

    onChange: (value: string) => void;

}

export default function UrlEncoderControls({

    value,

    onChange,

}: Props) {

    return (

        <div className="space-y-2">

            <label className="text-sm font-medium">

                Input

            </label>

            <Textarea

                value={value}

                rows={12}

                placeholder="Enter text or URL..."

                onChange={(event) =>

                    onChange(event.target.value)

                }

            />

        </div>

    );

}