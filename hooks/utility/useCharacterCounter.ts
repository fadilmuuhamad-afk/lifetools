"use client";

import { useMemo, useState } from "react";

import { countCharacters } from "@/services/utility/character-counter";

export function useCharacterCounter() {

    const [text, setText] =

        useState("");

    const stats = useMemo(

        () => countCharacters(text),

        [text],

    );

    function clear() {

        setText("");

    }

    return {

        text,

        setText,

        stats,

        clear,

    };

}