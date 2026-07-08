import { ReactNode } from "react";

interface Props {
    children: ReactNode;

    sidebar: ReactNode;
}

export default function ToolLayout({
    children,
    sidebar,
}: Props) {
    return (
        <div className="grid gap-10 lg:grid-cols-3">

            <div className="lg:col-span-2">

                {children}

            </div>

            <aside>

                {sidebar}

            </aside>

        </div>
    );
}