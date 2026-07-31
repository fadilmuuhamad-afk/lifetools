"use client";

import { Textarea } from "@/components/ui/textarea";

interface Props {

    output: string;

    error: string;

}

export default function JsonFormatterResult({

    output,

    error,

}: Props) {

    if (error) {

        return (

            <div

                className="
                    rounded-xl
                    border
                    border-red-300
                    bg-red-50
                    p-4
                    text-sm
                    text-red-600
                "

            >

                {error}

            </div>

        );

    }

    return (

        <Textarea

            readOnly

            value={output}

            rows={16}

            placeholder="Formatted JSON will appear here."

        />

    );

}