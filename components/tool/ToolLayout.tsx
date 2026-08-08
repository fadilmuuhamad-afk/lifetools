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
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">

            <div className="min-w-0">
                {children}
            </div>

            <aside
                className="
                    order-2
                    self-start
                    lg:sticky
                    lg:top-24
                "
            >
                {sidebar}
            </aside>

        </div>
    );
}