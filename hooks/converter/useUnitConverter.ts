"use client";

import {

    useEffect,

    useMemo,

    useState,

} from "react";

import {

    convertUnit,

    UNIT_FACTORS,

    type UnitCategory,

} from "@/services/converter/unit";



export function useUnitConverter() {

    const [
        category,
        setCategory,
    ] = useState<UnitCategory>("length");

    const [
        from,
        setFrom,
    ] = useState("m");

    const [
        to,
        setTo,
    ] = useState("km");

    const units = useMemo(
        () => Object.keys(UNIT_FACTORS[category]),
        [category],
    );

    useEffect(() => {
        setFrom(units[0]);

        setTo(
            units[1] ?? units[0],
        );
    }, [
        category,
        units,
    ]);

    const [value, setValue] = useState("0");

    const result = useMemo(() => {

        const numericValue = Number(value);

        if (value === "" || Number.isNaN(numericValue)) {

            return {

                success: false,

                result: 0,

            };

        }

        return convertUnit(

            numericValue,

            category,

            from,

            to,

        );

    }, [

        value,

        category,

        from,

        to,

    ]);

    function reset() {

        setCategory("length");

        setFrom("m");

        setTo("km");

        setValue("0");

    }

    function swapUnits() {

        setFrom(to);

        setTo(from);

    }

    const hasValue = value.trim() !== "";

    return {

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

    };

}