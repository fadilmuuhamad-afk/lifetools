import type {

    CharacterCounterResult,

} from "./types";

export function countCharacters(

    text: string,

): CharacterCounterResult {

    const trimmed = text.trim();

    const characters = text.length;

    const charactersNoSpaces =
        text.replace(/\s/g, "").length;

    const words = trimmed.length
        ? trimmed
            .split(/\s+/)
            .filter(Boolean).length
        : 0;

    const lines = text.length
        ? text.split(/\r?\n/).length
        : 0;

    const paragraphs = trimmed.length
        ? trimmed
            .split(/\n\s*\n/)
            .filter(Boolean).length
        : 0;

    return {

        characters,

        charactersNoSpaces,

        words,

        lines,

        paragraphs,

    };

}