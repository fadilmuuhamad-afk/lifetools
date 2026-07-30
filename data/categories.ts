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


import type { Category } from "@/types/category";

export const categories: Category[] = [
    {
        id: "image",
        slug: "image-tools",
        title: "Image Tools",
        description: "Compress, resize, crop and convert images.",
        icon: Image,
        href: "/image-tools",
    },
    {
        id: "pdf",
        slug: "pdf-tools",
        title: "PDF Tools",
        description: "Merge, split and compress PDF files.",
        icon: FileText,
        href: "/pdf-tools",
    },
    {
        id: "developer",
        slug: "developer-tools",
        title: "Developer",
        description: "JSON formatter, Base64, UUID and more.",
        icon: Code2,
        href: "/developer-tools",
    },
    {
        id: "text",
        slug: "text-tools",
        title: "Text Tools",
        description: "Word counter, case converter and text utilities.",
        icon: Type,
        href: "/text-tools",
    },
    {
        id: "calculator",
        slug: "calculator-tools",
        title: "Calculator",
        description: "Age, BMI, percentage and financial calculators.",
        icon: Calculator,
        href: "/calculator-tools",
    },
    {
        id: "converter",
        slug: "converter-tools",
        title: "Converter",
        description: "Unit, currency and file converters.",
        icon: ArrowLeftRight,
        href: "/converter-tools",
    },
    {
        id: "color",
        slug: "color-tools",
        title: "Color Tools",
        description: "Color picker and palette generator.",
        icon: Palette,
        href: "/color-tools",
    },
    {
        id: "qr",
        slug: "qr-tools",
        title: "QR & Barcode",
        description: "Generate QR Code and Barcode instantly.",
        icon: QrCode,
        href: "/qr-tools",
    },
];