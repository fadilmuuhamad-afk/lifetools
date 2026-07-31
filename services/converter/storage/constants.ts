import type { StorageUnit } from "./types";

export const STORAGE_FACTORS: Record<StorageUnit, number> = {

    b: 1,

    kb: 1024,

    mb: 1024 ** 2,

    gb: 1024 ** 3,

    tb: 1024 ** 4,

};

export const STORAGE_LABELS: Record<StorageUnit, string> = {

    b: "Byte",

    kb: "Kilobyte",

    mb: "Megabyte",

    gb: "Gigabyte",

    tb: "Terabyte",

};