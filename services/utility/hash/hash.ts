import type {

    HashAlgorithm,

    HashResult,

} from "./types";

export async function generateHash(

    input: string,

    algorithm: HashAlgorithm,

): Promise<HashResult> {

    try {

        const encoder = new TextEncoder();

        const data = encoder.encode(input);

        const digest = await crypto.subtle.digest(

            algorithm,

            data,

        );

        const hash = Array.from(

            new Uint8Array(digest),

        )

            .map((byte) =>

                byte

                    .toString(16)

                    .padStart(2, "0"),

            )

            .join("");

        return {

            success: true,

            output: hash,

        };

    } catch (error) {

        return {

            success: false,

            output: "",

            error:

                error instanceof Error

                    ? error.message

                    : "Unable to generate hash.",

        };

    }

}