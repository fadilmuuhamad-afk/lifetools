import { Tool } from "@/types/tool";

export const imageTools: Tool[] = [
    {
        id: "compress-image",
        title: "Compress Image",
        slug: "compress-image",
        category: "image",
        description: "Reduce image size online without noticeable quality loss.",
        keywords: [
            "compress image",
            "image compressor",
            "reduce image size",
        ],
        popular: true,
        featured: true,
    },
    {
        id: "resize-image",
        title: "Resize Image",
        slug: "resize-image",
        category: "image",
        description: "Resize JPG, PNG, and WebP images online.",
        keywords: [
            "resize image",
            "image resizer",
        ],
        popular: true,
    },
];