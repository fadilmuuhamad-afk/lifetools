"use client";

import { ReactNode } from "react";

type ToolCardProps = {
    title: string;
    description?: string;
    children: ReactNode;
};

export default function ToolCard({
    title,
    description,
    children,
}: ToolCardProps) {
    return (
        <div className="rounded-xl border bg-card p-6 shadow-sm space-y-6">
            <div className="space-y-1">
                <h2 className="text-lg font-semibold">
                    {title}
                </h2>

                {description && (
                    <p className="text-sm text-muted-foreground">
                        {description}
                    </p>
                )}
            </div>

            {children}
        </div>
    );
}