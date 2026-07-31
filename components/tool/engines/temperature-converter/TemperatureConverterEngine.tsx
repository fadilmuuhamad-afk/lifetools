"use client";

import {

    ArrowLeftRight,

    Eraser,

} from "lucide-react";

import { Button } from "@/components/ui/button";

import TextToolWorkspace from "@/components/tool/shared/text/TextToolWorkspace";

import { useTemperatureConverter } from "@/hooks/converter/useTemperatureConverter";

import TemperatureConverterControls from "./TemperatureConverterControls";
import TemperatureConverterResult from "./TemperatureConverterResult";

export default function TemperatureConverterEngine() {

    const {

        value,

        setValue,

        from,

        setFrom,

        to,

        setTo,

        result,

        hasValue,

        swapUnits,

        reset,

    } = useTemperatureConverter();

    return (

        <TextToolWorkspace

            title="Temperature Converter"

            description="Convert Celsius, Fahrenheit, and Kelvin instantly."

            input={

                <TemperatureConverterControls

                    value={value}

                    from={from}

                    to={to}

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

                    <TemperatureConverterResult

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