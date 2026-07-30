"use client";

import { ReactNode } from "react";

interface Props {

    hasFile: boolean;

    hasResult: boolean;

    upload: ReactNode;

    editor: ReactNode;

    result: ReactNode;

}

export default function ImageToolWorkflow({

    hasFile,

    hasResult,

    upload,

    editor,

    result,

}: Props) {

    if (!hasFile) {

        return <>{upload}</>;

    }

    if (hasResult) {

        return <>{result}</>;

    }

    return <>{editor}</>;

}