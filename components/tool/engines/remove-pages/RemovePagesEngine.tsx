"use client";

import EditorLayout from "@/components/tool/EditorLayout";
import EditorActions from "@/components/tool/EditorActions";

import UploadStep from "@/components/tool/workflow/UploadStep";
import ResultStep from "@/components/tool/workflow/ResultStep";

import PdfThumbnailGrid from "@/components/tool/shared/PdfThumbnailGrid";

import { usePdfThumbnails } from "@/hooks/usePdfThumbnails";
import { useRemovePages } from "@/hooks/useRemovePages";

import RemovePagesControls from "./RemovePagesControls";
import RemovePagesSummary from "./RemovePagesSummary";

export default function RemovePagesEngine() {

    const {

        file,

        pages,

        updatePages,

        selectedPages,

        togglePage,

        result,

        error,

        resultUrl,

        processing,

        selectFile,

        process,

        download,

        reset,

    } = useRemovePages();

    const {

        pages: thumbnails,

        loading: thumbnailsLoading,

        error: previewError,

    } = usePdfThumbnails(file, {

        maxPages: 20,

    });

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

                thumbnailsLoading ? (

                    <div className="rounded-xl border p-6 text-center text-sm text-muted-foreground">

                        Rendering PDF preview...

                    </div>

                ) : previewError ? (

                    <div className="rounded-xl border border-red-300 bg-red-50 p-6 text-center text-sm text-red-600">

                        {previewError}

                    </div>

                ) : (

                    <PdfThumbnailGrid

                        pages={thumbnails}

                        selectedPages={selectedPages.map(

                            (page) => page + 1,

                        )}

                        onToggle={togglePage}

                    />

                )

            }

            controls={

                <RemovePagesControls

                    pages={pages}

                    setPages={updatePages}

                    error={error}

                />

            }

            summary={

                <RemovePagesSummary

                    file={file}

                    pages={pages}

                />

            }

            actions={

                <EditorActions

                    processing={processing}

                    processingText="Removing Pages..."

                    actionText="Remove Pages"

                    disabled={!pages.trim()}

                    onAction={process}

                    onReset={reset}

                />

            }

        />

    );

}