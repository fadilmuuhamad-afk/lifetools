import { ReactNode } from "react";

interface SummaryCardProps {
    title: string;
    children: ReactNode;
}

export default function SummaryCard({
    title,
    children,
}: SummaryCardProps) {
    return (
        <div className="rounded-xl border p-5 space-y-4">
            <h3 className="text-lg font-semibold">
                {title}
            </h3>

            {children}
        </div>
    );
}