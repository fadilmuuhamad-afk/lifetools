"use client";

import EditorActions from "@/components/tool/EditorActions";
import EditorLayout from "@/components/tool/EditorLayout";

import UploadStep from "@/components/tool/workflow/UploadStep";
import ResultStep from "@/components/tool/workflow/ResultStep";

import PdfPreview from "@/components/tool/shared/PdfPreview";

import { useProtectPdf } from "@/hooks/useProtectPdf";

import ProtectPdfControls from "./ProtectPdfControls";
import ProtectPdfSummary from "./ProtectPdfSummary";

export default function ProtectPdfEngine() {

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

    } = useProtectPdf();

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

                buttonText="Select PDF"

                helperText="Upload a PDF document"

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

                <ProtectPdfControls

                    password={password}

                    setPassword={setPassword}

                    error={error}

                />

            }

            summary={

                <ProtectPdfSummary

                    fileName={file.name}

                    password={password}

                />

            }

            actions={

                <EditorActions

                    processing={processing}

                    processingText="Protecting PDF..."

                    actionText="Protect PDF"

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