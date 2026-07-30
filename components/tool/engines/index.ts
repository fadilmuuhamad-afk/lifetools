import CompressEngine from "./CompressEngine";
import ResizeEngine from "./ResizeEngine";
import CropEngine from "./crop/CropEngine";
import RotateEngine from "./rotate/RotateEngine";
import ComingSoonEngine from "./ComingSoonEngine";
import FlipEngine from "./flip/FlipEngine";
import ConverterEngine from "./converter/ConverterEngine";

import ImageToPdfEngine from "./image-to-pdf/ImageToPdfEngine";
import PdfToImageEngine from "./pdf-to-image/PdfToImageEngine";
import MergePdfEngine from "./merge-pdf/MergePdfEngine";
import SplitPdfEngine from "./split-pdf/SplitPdfEngine";
import RotatePdfEngine from "./rotate-pdf/RotatePdfEngine";
import RemovePagesEngine from "./remove-pages/RemovePagesEngine";
import ExtractPagesEngine from "./extract-pages/ExtractPagesEngine";
import CompressPdfEngine from "./compress-pdf/CompressPdfEngine";
import WatermarkPdfEngine from "./watermark-pdf/WatermarkPdfEngine";
import PageNumberPdfEngine from "./page-number-pdf/PageNumberPdfEngine";
import ProtectPdfEngine from "./protect-pdf/ProtectPdfEngine";
import UnlockPdfEngine from "./unlock-pdf/UnlockPdfEngine";



export const workspaceRegistry = {

    "compress-image": CompressEngine,
    "resize-image": ResizeEngine,
    "crop-image": CropEngine,
    "rotate-image": RotateEngine,
    "flip-image": FlipEngine,
    "convert-image": ConverterEngine,

    "image-to-pdf": ImageToPdfEngine,
    "pdf-to-image": PdfToImageEngine,
    "merge-pdf": MergePdfEngine,
    "split-pdf": SplitPdfEngine,
    "rotate-pdf": RotatePdfEngine,
    "remove-pages": RemovePagesEngine,
    "extract-pages": ExtractPagesEngine,
    "compress-pdf": CompressPdfEngine,
    "watermark-pdf": WatermarkPdfEngine,
    "page-number-pdf": PageNumberPdfEngine,
    "protect-pdf": ProtectPdfEngine,
    "unlock-pdf": UnlockPdfEngine,
};