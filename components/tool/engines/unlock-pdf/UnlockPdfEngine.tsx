"use client";

import EditorActions from "@/components/tool/EditorActions";
import EditorLayout from "@/components/tool/EditorLayout";

import UploadStep from "@/components/tool/workflow/UploadStep";
import ResultStep from "@/components/tool/workflow/ResultStep";

import PdfPreview from "@/components/tool/shared/PdfPreview";

import { useUnlockPdf } from "@/hooks/useUnlockPdf";

import UnlockPdfControls from "./UnlockPdfControls";
import UnlockPdfSummary from "./UnlockPdfSummary";

export default function UnlockPdfEngine() {

    const {

        file,

        password,
        setPassword,

        result,

        error,

        resultUrl,

        processing,

        selectFile,

        process,

        download,

        reset,

    } = useUnlockPdf();

    if (result && file) {

        return (

            <ResultStep

                originalFile={file}

                resultFile={result}

                originalUrl=""

                resultUrl={resultUrl}

                onDownload={download}

                onReset={reset}

            />

        );

    }

    if (!file) {

        return (

            <UploadStep

                accept={{

                    "application/pdf": [".pdf"],

                }}

                onFile={selectFile}

                buttonText="Select Protected PDF"

                helperText="Upload a password-protected PDF"

            />

        );

    }

    return (

        <EditorLayout

            preview={

                <PdfPreview

                    file={file}

                />

            }

            controls={

                <UnlockPdfControls

                    password={password}

                    setPassword={setPassword}

                    error={error}

                />

            }

            summary={

                <UnlockPdfSummary

                    fileName={file.name}

                    password={password}

                />

            }

            actions={

                <EditorActions

                    processing={processing}

                    processingText="Unlocking PDF..."

                    actionText="Unlock PDF"

                    disabled={

                        processing ||

                        password.trim().length === 0

                    }

                    onAction={process}

                    onReset={reset}

                />

            }

        />

    );

}