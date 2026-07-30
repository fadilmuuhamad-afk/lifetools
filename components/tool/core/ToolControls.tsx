import type { ReactNode } from "react";

interface Props {
    title?: string;
    children: ReactNode;
}

export default function ToolControls({
    title,
    children,
}: Props) {
    return (
        <div className="rounded-2xl border bg-card p-6">

            {title && (
                <h3 className="mb-6 text-lg font-semibold">
                    {title}
                </h3>
            )}

            <div className="space-y-6">

                {children}

            </div>

        </div>
    );
}