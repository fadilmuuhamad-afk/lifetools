import type { SlugResult } from "./types";

export function slugify(
    input: string,
): SlugResult {

    const output = input

        .trim()

        .replace(/([a-z0-9])([A-Z])/g, "$1 $2")

        .toLowerCase()

        // Hilangkan aksen
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")

        // Simbol umum
        .replace(/&/g, " and ")
        .replace(/@/g, " at ")
        .replace(/\+/g, " plus ")

        // Hilangkan apostrophe
        .replace(/['’]/g, "")

        // Ubah underscore menjadi spasi
        .replace(/_/g, " ")

        // Hilangkan karakter selain huruf, angka, spasi, dan dash
        .replace(/[^a-z0-9\s-]/g, "")

        // Gabungkan spasi menjadi dash
        .replace(/\s+/g, "-")

        // Dash ganda
        .replace(/-+/g, "-")

        // Trim dash
        .replace(/^-+|-+$/g, "");

    return {

        success: true,

        output,

    };

}