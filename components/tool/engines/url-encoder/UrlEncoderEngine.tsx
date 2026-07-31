"use client";

import {
    Copy,
    Download,
    Eraser,
    Lock,
    LockOpen,
} from "lucide-react";

import {

    ActionButtonGroup,

    TextResult,

    TextToolWorkspace,

} from "@/components/tool/shared/text";

import { Button } from "@/components/ui/button";

import UrlEncoderControls from "./UrlEncoderControls";

import { useUrlEncoder } from "@/hooks/utility/useUrlEncoder";

export default function UrlEncoderEngine() {

    const {

        input,

        setInput,

        output,

        error,

        copied,

        encode,

        decode,

        copyResult,

        downloadResult,

        clear,

    } = useUrlEncoder();

    return (

        <TextToolWorkspace

            title="URL Encoder / Decoder"

            description="Encode or decode text using URL percent encoding."

            input={

                <UrlEncoderControls

                    value={input}

                    onChange={setInput}

                />

            }

            actions={

                <div className="flex flex-wrap gap-3">

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

                </div>

            }

            output={

                <TextResult

                    value={output}

                    error={error}

                    actions={

                        <ActionButtonGroup

                            actions={[

                                {

                                    label: copied

                                        ? "Copied!"

                                        : "Copy",

                                    icon: Copy,

                                    onClick: copyResult,

                                },

                                {

                                    label: "Download",

                                    icon: Download,

                                    onClick: downloadResult,

                                },

                                {

                                    label: "Clear",

                                    icon: Eraser,

                                    variant: "secondary",

                                    onClick: clear,

                                },

                            ]}

                        />

                    }

                />

            }

        />

    );

}