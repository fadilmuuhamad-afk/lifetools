import type { ReactNode } from "react";

interface Props {
    title?: string;
    children: ReactNode;
    className?: string;
}

export default function CardSection({
    title,
    children,
    className = "",
}: Props) {
    return (
        <section
            className={`
                rounded-2xl
                border
                bg-card
                p-6
                ${className}
            `}
        >
            {title && (
                <h3 className="mb-6 text-lg font-semibold">
                    {title}
                </h3>
            )}

            {children}
        </section>
    );
}