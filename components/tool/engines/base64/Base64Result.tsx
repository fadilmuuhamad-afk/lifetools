"use client";

import { Textarea } from "@/components/ui/textarea";

interface Props {

    output: string;

    error: string;

}

export default function Base64Result({

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

            rows={14}

            value={output}

            placeholder="Result will appear here..."

        />

    );

}