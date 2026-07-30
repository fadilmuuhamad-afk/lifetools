import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function SummaryGrid({
    children,
}: Props) {
    return (
        <div className="grid grid-cols-2 gap-y-3 text-sm">
            {children}
        </div>
    );
}