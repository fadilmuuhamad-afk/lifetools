"use client";

import {

    ArrowRightLeft,

    Copy,

    Download,

    Eraser,

} from "lucide-react";

import { Button } from "@/components/ui/button";

import {

    ActionButtonGroup,

    TextResult,

    TextToolWorkspace,

} from "@/components/tool/shared/text";

import {

    useCaseConverter,

} from "@/hooks/utility/useCaseConverter";

import CaseConverterControls from "./CaseConverterControls";

export default function CaseConverterEngine() {

    const {

        input,

        setInput,

        output,

        type,

        setType,

        copied,

        convert,

        copyResult,

        downloadResult,

        clear,

    } = useCaseConverter();

    return (

        <TextToolWorkspace

            title="Case Converter"

            description="Convert text into lowercase, UPPERCASE, Title Case, camelCase, PascalCase, snake_case, kebab-case, and more."

            input={

                <CaseConverterControls

                    value={input}

                    type={type}

                    onValueChange={setInput}

                    onTypeChange={setType}

                />

            }

            actions={

                <Button

                    onClick={convert}

                >

                    <ArrowRightLeft className="mr-2 h-4 w-4" />

                    Convert

                </Button>

            }

            output={

                <TextResult

                    value={output}

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