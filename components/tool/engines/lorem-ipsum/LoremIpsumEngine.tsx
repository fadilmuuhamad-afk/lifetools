"use client";

import {

    Copy,

    Download,

    Eraser,

    FileText,

} from "lucide-react";

import { Button } from "@/components/ui/button";

import {

    ActionButtonGroup,

    TextResult,

    TextToolWorkspace,

} from "@/components/tool/shared/text";

import {

    useLoremIpsum,

} from "@/hooks/utility/useLoremIpsum";

import LoremIpsumControls from "./LoremIpsumControls";

export default function LoremIpsumEngine() {

    const {

        type,

        setType,

        amount,

        setAmount,

        output,

        copied,

        generate,

        copyResult,

        downloadResult,

        clear,

    } = useLoremIpsum();

    return (

        <TextToolWorkspace

            title="Lorem Ipsum Generator"

            description="Generate Lorem Ipsum words, sentences, or paragraphs instantly."

            input={

                <LoremIpsumControls

                    type={type}

                    amount={amount}

                    onTypeChange={setType}

                    onAmountChange={setAmount}

                />

            }

            actions={

                <Button

                    onClick={generate}

                >

                    <FileText className="mr-2 h-4 w-4" />

                    Generate

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