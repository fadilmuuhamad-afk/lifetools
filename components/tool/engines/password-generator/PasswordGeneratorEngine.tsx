"use client";

import { useMemo, useState } from "react";

import { RefreshCw } from "lucide-react";

import { generatePassword } from "@/services/utility/password";

import ToolCard from "@/components/tool/shared/ToolCard";
import ToolResult from "@/components/tool/shared/ToolResult";
import ToolActions from "@/components/tool/shared/ToolActions";

import PrimaryButton from "@/components/ui/PrimaryButton";

import PasswordGeneratorControls from "./PasswordGeneratorControls";
import PasswordGeneratorResult from "./PasswordGeneratorResult";

export default function PasswordGeneratorEngine() {

    const [length, setLength] =
        useState(16);

    const [uppercase, setUppercase] =
        useState(true);

    const [lowercase, setLowercase] =
        useState(true);

    const [numbers, setNumbers] =
        useState(true);

    const [symbols, setSymbols] =
        useState(false);

    const [password, setPassword] =
        useState("");

    const strength =
        useMemo(() => {

            let score = 0;

            if (length >= 12) score++;

            if (length >= 16) score++;

            if (uppercase) score++;

            if (lowercase) score++;

            if (numbers) score++;

            if (symbols) score++;

            if (score <= 2) return "Weak";

            if (score <= 4) return "Medium";

            return "Strong";

        }, [

            length,

            uppercase,

            lowercase,

            numbers,

            symbols,

        ]);

    function handleGenerate() {

        const value =
            generatePassword({

                length,

                uppercase,

                lowercase,

                numbers,

                symbols,

            });

        setPassword(value);

    }

    async function copyPassword() {

        if (!password) {

            return;

        }

        await navigator.clipboard.writeText(

            password,

        );

    }

    return (

        <div className="space-y-8">

            <ToolCard

                title="Password Generator"

                description="Generate strong and secure passwords instantly."

            >

                <PasswordGeneratorControls

                    length={length}

                    setLength={setLength}

                    uppercase={uppercase}

                    setUppercase={setUppercase}

                    lowercase={lowercase}

                    setLowercase={setLowercase}

                    numbers={numbers}

                    setNumbers={setNumbers}

                    symbols={symbols}

                    setSymbols={setSymbols}

                />

                <ToolActions>

                    <PrimaryButton

                        onClick={handleGenerate}

                    >

                        <RefreshCw className="mr-2 h-4 w-4" />

                        Generate Password

                    </PrimaryButton>

                </ToolActions>

            </ToolCard>

            <ToolResult

                title="Generated Password"

            >

                <PasswordGeneratorResult

                    password={password}

                    strength={strength}

                    onCopy={copyPassword}

                />

            </ToolResult>

        </div>

    );

}