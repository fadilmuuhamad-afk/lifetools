import imageCompression from "browser-image-compression";

export class ImageProcessor {

    async compress(
        file: File,
        quality: number
    ) {

        return await imageCompression(file, {
            useWebWorker: true,
            maxSizeMB: 10,
            initialQuality: quality / 100,
        });

    }

}