"use client";

import Cropper from "react-easy-crop";
import type { Area } from "react-easy-crop";

interface Props {

    image: string;

    crop: {
        x: number;
        y: number;
    };

    zoom: number;

    aspect: number;

    rotation: number;

    onCropChange(
        crop: {
            x: number;
            y: number;
        }
    ): void;

    onZoomChange(
        zoom: number
    ): void;

    onCropComplete(
        croppedArea: Area,
        croppedAreaPixels: Area
    ): void;

}

export default function CropCanvas({

    image,

    crop,

    zoom,

    aspect,

    rotation,

    onCropChange,

    onZoomChange,

    onCropComplete,

}: Props) {

    return (

        <div className="relative h-[500px] overflow-hidden rounded-xl">

            <Cropper

                image={image}

                crop={crop}

                zoom={zoom}

                aspect={aspect}

                rotation={rotation}

                onCropChange={onCropChange}

                onZoomChange={onZoomChange}

                onCropComplete={onCropComplete}

            />

        </div>

    );

}