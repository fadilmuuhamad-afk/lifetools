export function isValidPageSelection(
    input: string,
): boolean {

    if (!input.trim()) {

        return false;

    }

    return /^(\d+(-\d+)?)(,\s*\d+(-\d+)?)*$/.test(

        input.trim(),

    );

}

export function parsePageSelection(
    input: string,
): number[] {

    if (!input.trim()) {

        return [];

    }

    const pages = new Set<number>();

    input
        .split(",")

        .forEach((part) => {

            const value = part.trim();

            if (value.includes("-")) {

                const [

                    start,

                    end,

                ] = value

                    .split("-")

                    .map(Number);

                const min = Math.min(
                    start,
                    end,
                );

                const max = Math.max(
                    start,
                    end,
                );

                for (
                    let page = min;
                    page <= max;
                    page++
                ) {

                    pages.add(page);

                }

            } else {

                pages.add(Number(value));

            }

        });

    return [...pages]
        .sort((a, b) => a - b)

        .map((page) => page - 1);

}

/**
 * Convert zero-based page indexes
 * back to user input.
 *
 * Example:
 *
 * [0,1,2,5]
 *
 * ->
 *
 * 1-3,6
 */

export function stringifyPageSelection(

    indexes: number[],

): string {

    if (indexes.length === 0) {

        return "";

    }

    const pages = [...indexes]

        .map((page) => page + 1)

        .sort((a, b) => a - b);

    const result: string[] = [];

    let start = pages[0];

    let end = pages[0];

    for (

        let i = 1;

        i <= pages.length;

        i++

    ) {

        if (

            pages[i] === end + 1

        ) {

            end = pages[i];

            continue;

        }

        if (start === end) {

            result.push(

                `${start}`,

            );

        } else {

            result.push(

                `${start}-${end}`,

            );

        }

        start = pages[i];

        end = pages[i];

    }

    return result.join(",");

}