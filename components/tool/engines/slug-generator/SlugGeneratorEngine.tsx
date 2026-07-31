"use client";

import {

    Copy,
    Download,
    Eraser,
    Link,

} from "lucide-react";

import { Button } from "@/components/ui/button";

import {

    ActionButtonGroup,
    TextResult,
    TextToolWorkspace,

} from "@/components/tool/shared/text";

import {

    useSlugGenerator,

} from "@/hooks/utility/useSlugGenerator";

import SlugGeneratorControls from "./SlugGeneratorControls";

export default function SlugGeneratorEngine() {

    const {

        input,
        setInput,

        output,

        copied,

        generate,

        copyResult,
        downloadResult,

        clear,

    } = useSlugGenerator();

    return (

        <TextToolWorkspace

            title="Slug Generator"

            description="Convert text into SEO-friendly URL slugs instantly."

            input={

                <SlugGeneratorControls

                    value={input}

                    onChange={setInput}

                />

            }

            actions={

                <Button

                    onClick={generate}

                >

                    <Link className="mr-2 h-4 w-4" />

                    Generate Slug

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