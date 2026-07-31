export function isValidBase64(value: string): boolean {

    const normalized = value.replace(/\s+/g, "");

    if (!normalized) {

        return false;

    }

    if (normalized.length % 4 !== 0) {

        return false;

    }

    try {

        atob(normalized);

        return true;

    } catch {

        return false;

    }

}