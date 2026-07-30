import type { ReactNode } from "react";

interface Props {
    preview: ReactNode;
    sidebar: ReactNode;
}

export default function ToolLayout({
    preview,
    sidebar,
}: Props) {

    return (

        <div
            className="
                grid
                gap-6
                lg:grid-cols-[1fr_360px]
            "
        >

            <div>

                {preview}

            </div>

            <aside className="space-y-6">

                {sidebar}

            </aside>

        </div>

    );

}