import type {
    UnitCategory,
} from "./types";

export const UNIT_FACTORS: Record<
    UnitCategory,
    Record<string, number>
> = {

    length: {

        mm: 0.001,

        cm: 0.01,

        m: 1,

        km: 1000,

        in: 0.0254,

        ft: 0.3048,

        yd: 0.9144,

        mi: 1609.344,

    },

    weight: {

        mg: 0.000001,

        g: 0.001,

        kg: 1,

        ton: 1000,

        oz: 0.028349523125,

        lb: 0.45359237,

    },

    area: {

        sqm: 1,

        sqkm: 1000000,

        ha: 10000,

        acre: 4046.8564224,

        sqft: 0.09290304,

    },

    volume: {

        ml: 0.001,

        l: 1,

        m3: 1000,

        gal: 3.785411784,

    },

    speed: {

        ms: 1,

        kmh: 0.2777777778,

        mph: 0.44704,

        knot: 0.514444,

    },
    

};

export const UNIT_LABELS: Record<string, string> = {

    // Length
    mm: "Millimeter (mm)",
    cm: "Centimeter (cm)",
    m: "Meter (m)",
    km: "Kilometer (km)",
    in: "Inch (in)",
    ft: "Foot (ft)",
    yd: "Yard (yd)",
    mi: "Mile (mi)",

    // Weight
    mg: "Milligram (mg)",
    g: "Gram (g)",
    kg: "Kilogram (kg)",
    ton: "Metric Ton (t)",
    oz: "Ounce (oz)",
    lb: "Pound (lb)",

    // Area
    sqm: "Square Meter (m²)",
    sqkm: "Square Kilometer (km²)",
    ha: "Hectare (ha)",
    acre: "Acre",
    sqft: "Square Foot (ft²)",

    // Volume
    ml: "Milliliter (mL)",
    l: "Liter (L)",
    m3: "Cubic Meter (m³)",
    gal: "US Gallon (gal)",

    // Speed
    ms: "Meter per Second (m/s)",
    kmh: "Kilometer per Hour (km/h)",
    mph: "Miles per Hour (mph)",
    knot: "Knot (kn)",

};