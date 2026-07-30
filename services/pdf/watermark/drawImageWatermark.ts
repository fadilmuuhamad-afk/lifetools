import {

    PDFImage,

    PDFPage,

    degrees,

} from "pdf-lib";

import { getPosition } from "@/services/pdf/shared";

import type {

    ImageWatermarkOptions,

} from "./types";

interface DrawImageOptions {

    page: PDFPage;

    image: PDFImage;

}

export function drawImageWatermark(

    pageOptions: DrawImageOptions,

    options: ImageWatermarkOptions,

) {

    const {

        page,

        image,

    } = pageOptions;

    const { x, y } =
        getPosition({

            pageWidth:
                page.getWidth(),

            pageHeight:
                page.getHeight(),

            elementWidth:
                options.width,

            elementHeight:
                options.height,

            position:
                options.position,

        });

    page.drawImage(

        image,

        {

            x,

            y,

            width:
                options.width,

            height:
                options.height,

            rotate:
                degrees(
                    options.rotation,
                ),

            opacity:
                options.opacity,

        },

    );

}