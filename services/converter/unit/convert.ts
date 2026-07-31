import { UNIT_FACTORS } from "./constants";

import type {

    ConversionResult,

    UnitCategory,

} from "./types";

export function convertUnit(

    value: number,

    category: UnitCategory,

    from: string,

    to: string,

): ConversionResult {

    const factors =

        UNIT_FACTORS[category];

    const fromFactor =

        factors[from];

    const toFactor =

        factors[to];

    if (

        fromFactor === undefined ||

        toFactor === undefined ||

        Number.isNaN(value)

    ) {

        return {

            success: false,

            result: 0,

        };

    }

    const base =
        value * fromFactor;

    const result =
        base / toFactor;

    const rounded = Number(
        result.toFixed(10),
    );

    return {

        success: true,

        result: rounded,

    };

}