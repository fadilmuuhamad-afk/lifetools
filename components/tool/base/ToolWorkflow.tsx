"use client";

import type { ReactNode } from "react";

interface ToolWorkflowProps {
    hasFile: boolean;
    hasResult: boolean;

    upload: ReactNode;
    editor: ReactNode;
    result: ReactNode;
}

export default function ToolWorkflow({
    hasFile,
    hasResult,
    upload,
    editor,
    result,
}: ToolWorkflowProps) {
    if (hasResult) {
        return <>{result}</>;
    }

    if (!hasFile) {
        return <>{upload}</>;
    }

    return <>{editor}</>;
}