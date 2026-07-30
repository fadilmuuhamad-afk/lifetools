import { ReactNode } from "react";

interface Props {
    label: string;
    value: ReactNode;
    valueClassName?: string;
}

export default function SummaryRow({
    label,
    value,
    valueClassName,
}: Props) {
    return (
        <>
            <span className="text-muted-foreground">
                {label}
            </span>

            <strong
                className={`text-right ${valueClassName ?? ""}`}
            >
                {value}
            </strong>
        </>
    );
}