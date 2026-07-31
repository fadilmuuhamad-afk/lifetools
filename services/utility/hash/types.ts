export type HashAlgorithm =
    | "SHA-256"
    | "SHA-384"
    | "SHA-512";

export interface HashResult {

    success: boolean;

    output: string;

    error?: string;

}