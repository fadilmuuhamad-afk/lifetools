export async function loadImage(
    file: File
): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const img = new Image();

        img.onload = () => {
            resolve(img);

            URL.revokeObjectURL(img.src);
        };

        img.onerror = reject;

        img.src = URL.createObjectURL(file);
    });
}