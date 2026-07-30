"use client";

import {
    FileText,
    Lock,
    ShieldCheck,
} from "lucide-react";

type ProtectPdfSummaryProps = {
    fileName: string;
    password: string;
};

export default function ProtectPdfSummary({
    fileName,
    password,
}: ProtectPdfSummaryProps) {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-semibold">
                    Summary
                </h3>

                <p className="text-sm text-muted-foreground">
                    Review the protection settings before
                    processing the PDF.
                </p>
            </div>

            <div className="space-y-4 rounded-lg border p-4">
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
                        <Lock className="h-4 w-4 text-muted-foreground" />

                        <span className="text-sm">
                            Password
                        </span>
                    </div>

                    <span className="text-sm font-medium">
                        {password
                            ? "●".repeat(
                                Math.min(
                                    password.length,
                                    12,
                                ),
                            )
                            : "-"}
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-muted-foreground" />

                        <span className="text-sm">
                            Encryption
                        </span>
                    </div>

                    <span className="text-sm font-medium">
                        AES 256-bit
                    </span>
                </div>
            </div>
        </div>
    );
}