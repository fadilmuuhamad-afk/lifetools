"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Hindari hydration mismatch
    if (!mounted) {
        return (
            <button
                className="rounded-xl border p-2"
                aria-label="Toggle theme"
            >
                <Moon className="h-5 w-5 opacity-0" />
            </button>
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            onClick={() =>
                setTheme(isDark ? "light" : "dark")
            }
            className="rounded-xl border p-2 transition hover:bg-muted"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <Sun className="h-5 w-5" />
            ) : (
                <Moon className="h-5 w-5" />
            )}
        </button>
    );
}