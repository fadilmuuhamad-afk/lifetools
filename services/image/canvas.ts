export function createCanvas(
    width: number,
    height: number
) {

    const canvas =
        document.createElement("canvas");

    canvas.width = width;

    canvas.height = height;

    const ctx =
        canvas.getContext("2d");

    if (!ctx) {

        throw new Error(
            "Canvas not supported."
        );

    }

    ctx.imageSmoothingEnabled = true;

    ctx.imageSmoothingQuality = "high";

    return {

        canvas,

        ctx,

    };

}