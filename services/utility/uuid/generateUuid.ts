import type { GenerateUuidOptions } from "./types";

export function generateUuid({

    count,

}: GenerateUuidOptions): string[] {

    if (!Number.isInteger(count)) {

        throw new Error(
            "Count must be an integer.",
        );

    }

    if (count < 1) {

        throw new Error(
            "Count must be at least 1.",
        );

    }

    if (count > 100) {

        throw new Error(
            "Maximum 100 UUIDs can be generated at once.",
        );

    }

    return Array.from(

        { length: count },

        () => crypto.randomUUID(),

    );

}