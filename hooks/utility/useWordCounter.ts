"use client";

import { useMemo, useState } from "react";

import { countText } from "@/services/utility/word-counter";

export function useWordCounter() {

    const [text, setText] =

        useState("");

    const stats = useMemo(

        () => countText(text),

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