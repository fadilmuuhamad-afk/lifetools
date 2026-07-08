export type Tool = {
    id: string;
    title: string;
    slug: string;
    category: string;
    description: string;
    keywords: string[];
    popular?: boolean;
    featured?: boolean;
};

export const tools: Tool[] = [
    {
        id: "compress-image",
        title: "Compress Image",
        slug: "compress-image",
        category: "image",
        description: "Reduce image file size online without losing quality.",
        keywords: [
            "compress image",
            "image compressor",
            "reduce image size"
        ],
        popular: true,
        featured: true,
    },

    {
        id: "resize-image",
        title: "Resize Image",
        slug: "resize-image",
        category: "image",
        description: "Resize images instantly.",
        keywords: [
            "resize image",
            "image resizer"
        ],
        popular: true,
    },

    {
        id: "merge-pdf",
        title: "Merge PDF",
        slug: "merge-pdf",
        category: "pdf",
        description: "Merge multiple PDF files.",
        keywords: [
            "merge pdf",
            "combine pdf"
        ],
        popular: true,
    },
];