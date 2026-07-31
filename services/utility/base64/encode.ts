import type { Base64Result } from "./types";

export function encodeBase64(

    input: string,

): Base64Result {

    try {

        const bytes =

            new TextEncoder().encode(input);

        let binary = "";

        bytes.forEach((byte) => {

            binary += String.fromCharCode(byte);

        });

        return {

            success: true,

            output: btoa(binary),

        };

    } catch (error) {

        return {

            success: false,

            output: "",

            error:

                error instanceof Error

                    ? error.message

                    : "Unable to encode text.",

        };

    }

}