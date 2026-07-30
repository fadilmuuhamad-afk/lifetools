"use client";

import { useState } from "react";
import { getQpdfRunner } from "@/services/pdf/core";

export default function QpdfTestPage() {
    const [status, setStatus] = useState("Idle");

    async function handleClick() {
        try {
            setStatus("Creating runner...");

            const runner = await getQpdfRunner();

            console.log(runner);

            setStatus("Runner created successfully ✅");
        } catch (error) {
            console.error(error);

            setStatus(
                error instanceof Error
                    ? error.message
                    : "Unknown error",
            );
        }
    }

    return (
        <main className="p-8 space-y-6">
            <h1 className="text-2xl font-bold">
                QPDF Runner Test
            </h1>

            <button
                onClick={handleClick}
                className="rounded bg-black px-4 py-2 text-white"
            >
                Create Runner
            </button>

            <pre>{status}</pre>
        </main>
    );
}