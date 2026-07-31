import type { UrlResult } from "./types";

export function decodeUrl(

    input: string,

): UrlResult {

    try {

        return {

            success: true,

            output: decodeURIComponent(input),

        };

    } catch (error) {

        return {

            success: false,

            output: "",

            error:

                error instanceof Error

                    ? error.message

                    : "Invalid URL encoded string.",

        };

    }

}