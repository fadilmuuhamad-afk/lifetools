"use client";

import EditorLayout from "@/components/tool/EditorLayout";
import EditorActions from "@/components/tool/EditorActions";

import UploadStep from "@/components/tool/workflow/UploadStep";
import ResultStep from "@/components/tool/workflow/ResultStep";

import FilePreview from "@/components/tool/shared/FilePreview";

import { useCompressPdf } from "@/hooks/useCompressPdf";

import CompressPdfControls from "./CompressPdfControls";
import CompressPdfSummary from "./CompressPdfSummary";

export default function CompressPdfEngine() {

    const {

        file,

        level,

        setLevel,

        result,

        error,

        resultUrl,

        processing,

        progress,

        stage,

        selectFile,

        process,

        download,

        reset,

    } = useCompressPdf();

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

                <FilePreview

                    file={file}

                />

            }

            controls={

                <CompressPdfControls

                    level={level}

                    setLevel={setLevel}

                    error={error}

                />

            }

            summary={

                <CompressPdfSummary

                    file={file}

                    progress={progress}

                    stage={stage}

                />

            }

            actions={

                <EditorActions

                    processing={processing}

                    processingText="Compressing PDF..."

                    actionText="Compress PDF"

                    disabled={processing}

                    onAction={process}

                    onReset={reset}

                />

            }

        />

    );

}