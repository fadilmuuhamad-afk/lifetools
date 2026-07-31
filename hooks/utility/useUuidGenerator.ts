"use client";

import { useState } from "react";

import { generateUuid } from "@/services/utility/uuid";

export function useUuidGenerator() {

    const [count, setCount] = useState(10);

    const [uuids, setUuids] = useState<string[]>([]);

    function generate() {

        const result = generateUuid({

            count,

        });

        setUuids(result);

    }

    async function copy(uuid: string) {

        await navigator.clipboard.writeText(

            uuid,

        );

    }

    async function copyAll() {

        await navigator.clipboard.writeText(

            uuids.join("\n"),

        );

    }

    return {

        count,

        setCount,

        uuids,

        generate,

        copy,

        copyAll,

    };

}