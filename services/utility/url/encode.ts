import type { UrlResult } from "./types";

export function encodeUrl(

    input: string,

): UrlResult {

    try {

        return {

            success: true,

            output: encodeURIComponent(input),

        };

    } catch (error) {

        return {

            success: false,

            output: "",

            error:

                error instanceof Error

                    ? error.message

                    : "Unable to encode URL.",

        };

    }

}