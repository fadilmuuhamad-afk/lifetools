import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function ToolActions({
    children,
}: Props) {
    return (
        <div className="space-y-3">

            {children}

        </div>
    );
}