import { ImageProcessor } from "./ImageProcessor";

const processor = new ImageProcessor();

export function compressImage(
    file: File,
    quality: number
) {
    return processor.compress(
        file,
        quality
    );
}