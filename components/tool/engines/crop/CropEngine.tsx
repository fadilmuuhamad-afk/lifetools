"use client";

import UploadStep from "@/components/tool/workflow/UploadStep";
import ResultStep from "@/components/tool/workflow/ResultStep";

import useImageCrop from "@/hooks/useImageCrop";

import ImageInfo from "@/components/image/ImageInfo";

import EditorLayout from "@/components/tool/EditorLayout";
import EditorActions from "@/components/tool/EditorActions";

import CropCanvas from "./CropCanvas";
import CropControls from "./CropControls";
import CropSummary from "./CropSummary";

export default function CropEngine() {

    const crop = useImageCrop();

    if (!crop.file) {
        return (
            <UploadStep
                onFile={crop.selectFile}
            />
        );
    }

    if (crop.result) {
        return (
            <ResultStep
                originalFile={crop.file}
                resultFile={crop.result}
                originalUrl={crop.imageUrl}
                resultUrl={crop.resultUrl}
                onDownload={crop.download}
                onReset={crop.reset}
            />
        );
    }

    return (
        <EditorLayout

            preview={
                <CropCanvas
                    image={crop.imageUrl}
                    crop={crop.crop}
                    zoom={crop.zoom}
                    aspect={crop.aspect}
                    rotation={crop.rotation}
                    onCropChange={crop.setCrop}
                    onZoomChange={crop.setZoom}
                    onCropComplete={(_, pixels) =>
                        crop.setCroppedAreaPixels(pixels)
                    }
                />
            }

            controls={
                <CropControls
                    zoom={crop.zoom}
                    setZoom={crop.setZoom}
                    rotation={crop.rotation}
                    setRotation={crop.setRotation}
                    aspect={crop.aspect}
                    setAspect={crop.setAspect}
                />
            }

            info={
                <ImageInfo
                    file={crop.file}
                    width={crop.imageWidth}
                    height={crop.imageHeight}
                />
            }

            summary={
                <CropSummary
                    file={crop.file}
                    zoom={crop.zoom}
                    rotation={crop.rotation}
                    aspect={crop.aspect}
                />
            }

            actions={
                <EditorActions
                    processing={crop.processing}
                    disabled={crop.processing}
                    processingText="Cropping..."
                    actionText="Crop Image"
                    onAction={crop.cropCurrentImage}
                    onReset={crop.reset}
                />
            }

        />
    );

}