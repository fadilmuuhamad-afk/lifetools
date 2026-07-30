import { ReactNode } from "react";

interface EditorLayoutProps {
    preview: ReactNode;
    controls: ReactNode;
    info?: ReactNode;
    summary?: ReactNode;
    actions: ReactNode;
}

export default function EditorLayout({
    preview,
    controls,
    info,
    summary,
    actions,
}: EditorLayoutProps) {
    return (
        <div className="space-y-6">

            {preview}

            {controls}

            {info}

            {summary}

            <div className="space-y-3">
                {actions}
            </div>

        </div>
    );
}