"use client";

import {

    Eraser,

} from "lucide-react";

import { Button } from "@/components/ui/button";

import {

    TextToolWorkspace,

} from "@/components/tool/shared/text";

import {

    useWordCounter,

} from "@/hooks/utility/useWordCounter";

import WordCounterControls from "./WordCounterControls";

import WordCounterStats from "./WordCounterStats";

export default function WordCounterEngine() {

    const {

        text,

        setText,

        stats,

        clear,

    } = useWordCounter();

    return (

        <TextToolWorkspace

            title="Word Counter"

            description="Count words, characters, sentences, paragraphs, and estimate reading time instantly."

            input={

                <WordCounterControls

                    value={text}

                    onChange={setText}

                />

            }

            actions={

                <Button

                    variant="secondary"

                    onClick={clear}

                >

                    <Eraser className="mr-2 h-4 w-4" />

                    Clear

                </Button>

            }

            output={

                <WordCounterStats

                    stats={stats}

                />

            }

        />

    );

}