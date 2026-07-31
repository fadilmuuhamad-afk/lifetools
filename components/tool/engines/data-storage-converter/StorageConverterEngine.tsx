"use client";

import {

    ArrowLeftRight,

    Eraser,

} from "lucide-react";

import { Button } from "@/components/ui/button";

import TextToolWorkspace from "@/components/tool/shared/text/TextToolWorkspace";

import { useStorageConverter } from "@/hooks/converter/useStorageConverter";

import StorageConverterControls from "./StorageConverterControls";
import StorageConverterResult from "./StorageConverterResult";

export default function StorageConverterEngine() {

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

    } = useStorageConverter();

    return (

        <TextToolWorkspace

            title="Data Storage Converter"

            description="Convert bytes, KB, MB, GB and TB instantly."

            input={

                <StorageConverterControls

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

                    <StorageConverterResult

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