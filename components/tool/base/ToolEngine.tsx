"use client";

import type { ReactNode } from "react";

interface ToolEngineProps {
    file: File | null;
    result: File | null;

    upload: ReactNode;
    editor: ReactNode;
    resultView: ReactNode;
}

export default function ToolEngine({
    file,
    result,
    upload,
    editor,
    resultView,
}: ToolEngineProps) {
    if (result && file) {
        return resultView;
    }

    if (!file) {
        return upload;
    }

    return editor;
}