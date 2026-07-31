"use client";

import ToolCard from "@/components/tool/shared/ToolCard";
import ToolActions from "@/components/tool/shared/ToolActions";
import ToolResult from "@/components/tool/shared/ToolResult";

import PrimaryButton from "@/components/ui/PrimaryButton";

import { RefreshCw } from "lucide-react";

import { useUuidGenerator } from "@/hooks/utility/useUuidGenerator";

import UuidGeneratorControls from "./UuidGeneratorControls";
import UuidGeneratorResult from "./UuidGeneratorResult";

export default function UuidGeneratorEngine() {

    const {

        count,

        setCount,

        uuids,

        generate,

        copy,

        copyAll,

    } = useUuidGenerator();

    return (

        <div className="space-y-8">

            <ToolCard

                title="UUID Generator"

                description="Generate RFC 4122 Version 4 UUIDs instantly in your browser."

            >

                <UuidGeneratorControls

                    count={count}

                    setCount={setCount}

                />

                <ToolActions>

                    <PrimaryButton

                        onClick={generate}

                    >

                        <RefreshCw className="mr-2 h-4 w-4" />

                        Generate UUID

                    </PrimaryButton>

                </ToolActions>

            </ToolCard>

            <ToolResult

                title="Generated UUIDs"

            >

                <UuidGeneratorResult

                    uuids={uuids}

                    onCopy={copy}

                    onCopyAll={copyAll}

                />

            </ToolResult>

        </div>

    );

}