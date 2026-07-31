export type WatermarkType =
    | "text"
    | "image";

export type WatermarkPosition =
    | "top-left"
    | "top-center"
    | "top-right"
    | "center-left"
    | "center"
    | "center-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";

export interface TextWatermarkOptions {

    type: "text";

    text: string;

    fontSize: number;

    opacity: number;

    rotation: number;

    position: WatermarkPosition;

}

export interface ImageWatermarkOptions {

    type: "image";

    image: File;

    width: number;

    height: number;

    opacity: number;

    rotation: number;

    position: WatermarkPosition;

}

export type WatermarkOptions =
    | TextWatermarkOptions
    | ImageWatermarkOptions;