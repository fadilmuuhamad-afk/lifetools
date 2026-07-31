"use client";

import { Button } from "@/components/ui/button";

import ToolCard from "@/components/tool/shared/ToolCard";
import ToolActions from "@/components/tool/shared/ToolActions";
import ToolResult from "@/components/tool/shared/ToolResult";

import {
    Copy,
    Download,
    Eraser,
    Lock,
    LockOpen,
} from "lucide-react";

import { useBase64 } from "@/hooks/utility/useBase64";

import Base64Controls from "./Base64Controls";
import Base64Result from "./Base64Result";

export default function Base64Engine() {

    const {

        input,

        setInput,

        output,

        error,

        encode,

        decode,

        copy,

        download,

        clear,

    } = useBase64();

    return (

        <div className="space-y-8">

            <ToolCard

                title="Base64 Encoder / Decoder"

                description="Encode and decode Base64 strings securely in your browser."

            >

                <Base64Controls

                    input={input}

                    setInput={setInput}

                />

                <ToolActions>

                    <Button

                        onClick={encode}

                    >

                        <Lock className="mr-2 h-4 w-4" />

                        Encode

                    </Button>

                    <Button

                        variant="secondary"

                        onClick={decode}

                    >

                        <LockOpen className="mr-2 h-4 w-4" />

                        Decode

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

                <Base64Result

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