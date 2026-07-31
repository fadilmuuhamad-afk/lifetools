export type LoremType =
    | "words"
    | "sentences"
    | "paragraphs";

export interface LoremOptions {

    type: LoremType;

    amount: number;

}