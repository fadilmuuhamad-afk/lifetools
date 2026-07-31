import type {

    ConversionResult,

    TemperatureUnit,

} from "./types";

export function convertTemperature(

    value: number,

    from: TemperatureUnit,

    to: TemperatureUnit,

): ConversionResult {

    if (Number.isNaN(value)) {

        return {

            success: false,

            result: 0,

        };

    }

    if (from === to) {

        return {

            success: true,

            result: value,

        };

    }

    let celsius: number;

    switch (from) {

        case "c":

            celsius = value;

            break;

        case "f":

            celsius = (value - 32) * 5 / 9;

            break;

        case "k":

            celsius = value - 273.15;

            break;

    }

    let result: number;

    switch (to) {

        case "c":

            result = celsius;

            break;

        case "f":

            result = (celsius * 9 / 5) + 32;

            break;

        case "k":

            result = celsius + 273.15;

            break;

    }

    return {

        success: true,

        result,

    };

}