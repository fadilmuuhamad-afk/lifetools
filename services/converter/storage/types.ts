export type StorageUnit =
    | "b"
    | "kb"
    | "mb"
    | "gb"
    | "tb";

export interface ConversionResult {

    success: boolean;

    result: number;

}