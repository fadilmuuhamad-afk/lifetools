"use client";

import NumberField from "@/components/ui/fields/NumberField";
import SliderField from "@/components/ui/fields/SliderField";
import SelectField from "@/components/ui/fields/SelectField";
import type { WatermarkType } from "@/services/pdf/watermark";
import type { WatermarkPosition } from "@/services/pdf/watermark";

interface Props {

    type: WatermarkType;
    setType(value: WatermarkType): void;

    text: string;
    setText(value: string): void;

    image: File | null;
    selectImage(file: File): void;

    fontSize: number;
    setFontSize(value: number): void;

    width: number;
    setWidth(value: number): void;

    height: number;
    setHeight(value: number): void;

    opacity: number;
    setOpacity(value: number): void;

    rotation: number;
    setRotation(value: number): void;

    position: string;
    setPosition: (value: WatermarkPosition) => void;

    error?: string | null;

}

export default function WatermarkPdfControls({

    type,
    setType,

    text,
    setText,

    image,
    selectImage,

    fontSize,
    setFontSize,

    width,
    setWidth,

    height,
    setHeight,

    opacity,
    setOpacity,

    rotation,
    setRotation,

    position,
    setPosition,

    error,

}: Props) {


    return (

        <div className="space-y-6">

            <div className="space-y-2">

                <SelectField

                    label="Watermark Type"

                    value={type}

                    onChange={(value) =>

                        setType(value as WatermarkType)

                    }

                    options={[

                        {

                            label: "Text",

                            value: "text",

                        },

                        {

                            label: "Image",

                            value: "image",

                        },

                    ]}

                />

                {type === "text" ? (

                    <div className="space-y-2">

                        <label className="text-sm font-medium">

                            Watermark Text

                        </label>

                        <input
                            key={type}
                            type="text"
                            value={text ?? ""}

                            onChange={(e) =>

                                setText(e.target.value)

                            }

                            placeholder="CONFIDENTIAL"

                            className="
                w-full
                rounded-xl
                border
                bg-background
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-primary
            "

                        />

                    </div>

                ) : (

                    <div className="space-y-3">

                        <label className="text-sm font-medium">

                            Watermark Image

                        </label>

                        <input

                            type="file"

                            accept="image/png,image/jpeg,image/webp"

                            onChange={(event) => {

                                const file = event.target.files?.[0];

                                if (file) {

                                    selectImage(file);

                                }

                            }}

                            className="
                block
                w-full
                text-sm
            "

                        />

                        {image && (

                            <div className="text-sm text-muted-foreground">

                                Selected:

                                {" "}

                                {image.name}

                            </div>

                        )}

                    </div>

                )}

            </div>

            {type === "text" ? (

                <NumberField

                    label="Font Size"

                    value={fontSize}

                    onChange={setFontSize}

                    min={8}

                    max={200}

                    suffix="px"

                />

            ) : (

                <>

                    <NumberField

                        label="Image Width"

                        value={width}

                        onChange={setWidth}

                        min={20}

                        max={1000}

                        suffix="px"

                    />

                    <NumberField

                        label="Image Height"

                        value={height}

                        onChange={setHeight}

                        min={20}

                        max={1000}

                        suffix="px"

                    />

                </>

            )}

            <SliderField

                label="Opacity"

                value={opacity}

                onChange={setOpacity}

                min={0}

                max={100}

                step={1}

            />

            <SliderField

                label="Rotation"

                value={rotation}

                onChange={setRotation}

                min={-180}

                max={180}

                step={1}

            />

            <SelectField

                label="Position"

                value={position}

                onChange={setPosition}

                options={[
                    { label: "Top Left", value: "top-left" },
                    { label: "Top Center", value: "top-center" },
                    { label: "Top Right", value: "top-right" },

                    { label: "Center Left", value: "center-left" },
                    { label: "Center", value: "center" },
                    { label: "Center Right", value: "center-right" },

                    { label: "Bottom Left", value: "bottom-left" },
                    { label: "Bottom Center", value: "bottom-center" },
                    { label: "Bottom Right", value: "bottom-right" },
                ]}

            />

            {error && (

                <div
                    className="
                        rounded-xl
                        border
                        border-red-300
                        bg-red-50
                        px-4
                        py-3
                        text-sm
                        text-red-600
                    "
                >
                    {error}
                </div>

            )}

        </div>

    );

}