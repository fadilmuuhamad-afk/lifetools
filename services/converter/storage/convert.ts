import { STORAGE_FACTORS } from "./constants";

import type {

    ConversionResult,

    StorageUnit,

} from "./types";

export function convertStorage(

    value: number,

    from: StorageUnit,

    to: StorageUnit,

): ConversionResult {

    if (Number.isNaN(value)) {

        return {

            success: false,

            result: 0,

        };

    }

    const bytes = value * STORAGE_FACTORS[from];

    return {

        success: true,

        result: bytes / STORAGE_FACTORS[to],

    };

}