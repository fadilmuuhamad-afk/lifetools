import type {
    WatermarkPosition,
} from "@/services/pdf/watermark";

export interface PageNumberOptions {
    file: File;

    startNumber: number;

    fontSize: number;

    opacity: number;

    rotation: number;

    position: WatermarkPosition;
}