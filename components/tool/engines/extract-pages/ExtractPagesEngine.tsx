"use client";

import EditorLayout from "@/components/tool/EditorLayout";
import EditorActions from "@/components/tool/EditorActions";

import UploadStep from "@/components/tool/workflow/UploadStep";
import ResultStep from "@/components/tool/workflow/ResultStep";

import FilePreview from "@/components/tool/shared/FilePreview";

import { useExtractPages } from "@/hooks/useExtractPages";

import ExtractPagesControls from "./ExtractPagesControls";
import ExtractPagesSummary from "./ExtractPagesSummary";

export default function ExtractPagesEngine() {

    const {

        file,

        pages,

        result,

        resultUrl,

        processing,

        error,

        selectFile,

        process,

        download,

        reset,

        setPages,

    } = useExtractPages();

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

                    title="Selected PDF"

                />

            }

            controls={

                <ExtractPagesControls

                    pages={pages}

                    error={error}

                    setPages={setPages}

                />

            }

            summary={

                <ExtractPagesSummary

                    file={file}

                    pages={pages}

                />

            }

            actions={

                <EditorActions

                    processing={processing}

                    processingText="Extracting Pages..."

                    actionText="Extract Pages"

                    disabled={!pages.trim()}

                    onAction={process}

                    onReset={reset}

                />

            }

        />

    );

}