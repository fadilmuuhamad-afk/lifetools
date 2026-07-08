import imageCompression from "browser-image-compression";

export async function compressImage(
    file: File,
    quality: number
) {
    const options = {
        maxSizeMB: 10,
        useWebWorker: true,

        initialQuality: quality / 100,
    };

    return await imageCompression(
        file,
        options
    );
}