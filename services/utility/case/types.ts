export type CaseType =
    | "lowercase"
    | "uppercase"
    | "title"
    | "sentence"
    | "camel"
    | "pascal"
    | "snake"
    | "kebab";

export interface CaseResult {

    success: boolean;

    output: string;

}