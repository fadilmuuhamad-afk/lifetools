"use client";

import {
    PdfImageFit,
    PdfPageSize,
} from "@/services/pdf/utils";

import { PdfOrientation } from "@/services/pdf/imageToPdf";

interface ImageToPdfControlsProps {

    pageSize: PdfPageSize;

    orientation: PdfOrientation;

    margin: number;

    fit: PdfImageFit;

    onPageSizeChange(
        value: PdfPageSize
    ): void;

    onOrientationChange(
        value: PdfOrientation
    ): void;

    onMarginChange(
        value: number
    ): void;

    onFitChange(
        value: PdfImageFit
    ): void;

}

export default function ImageToPdfControls({

    pageSize,

    orientation,

    margin,

    fit,

    onPageSizeChange,

    onOrientationChange,

    onMarginChange,

    onFitChange,

}: ImageToPdfControlsProps) {

    return (

        <div className="space-y-6">

            <div>

                <label className="mb-2 block text-sm font-medium">

                    Page Size

                </label>

                <select

                    className="w-full rounded-md border p-2"

                    value={pageSize}

                    onChange={(e) =>
                        onPageSizeChange(
                            e.target.value as PdfPageSize
                        )
                    }

                >

                    <option value="a4">
                        A4
                    </option>

                    <option value="letter">
                        Letter
                    </option>

                    <option value="legal">
                        Legal
                    </option>

                </select>

            </div>

            <div>

                <label className="mb-2 block text-sm font-medium">

                    Orientation

                </label>

                <select

                    className="w-full rounded-md border p-2"

                    value={orientation}

                    onChange={(e) =>
                        onOrientationChange(
                            e.target.value as PdfOrientation
                        )
                    }

                >

                    <option value="portrait">
                        Portrait
                    </option>

                    <option value="landscape">
                        Landscape
                    </option>

                </select>

            </div>

            <div>

                <label className="mb-2 block text-sm font-medium">

                    Image Fit

                </label>

                <select

                    className="w-full rounded-md border p-2"

                    value={fit}

                    onChange={(e) =>
                        onFitChange(
                            e.target.value as PdfImageFit
                        )
                    }

                >

                    <option value="contain">
                        Contain
                    </option>

                    <option value="cover">
                        Cover
                    </option>

                    <option value="stretch">
                        Stretch
                    </option>

                </select>

            </div>

            <div>

                <label className="mb-2 block text-sm font-medium">

                    Margin

                </label>

                <input

                    type="range"

                    min={0}

                    max={100}

                    value={margin}

                    onChange={(e) =>
                        onMarginChange(
                            Number(e.target.value)
                        )
                    }

                    className="w-full"

                />

                <p className="mt-1 text-sm text-muted-foreground">

                    {margin} pt

                </p>

            </div>

        </div>

    );

}