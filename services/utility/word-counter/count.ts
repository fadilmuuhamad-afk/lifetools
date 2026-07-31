import type { WordCounterResult } from "./types";

export function countText(

    text: string,

): WordCounterResult {

    const trimmed = text.trim();

    const words = trimmed.length
        ? trimmed.split(/\s+/).length
        : 0;

    const characters = text.length;

    const charactersNoSpaces =
        text.replace(/\s/g, "").length;

    const sentences = trimmed.length
        ? trimmed
            .split(/[.!?]+/)
            .filter(Boolean).length
        : 0;

    const paragraphs = trimmed.length
        ? trimmed
            .split(/\n\s*\n/)
            .filter(Boolean).length
        : 0;

    const readingTime =
        words === 0
            ? 0
            : Math.ceil(words / 200);

    return {

        words,

        characters,

        charactersNoSpaces,

        sentences,

        paragraphs,

        readingTime,

    };

}