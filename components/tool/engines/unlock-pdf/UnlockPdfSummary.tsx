"use client";

import {
    FileText,
    LockOpen,
    ShieldCheck,
} from "lucide-react";

interface Props {

    fileName: string;

    password: string;

}

export default function UnlockPdfSummary({

    fileName,

    password,

}: Props) {

    return (

        <div className="space-y-6">

            <div>

                <h3 className="text-lg font-semibold">

                    Summary

                </h3>

                <p className="text-sm text-muted-foreground">

                    Review the unlock settings before processing.

                </p>

            </div>

            <div className="rounded-xl border p-4 space-y-4">

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">

                        <FileText className="h-4 w-4 text-muted-foreground" />

                        <span className="text-sm">

                            File

                        </span>

                    </div>

                    <span className="max-w-[180px] truncate text-sm font-medium">

                        {fileName}

                    </span>

                </div>

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">

                        <LockOpen className="h-4 w-4 text-muted-foreground" />

                        <span className="text-sm">

                            Password

                        </span>

                    </div>

                    <span className="text-sm font-medium">

                        {

                            password

                                ? "●".repeat(

                                    Math.min(

                                        password.length,

                                        12,

                                    ),

                                )

                                : "-"

                        }

                    </span>

                </div>

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">

                        <ShieldCheck className="h-4 w-4 text-muted-foreground" />

                        <span className="text-sm">

                            Action

                        </span>

                    </div>

                    <span className="text-sm font-medium">

                        Remove Password Protection

                    </span>

                </div>

            </div>

        </div>

    );

}