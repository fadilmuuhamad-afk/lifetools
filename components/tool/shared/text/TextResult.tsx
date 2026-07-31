"use client";

import { ReactNode } from "react";

import { Textarea } from "@/components/ui/textarea";

interface Props {

    value: string;

    error?: string;

    placeholder?: string;

    readOnly?: boolean;

    minRows?: number;

    actions?: ReactNode;

}

export default function TextResult({

    value,

    error,

    placeholder = "Result will appear here...",

    readOnly = true,

    minRows = 12,

    actions,

}: Props) {

    return (

        <div className="space-y-4">

            {

                error && (

                    <div
                        className="
                        rounded-xl
                        border
                        border-red-300
                        bg-red-50
                        px-4
                        py-3
                        text-sm
                        text-red-600
                        "
                    >

                        {error}

                    </div>

                )

            }

            <Textarea

                value={value}

                readOnly={readOnly}

                rows={minRows}

                placeholder={placeholder}

            />

            {actions}

        </div>

    );

}