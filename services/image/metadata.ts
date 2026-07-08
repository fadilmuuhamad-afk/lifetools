export interface ImageMetadata {
    width: number;
    height: number;
    size: number;
    type: string;
    name: string;
}

export async function getImageMetadata(
    file: File
): Promise<ImageMetadata> {
    return new Promise((resolve, reject) => {
        const img = new Image();

        img.onload = () => {
            resolve({
                width: img.width,
                height: img.height,
                size: file.size,
                type: file.type,
                name: file.name,
            });

            URL.revokeObjectURL(img.src);
        };

        img.onerror = reject;

        img.src = URL.createObjectURL(file);
    });
}