"use client";

import { Copy } from "lucide-react";

interface Props {

    password: string;

    strength: string;

    onCopy(): void;

}

export default function PasswordGeneratorResult({

    password,

    strength,

    onCopy,

}: Props) {

    return (

        <div className="space-y-5">

            <div>

                <div className="text-sm font-medium">

                    Password

                </div>

                <textarea

                    readOnly

                    rows={3}

                    value={password}

                    className="
                        mt-2
                        w-full
                        rounded-xl
                        border
                        bg-background
                        p-4
                        font-mono
                    "

                />

            </div>

            <div className="flex items-center justify-between">

                <span className="text-sm text-muted-foreground">

                    Strength:

                    {" "}

                    {strength}

                </span>

                <button

                    onClick={onCopy}

                    className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        px-4
                        py-2
                    "

                >

                    <Copy className="h-4 w-4" />

                    Copy

                </button>

            </div>

        </div>

    );

}