export function selectionToString(
    pages: number[],
): string {

    if (pages.length === 0) {

        return "";

    }

    const sorted = [...pages]
        .sort((a, b) => a - b);

    return sorted.join(",");

}

export function stringToSelection(
    value: string,
): number[] {

    if (!value.trim()) {

        return [];

    }

    return value

        .split(",")

        .map((item) => Number(item.trim()))

        .filter((item) => !Number.isNaN(item));

}