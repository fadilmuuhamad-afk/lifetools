"use client";

import { useMemo, useState } from "react";

import {
    convertTemperature,
    type TemperatureUnit,
} from "@/services/converter/temperature";

export function useTemperatureConverter() {
    const [value, setValue] = useState("0");

    const [from, setFrom] = useState<TemperatureUnit>("c");

    const [to, setTo] = useState<TemperatureUnit>("f");

    const result = useMemo(() => {
        const numericValue = Number(value);

        if (value === "" || Number.isNaN(numericValue)) {
            return {
                success: false,
                result: 0,
            };
        }

        return convertTemperature(
            numericValue,
            from,
            to,
        );
    }, [
        value,
        from,
        to,
    ]);

    function swapUnits() {
        setFrom(to);
        setTo(from);
    }

    function reset() {
        setValue("0");
        setFrom("c");
        setTo("f");
    }

    const hasValue = value.trim() !== "";

    return {
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
    };
}