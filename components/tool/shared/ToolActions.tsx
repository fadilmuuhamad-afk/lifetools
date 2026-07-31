"use client";

import { ReactNode } from "react";

type ToolActionsProps = {
    children: ReactNode;
};

export default function ToolActions({
    children,
}: ToolActionsProps) {
    return (
        <div className="flex flex-wrap gap-3">
            {children}
        </div>
    );
}