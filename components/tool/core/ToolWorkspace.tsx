import type { ReactNode } from "react";

interface Props {
    preview: ReactNode;
    controls: ReactNode;
    summary?: ReactNode;
    actions?: ReactNode;
}

export default function ToolWorkspace({
    preview,
    controls,
    summary,
    actions,
}: Props) {
    return (
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">

            <div className="space-y-6">

                {preview}

            </div>

            <div className="space-y-6">

                {controls}

                {summary}

                {actions}

            </div>

        </div>
    );
}