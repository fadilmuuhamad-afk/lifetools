import type { JsonFormatResult } from "./types";

export function minifyJson(

    input: string,

): JsonFormatResult {

    try {

        const parsed = JSON.parse(input);

        return {

            valid: true,

            output: JSON.stringify(parsed),

        };

    } catch (error) {

        return {

            valid: false,

            output: "",

            error:

                error instanceof Error

                    ? error.message

                    : "Invalid JSON.",

        };

    }

}