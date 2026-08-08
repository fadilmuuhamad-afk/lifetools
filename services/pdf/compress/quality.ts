import type {
    CompressionLevel,
} from "./types";

export interface CompressionPreset {

    /**
     * Render scale used by pdf.js.
     */
    scale: number;

    /**
     * Resize multiplier applied after rendering.
     */
    resize: number;

    /**
     * JPEG quality (0-1).
     */
    quality: number;

}

export const QUALITY_PRESETS: Record<
    CompressionLevel,
    CompressionPreset
> = {

    /**
     * Low compression
     * Best visual quality
     * Larger output file
     */
    low: {

        scale: 1,

        resize: 1,

        quality: 0.90,

    },

    /**
     * Medium compression
     * Balanced quality and file size
     */
    medium: {

        scale: 0.85,

        resize: 0.85,

        quality: 0.75,

    },

    /**
     * High compression
     * Smallest output file
     * Lower visual quality
     */
    high: {

        scale: 0.65,

        resize: 0.65,

        quality: 0.55,

    },

};

export function getCompressionPreset(
    level: CompressionLevel,
): CompressionPreset {

    return QUALITY_PRESETS[level];

}