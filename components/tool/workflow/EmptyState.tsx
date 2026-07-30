import type { ReactNode } from "react";

interface Props {
    title: string;
    description: string;
    children: ReactNode;
}

export default function EmptyState({
    title,
    description,
    children,
}: Props) {

    return (

        <div
            className="
                rounded-2xl
                border
                bg-card
                p-10
                text-center
            "
        >

            <h2 className="text-2xl font-semibold">

                {title}

            </h2>

            <p className="mt-2 text-muted-foreground">

                {description}

            </p>

            <div className="mt-8">

                {children}

            </div>

        </div>

    );

}