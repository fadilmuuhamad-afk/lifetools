import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function ToolSummary({
    children,
}: Props) {
    return (
        <div className="rounded-2xl border bg-card p-6">

            {children}

        </div>
    );
}