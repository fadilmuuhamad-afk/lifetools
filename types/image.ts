export type ImageOrientation =
    | "Landscape"
    | "Portrait"
    | "Square";

export interface ImageMetadata {

    width: number;

    height: number;

    size: number;

    mime: string;

    extension: string;

    megapixels: number;

    aspectRatio: string;

    orientation: ImageOrientation;

}