import type { JsonFormatResult } from "./types";

export function formatJson(

    input: string,

): JsonFormatResult {

    try {

        const parsed = JSON.parse(input);

        return {

            valid: true,

            output: JSON.stringify(

                parsed,

                null,

                2,

            ),

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