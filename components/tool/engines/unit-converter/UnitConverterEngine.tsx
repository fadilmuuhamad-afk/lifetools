"use client";

import {
    ArrowLeftRight,
    Eraser,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import TextToolWorkspace from "@/components/tool/shared/text/TextToolWorkspace";

import { useUnitConverter } from "@/hooks/converter/useUnitConverter";

import UnitConverterControls from "./UnitConverterControls";
import UnitConverterResult from "./UnitConverterResult";

const CATEGORIES = [
    "length",
    "weight",
    "area",
    "volume",
    "speed",
] as const;

export default function UnitConverterEngine() {

    const {

        category,
        setCategory,

        units,

        from,
        setFrom,

        to,
        setTo,

        value,
        setValue,

        result,

        hasValue,

        reset,

        swapUnits,

    } = useUnitConverter();

    return (

        <TextToolWorkspace

            title="Unit Converter"

            description="Convert between length, weight, area, volume, and speed instantly."

            input={

                <UnitConverterControls

                    category={category}

                    categories={[...CATEGORIES]}

                    units={units}

                    value={value}

                    from={from}

                    to={to}

                    onCategoryChange={setCategory}

                    onValueChange={setValue}

                    onFromChange={setFrom}

                    onToChange={setTo}


                />

            }

            actions={

                <div className="flex flex-wrap gap-2">

                    <Button

                        type="button"

                        variant="outline"

                        onClick={swapUnits}

                    >

                        <ArrowLeftRight className="mr-2 h-4 w-4" />

                        Swap

                    </Button>

                    <Button

                        type="button"

                        variant="outline"

                        onClick={reset}

                    >

                        <Eraser className="mr-2 h-4 w-4" />

                        Reset

                    </Button>

                </div>

            }

            output={

                hasValue ? (

                    < UnitConverterResult

                        value={value}

                        from={from}

                        to={to}

                        result={result.result}

                        success={result.success}

                    />

                ) : null

            }

            resultTitle="Conversion Result"

        />

    );

}