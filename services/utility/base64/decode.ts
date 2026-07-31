import type { Base64Result } from "./types";

import { isValidBase64 } from "./isValidBase64";

export function decodeBase64(

    input: string,

): Base64Result {

    const normalized = input.replace(/\s+/g, "");

    if (!isValidBase64(normalized)) {

        return {

            success: false,

            output: "",

            error: "Input is not a valid Base64 string.",

        };

    }

    try {

        const binary = atob(normalized);

        const bytes = Uint8Array.from(

            binary,

            (character) => character.charCodeAt(0),

        );

        const output =

            new TextDecoder().decode(bytes);

        return {

            success: true,

            output,

        };

    } catch (error) {

        return {

            success: false,

            output: "",

            error:

                error instanceof Error

                    ? error.message

                    : "Unable to decode Base64.",

        };

    }

}