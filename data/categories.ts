import {
    Image,
    FileText,
    Code2,
    Type,
    Calculator,
    ArrowLeftRight,
    Palette,
    QrCode,
} from "lucide-react";

export const categories = [
    {
        title: "Image Tools",
        description: "Compress, resize, crop and convert images.",
        icon: Image,
        href: "/image",
    },
    {
        title: "PDF Tools",
        description: "Merge, split and compress PDF files.",
        icon: FileText,
        href: "/pdf",
    },
    {
        title: "Developer",
        description: "JSON formatter, Base64, UUID and more.",
        icon: Code2,
        href: "/developer",
    },
    {
        title: "Text Tools",
        description: "Word counter, case converter and text utilities.",
        icon: Type,
        href: "/text",
    },
    {
        title: "Calculator",
        description: "Age, BMI, percentage and financial calculators.",
        icon: Calculator,
        href: "/calculator",
    },
    {
        title: "Converter",
        description: "Unit, currency and file converters.",
        icon: ArrowLeftRight,
        href: "/converter",
    },
    {
        title: "Color Tools",
        description: "Color picker and palette generator.",
        icon: Palette,
        href: "/color",
    },
    {
        title: "QR & Barcode",
        description: "Generate QR Code and Barcode instantly.",
        icon: QrCode,
        href: "/qr",
    },
];