"use client";

import { ReactNode } from "react";

import ToolCard from "@/components/tool/shared/ToolCard";
import ToolActions from "@/components/tool/shared/ToolActions";
import ToolResult from "@/components/tool/shared/ToolResult";

interface Props {

    title: string;

    description: string;

    input: ReactNode;

    actions: ReactNode;

    output: ReactNode;

    footer?: ReactNode;

    resultTitle?: string;

}

export default function TextToolWorkspace({

    title,

    description,

    input,

    actions,

    output,

    footer,

    resultTitle = "Result",

}: Props) {

    return (

        <div className="space-y-8">

            <ToolCard

                title={title}

                description={description}

            >

                {input}

                <ToolActions>

                    {actions}

                </ToolActions>

            </ToolCard>

            <ToolResult

                title={resultTitle}

            >

                {output}

                {footer && (

                    <div className="mt-6">

                        {footer}

                    </div>

                )}

            </ToolResult>

        </div>

    );

}