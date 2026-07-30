"use client";

import { useState } from "react";

import { protectPdf } from "@/services/pdf/protect";

export default function ProtectTestPage() {
    const [file, setFile] =
        useState<File | null>(null);

    const [password, setPassword] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const [status, setStatus] =
        useState("");

    async function handleProtect() {

        if (!file) {

            setStatus(
                "Choose a PDF first.",
            );

            return;

        }

        try {

            setLoading(true);

            setStatus(
                "Encrypting PDF...",
            );

            const output =
                await protectPdf({

                    file,

                    userPassword:
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

                Protect PDF Test

            </h1>

            <input

                type="file"

                accept=".pdf"

                onChange={(e) =>

                    setFile(

                        e.target.files?.[0] ??

                        null,

                    )

                }

            />

            <input

                type="password"

                value={password}

                placeholder="Password"

                onChange={(e) =>

                    setPassword(

                        e.target.value,

                    )

                }

                className="w-full rounded border p-2"

            />

            <button

                disabled={loading}

                onClick={handleProtect}

                className="rounded bg-black px-4 py-2 text-white"

            >

                {loading

                    ? "Processing..."

                    : "Protect PDF"}

            </button>

            <pre>

                {status}

            </pre>

        </main>

    );

}