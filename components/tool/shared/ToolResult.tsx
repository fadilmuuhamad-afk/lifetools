"use client";

import { ReactNode } from "react";

type ToolResultProps = {
    title?: string;
    children: ReactNode;
};

export default function ToolResult({
    title = "Result",
    children,
}: ToolResultProps) {
    return (
        <div className="rounded-xl border bg-card p-6 space-y-4">
            <h3 className="font-medium">
                {title}
            </h3>

            {children}
        </div>
    );
}