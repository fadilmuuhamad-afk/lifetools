import CompressEngine from "./CompressEngine";
import ResizeEngine from "./ResizeEngine";
import CropEngine from "./crop/CropEngine";
import RotateEngine from "./rotate/RotateEngine";
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
import PasswordGeneratorEngine from "./password-generator/PasswordGeneratorEngine";
import UuidGeneratorEngine from "./uuid-generator/UuidGeneratorEngine";
import JsonFormatterEngine from "./json-formatter/JsonFormatterEngine";
import Base64Engine from "./base64/Base64Engine";
import UrlEncoderEngine from "@/components/tool/engines/url-encoder";
import HashGeneratorEngine from "./hash-generator";
import CaseConverterEngine from "./case-converter";
import WordCounterEngine from "./word-counter";
import CharacterCounterEngine from "./character-counter";
import LoremIpsumEngine from "./lorem-ipsum";
import SlugGeneratorEngine from "./slug-generator";
import UnitConverterEngine from "./unit-converter";
import TemperatureConverterEngine from "./temperature-converter";
import StorageConverterEngine from "./data-storage-converter";



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
    "password-generator": PasswordGeneratorEngine,
    "uuid-generator": UuidGeneratorEngine,
    "json-formatter": JsonFormatterEngine,
    "base64": Base64Engine,
    "url-encoder": UrlEncoderEngine,
    "hash-generator": HashGeneratorEngine,
    "case-converter": CaseConverterEngine,
    "word-counter": WordCounterEngine,
    "character-counter": CharacterCounterEngine,
    "lorem-ipsum": LoremIpsumEngine,
    "slug-generator": SlugGeneratorEngine,
    "unit-converter": UnitConverterEngine,
    "temperature-converter": TemperatureConverterEngine,
    "data-storage-converter": StorageConverterEngine,
};