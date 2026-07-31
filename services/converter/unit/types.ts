
export type UnitCategory =
    | "length"
    | "weight"
    | "area"
    | "volume"
    | "speed";

export interface Unit {
    label: string;
    value: string;
}

export interface ConversionResult {
    success: boolean;
    result: number;
}