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
        <div
            className="
                grid
                grid-cols-1
                gap-8
                lg:grid-cols-3
                lg:gap-10
                xl:gap-12
            "
        >
            <main
                className="
                    order-1
                    lg:col-span-2
                "
            >
                {children}
            </main>

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