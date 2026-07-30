"use client";

import { useState } from "react";

import { unlockPdf } from "@/services/pdf/unlock";

export default function UnlockTestPage() {

    const [file, setFile] =
        useState<File | null>(null);

    const [password, setPassword] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const [status, setStatus] =
        useState("");

    async function handleUnlock() {

        if (!file) {

            setStatus(
                "Choose a protected PDF first.",
            );

            return;

        }

        try {

            setLoading(true);

            setStatus(
                "Unlocking PDF...",
            );

            const output =
                await unlockPdf({

                    file,

                    password,

                });

            const url =
                URL.createObjectURL(
                    output,
                );

            const a =
                document.createElement(
                    "a",
                );

            a.href = url;

            a.download =
                output.name;

            a.click();

            URL.revokeObjectURL(
                url,
            );

            setStatus(
                "Done ✅",
            );

        } catch (error) {

            console.error(error);

            setStatus(

                error instanceof Error

                    ? error.message

                    : "Unknown error",

            );

        } finally {

            setLoading(false);

        }

    }

    return (

        <main className="mx-auto max-w-xl space-y-6 p-8">

            <h1 className="text-2xl font-bold">

                Unlock PDF Test

            </h1>

            <input

                type="file"

                accept=".pdf"

                onChange={(event) =>

                    setFile(

                        event.target.files?.[0] ??

                        null,

                    )

                }

            />

            <input

                type="password"

                placeholder="Password"

                value={password}

                onChange={(event) =>

                    setPassword(

                        event.target.value,

                    )

                }

                className="w-full rounded border p-2"

            />

            <button

                onClick={handleUnlock}

                disabled={loading}

                className="rounded bg-black px-4 py-2 text-white"

            >

                {

                    loading

                        ? "Processing..."

                        : "Unlock PDF"

                }

            </button>

            <pre>

                {status}

            </pre>

        </main>

    );

}