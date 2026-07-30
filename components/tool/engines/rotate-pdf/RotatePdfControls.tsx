"use client";

interface Props {

    rotation: 90 | 180 | 270;

    setRotation(
        value: 90 | 180 | 270
    ): void;

}

export default function RotatePdfControls({

    rotation,

    setRotation,

}: Props) {

    return (

        <div className="rounded-xl border p-5">

            <h3 className="font-medium">

                Rotation

            </h3>

            <div className="mt-4">

                <select

                    value={rotation}

                    onChange={(event) =>

                        setRotation(

                            Number(

                                event.target.value

                            ) as 90 | 180 | 270

                        )

                    }

                    className="w-full rounded-md border px-3 py-2"

                >

                    <option value={90}>
                        Rotate 90°
                    </option>

                    <option value={180}>
                        Rotate 180°
                    </option>

                    <option value={270}>
                        Rotate 270°
                    </option>

                </select>

            </div>

            <p className="mt-4 text-sm text-muted-foreground">

                The selected rotation will be applied
                to every page in the PDF.

            </p>

        </div>

    );

}