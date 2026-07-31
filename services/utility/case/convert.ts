import type {

    CaseResult,

    CaseType,

} from "./types";

function words(text: string): string[] {

    return text

        .trim()

        .split(/[\s_-]+/)

        .filter(Boolean);

}

export function convertCase(

    input: string,

    type: CaseType,

): CaseResult {

    const list = words(input);

    switch (type) {

        case "lowercase":

            return {

                success: true,

                output: input.toLowerCase(),

            };

        case "uppercase":

            return {

                success: true,

                output: input.toUpperCase(),

            };

        case "title":

            return {

                success: true,

                output: list

                    .map(

                        (word) =>

                            word.charAt(0)

                                .toUpperCase() +

                            word

                                .slice(1)

                                .toLowerCase(),

                    )

                    .join(" "),

            };

        case "sentence":

            return {

                success: true,

                output:

                    input.charAt(0).toUpperCase() +

                    input

                        .slice(1)

                        .toLowerCase(),

            };

        case "camel":

            return {

                success: true,

                output:

                    list[0]?.toLowerCase() +

                    list

                        .slice(1)

                        .map(

                            (word) =>

                                word.charAt(0).toUpperCase() +

                                word

                                    .slice(1)

                                    .toLowerCase(),

                        )

                        .join(""),

            };

        case "pascal":

            return {

                success: true,

                output: list

                    .map(

                        (word) =>

                            word.charAt(0).toUpperCase() +

                            word

                                .slice(1)

                                .toLowerCase(),

                    )

                    .join(""),

            };

        case "snake":

            return {

                success: true,

                output: list

                    .map(

                        (word) =>

                            word.toLowerCase(),

                    )

                    .join("_"),

            };

        case "kebab":

            return {

                success: true,

                output: list

                    .map(

                        (word) =>

                            word.toLowerCase(),

                    )

                    .join("-"),

            };

    }

}