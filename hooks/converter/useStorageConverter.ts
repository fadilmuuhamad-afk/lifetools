"use client";

import { useMemo, useState } from "react";

import {
    convertStorage,
    type StorageUnit,
} from "@/services/converter/storage";

export function useStorageConverter() {
    const [value, setValue] = useState("0");

    const [from, setFrom] = useState<StorageUnit>("mb");

    const [to, setTo] = useState<StorageUnit>("gb");

    const result = useMemo(() => {
        const numericValue = Number(value);

        if (value === "" || Number.isNaN(numericValue)) {
            return {
                success: false,
                result: 0,
            };
        }

        return convertStorage(
            numericValue,
            from,
            to,
        );
    }, [
        value,
        from,
        to,
    ]);

    const hasValue = value.trim() !== "";

    function swapUnits() {
        setFrom(to);
        setTo(from);
    }

    function reset() {
        setValue("0");
        setFrom("mb");
        setTo("gb");
    }

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