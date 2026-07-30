"use client";

import { workspaceRegistry } from "./engines";

import type { Tool } from "@/types/tool";

interface Props {
    tool: Tool;
}

export default function ToolWorkspace({ tool }: Props) {
    const Engine =
        workspaceRegistry[
        tool.slug as keyof typeof workspaceRegistry
        ];

    if (!Engine) {
        return (
            <div className="rounded-xl border p-8 text-center">
                <h2 className="text-xl font-semibold">
                    Tool Coming Soon
                </h2>

                <p className="mt-2 text-muted-foreground">
                    This tool is currently under development.
                </p>
            </div>
        );
    }

    return <Engine />;
}