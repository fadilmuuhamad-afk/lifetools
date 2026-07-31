"use client";

import {

    Eraser,

} from "lucide-react";

import { Button } from "@/components/ui/button";

import {

    TextToolWorkspace,

} from "@/components/tool/shared/text";

import {

    useCharacterCounter,

} from "@/hooks/utility/useCharacterCounter";

import CharacterCounterControls from "./CharacterCounterControls";

import CharacterCounterStats from "./CharacterCounterStats";

export default function CharacterCounterEngine() {

    const {

        text,

        setText,

        stats,

        clear,

    } = useCharacterCounter();

    return (

        <TextToolWorkspace

            title="Character Counter"

            description="Count characters, words, lines, and paragraphs instantly."

            input={

                <CharacterCounterControls

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

                <CharacterCounterStats

                    stats={stats}

                />

            }

        />

    );

}