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

    low: {

        scale: 0.75,

        resize: 0.85,

        quality: 0.65,

    },

    medium: {

        scale: 1,

        resize: 1,

        quality: 0.8,

    },

    high: {

        scale: 1.4,

        resize: 1.2,

        quality: 0.92,

    },

};

export function getCompressionPreset(

    level: CompressionLevel,

): CompressionPreset {

    return QUALITY_PRESETS[level];

}