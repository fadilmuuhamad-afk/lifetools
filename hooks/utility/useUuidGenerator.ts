"use client";

import { useState } from "react";

import { generateUuid } from "@/services/utility/uuid";
import { useClipboard } from "@/hooks/common/useClipboard";

export function useUuidGenerator() {

    const [count, setCount] = useState(10);

    const [uuids, setUuids] = useState<string[]>([]);

    const { copy: copyText } = useClipboard({
        category: "developer",
        tool: "uuid-generator",
    });

    function generate() {

        const result = generateUuid({

            count,

        });

        setUuids(result);

    }

    async function copy(uuid: string) {
        await copyText(uuid);
    }

    async function copyAll() {
        await copyText(
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