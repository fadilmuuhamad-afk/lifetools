import type { PasswordOptions } from "./types";

const UPPER =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const LOWER =
    "abcdefghijklmnopqrstuvwxyz";

const NUMBER =
    "0123456789";

const SYMBOL =
    "!@#$%^&*()-_=+[]{};:,.<>?";

export function generatePassword({

    length,

    uppercase,

    lowercase,

    numbers,

    symbols,

}: PasswordOptions) {

    let chars = "";

    if (uppercase) {

        chars += UPPER;

    }

    if (lowercase) {

        chars += LOWER;

    }

    if (numbers) {

        chars += NUMBER;

    }

    if (symbols) {

        chars += SYMBOL;

    }

    if (!chars) {

        throw new Error(
            "Select at least one character set.",
        );

    }

    const random =
        new Uint32Array(length);

    crypto.getRandomValues(random);

    let password = "";

    for (let i = 0; i < length; i++) {

        password +=
            chars[
            random[i] %
            chars.length
            ];

    }

    return password;

}