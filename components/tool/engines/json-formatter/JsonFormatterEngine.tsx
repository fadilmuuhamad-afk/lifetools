"use client";

import ToolCard from "@/components/tool/shared/ToolCard";
import ToolActions from "@/components/tool/shared/ToolActions";
import ToolResult from "@/components/tool/shared/ToolResult";

import { Button } from "@/components/ui/button";

import { Download, Eraser, FileJson, Minimize2, Copy } from "lucide-react";

import { useJsonFormatter } from "@/hooks/utility/useJsonFormatter";

import JsonFormatterControls from "./JsonFormatterControls";
import JsonFormatterResult from "./JsonFormatterResult";

export default function JsonFormatterEngine() {

    const {

        input,

        setInput,

        output,

        error,

        format,

        minify,

        copy,

        download,

        clear,

    } = useJsonFormatter();

    return (

        <div className="space-y-8">

            <ToolCard

                title="JSON Formatter"

                description="Format, validate and minify JSON directly in your browser."

            >

                <JsonFormatterControls

                    input={input}

                    setInput={setInput}

                />

                <ToolActions>

                    <Button
                        onClick={format}
                    >
                        <FileJson className="mr-2 h-4 w-4" />
                        Format
                    </Button>

                    <Button
                        variant="secondary"
                        onClick={minify}
                    >
                        <Minimize2 className="mr-2 h-4 w-4" />
                        Minify
                    </Button>

                    <Button
                        variant="outline"
                        onClick={clear}
                    >
                        <Eraser className="mr-2 h-4 w-4" />
                        Clear
                    </Button>

                </ToolActions>

            </ToolCard>

            <ToolResult

                title="Result"

            >

                <JsonFormatterResult

                    output={output}

                    error={error}

                />

                {output && (

                    <div className="mt-6 flex flex-wrap gap-3">

                        <Button
                            onClick={copy}
                        >
                            <Copy className="mr-2 h-4 w-4" />
                            Copy
                        </Button>

                        <Button
                            variant="secondary"
                            onClick={download}
                        >
                            <Download className="mr-2 h-4 w-4" />
                            Download
                        </Button>

                    </div>

                )}

            </ToolResult>

        </div>

    );

}