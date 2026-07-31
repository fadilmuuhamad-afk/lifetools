"use client";

import {

    Copy,

    Download,

    Eraser,

    Hash,

} from "lucide-react";

import { Button } from "@/components/ui/button";

import {

    ActionButtonGroup,

    TextResult,

    TextToolWorkspace,

} from "@/components/tool/shared/text";

import HashControls from "./HashControls";

import {

    useHashGenerator,

} from "@/hooks/utility/useHashGenerator";

export default function HashEngine() {

    const {

        input,

        setInput,

        output,

        error,

        copied,

        algorithm,

        setAlgorithm,

        generate,

        copyResult,

        downloadResult,

        clear,

    } = useHashGenerator();

    return (

        <TextToolWorkspace

            title="Hash Generator"

            description="Generate SHA-256, SHA-384, and SHA-512 hashes directly in your browser."

            input={

                <HashControls

                    value={input}

                    algorithm={algorithm}

                    onValueChange={setInput}

                    onAlgorithmChange={

                        setAlgorithm

                    }

                />

            }

            actions={

                <Button

                    onClick={generate}

                >

                    <Hash className="mr-2 h-4 w-4" />

                    Generate Hash

                </Button>

            }

            output={

                <TextResult

                    value={output}

                    error={error}

                    actions={

                        <ActionButtonGroup

                            actions={[

                                {

                                    label:

                                        copied

                                            ? "Copied!"

                                            : "Copy",

                                    icon: Copy,

                                    onClick:

                                        copyResult,

                                },

                                {

                                    label:

                                        "Download",

                                    icon: Download,

                                    onClick:

                                        downloadResult,

                                },

                                {

                                    label:

                                        "Clear",

                                    icon: Eraser,

                                    variant:

                                        "secondary",

                                    onClick:

                                        clear,

                                },

                            ]}

                        />

                    }

                />

            }

        />

    );

}