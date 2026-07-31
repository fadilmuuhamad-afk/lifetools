export type TemperatureUnit =
    | "c"
    | "f"
    | "k";

export interface ConversionResult {

    success: boolean;

    result: number;

}