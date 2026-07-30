import type { WatermarkPosition } from "../watermark";

interface GetPositionOptions {

    pageWidth: number;

    pageHeight: number;

    elementWidth: number;

    elementHeight: number;

    position: WatermarkPosition;

}

export function getPosition({

    pageWidth,

    pageHeight,

    elementWidth,

    elementHeight,

    position,

}: GetPositionOptions) {

    const margin = Math.min(
        pageWidth,
        pageHeight,
    ) * 0.05;

    switch (position) {

        case "top-left":

            return {

                x: margin,

                y: pageHeight - margin - elementHeight,

            };

        case "top-center":

            return {

                x: (pageWidth - elementWidth) / 2,

                y: pageHeight - margin - elementHeight,

            };

        case "top-right":

            return {

                x: pageWidth - margin - elementWidth,

                y: pageHeight - margin - elementHeight,

            };

        case "center-left":

            return {

                x: margin,

                y: (pageHeight - elementHeight) / 2,

            };

        case "center-right":

            return {

                x: pageWidth - margin - elementWidth,

                y: (pageHeight - elementHeight) / 2,

            };

        case "bottom-left":

            return {

                x: margin,

                y: margin,

            };

        case "bottom-center":

            return {

                x: (pageWidth - elementWidth) / 2,

                y: margin,

            };

        case "bottom-right":

            return {

                x: pageWidth - margin - elementWidth,

                y: margin,

            };

        case "center":

        default:

            return {

                x: (pageWidth - elementWidth) / 2,

                y: (pageHeight - elementHeight) / 2,

            };

    }

}