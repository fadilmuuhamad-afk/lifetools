"use client";

import { Copy } from "lucide-react";

interface Props {

    uuids: string[];

    onCopy(value: string): void;

    onCopyAll(): void;

}

export default function UuidGeneratorResult({

    uuids,

    onCopy,

    onCopyAll,

}: Props) {

    if (uuids.length === 0) {

        return (

            <div className="text-sm text-muted-foreground">

                Click <strong>Generate UUID</strong> to create UUIDs.

            </div>

        );

    }

    return (

        <div className="space-y-4">

            <div className="flex justify-end">

                <button

                    onClick={onCopyAll}

                    className="
                        rounded-xl
                        border
                        px-4
                        py-2
                        text-sm
                    "

                >

                    Copy All

                </button>

            </div>

            <div className="space-y-3">

                {uuids.map((uuid, index) => (

                    <div

                        key={uuid}

                        className="
                            flex
                            items-center
                            justify-between
                            rounded-xl
                            border
                            p-3
                        "

                    >

                        <code className="break-all text-sm">

                            {index + 1}. {uuid}

                        </code>

                        <button

                            onClick={() => onCopy(uuid)}

                            className="ml-4"

                        >

                            <Copy className="h-4 w-4" />

                        </button>

                    </div>

                ))}

            </div>

        </div>

    );

}