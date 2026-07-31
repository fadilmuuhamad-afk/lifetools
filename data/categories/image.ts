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
        featured: true,
    },
    {
        id: "crop-image",
        title: "Crop Image",
        slug: "crop-image",
        category: "image",
        description:
            "Crop images online with custom or preset aspect ratios.",
        keywords: [
            "crop image",
            "crop photo",
            "image cropper",
            "photo crop",
            "crop jpg",
            "crop png",
            "crop webp",
            "crop online",
            "image editor",
            "trim image",
        ],
        popular: true,
        featured: true,
    },
    {
        id: "rotate-image",
        title: "Rotate Image",
        slug: "rotate-image",
        category: "image",
        description:
            "Rotate JPG, PNG, and WebP images online.",
        keywords: [
            "rotate image",
            "rotate jpg",
            "rotate png",
            "rotate photo",
            "rotate picture",
        ],
        popular: true,
        featured: true,
    },

    {
        id: "flip-image",
        title: "Flip Image",
        slug: "flip-image",
        category: "image",
        description: "Flip images horizontally or vertically online.",
        keywords: [
            "flip image",
            "mirror image",
            "flip photo",
            "flip png",
            "flip jpg",
        ],
        popular: true,
        featured: true,
    },

    {
        id: "convert-image",
        title: "Convert Image",
        slug: "convert-image",
        category: "image",
        description:
            "Convert JPG, PNG and WebP images directly in your browser without uploading files.",
        keywords: [
            "convert image",
            "image converter",
            "jpg to png",
            "png to jpg",
            "jpg to webp",
            "webp to jpg",
            "png to webp",
            "webp to png",
        ],
        popular: true,
        featured: true,
    },
    
    {
        id: "pdf-to-image",

        title: "PDF to Image",

        slug: "pdf-to-image",

        category: "pdf",

        description:
            "Convert every page of a PDF into high-quality PNG images.",

        keywords: [
            "pdf",
            "image",
            "png",
            "converter",
            "extract pages",
        ],

        popular: true,

        featured: true,
    },

    {
        id: "merge-pdf",

        title: "Merge PDF",

        slug: "merge-pdf",

        category: "pdf",

        description: "Combine multiple PDF files into one document.",

        keywords: [
            "merge pdf",
            "combine pdf",
            "join pdf"
        ],

        popular: true,

        featured: true,
    },

    {
        id: "compress-pdf",

        title: "Compress PDF",

        slug: "compress-pdf",

        category: "pdf",

        description:
            "Reduce PDF file size directly in your browser while preserving readable quality.",

        keywords: [

            "compress pdf",

            "pdf compressor",

            "reduce pdf size",

            "shrink pdf",

            "optimize pdf",

        ],

        popular: true,

        featured: true,

    },

    {
        id: "split-pdf",

        title: "Split PDF",

        slug: "split-pdf",

        category: "pdf",

        description: "Split a PDF into separate pages.",

        keywords: [

            "split pdf",

            "extract pages",

            "pdf splitter"

        ],

        popular: true,

        featured: true,

    },

    {
        id: "rotate-pdf",

        title: "Rotate PDF",

        slug: "rotate-pdf",

        category: "pdf",

        description:
            "Rotate all pages in a PDF document.",

        keywords: [

            "rotate pdf",

            "pdf rotate",

            "turn pdf",

        ],

        popular: true,

        featured: true,

    },

    {
        id: "remove-pages",

        title: "Remove Pages",

        slug: "remove-pages",

        category: "pdf",

        description:
            "Remove selected pages from a PDF document.",

        keywords: [

            "remove pdf pages",

            "delete pdf pages",

            "pdf editor",

        ],

        popular: true,

        featured: true,

    },

    {
        id: "extract-pages",

        title: "Extract Pages",

        slug: "extract-pages",

        category: "pdf",

        description:
            "Extract selected pages from a PDF document into individual PDF files.",

        keywords: [

            "extract pdf pages",

            "split selected pages",

            "pdf extract",

        ],

        popular: true,

        featured: true,

    },

    {
        id: "watermark-pdf",

        title: "Watermark PDF",

        slug: "watermark-pdf",

        category: "pdf",

        description:
            "Add a text or image watermark to PDF documents directly in your browser.",

        keywords: [

            "watermark pdf",

            "add watermark",

            "pdf watermark",

            "text watermark",

            "image watermark",

            "logo watermark",

            "stamp pdf",

            "confidential pdf",

            "draft pdf",

        ],

        popular: true,

        featured: false,

    },   // ← tutup object watermark

    {
        id: "page-number-pdf",

        title: "Page Number PDF",

        slug: "page-number-pdf",

        category: "pdf",

        description:
            "Add page numbers to PDF documents.",

        keywords: [

            "page number pdf",

            "number pages",

            "pdf page numbering",

            "add page numbers",

        ],

        popular: false,

        featured: false,

    },

    {
        id: "protect-pdf",

        title: "Protect PDF",

        slug: "protect-pdf",

        category: "pdf",

        description:
            "Encrypt PDF documents with a password directly in your browser using AES 256-bit encryption.",

        keywords: [

            "protect pdf",

            "password pdf",

            "encrypt pdf",

            "pdf security",

            "lock pdf",

            "secure pdf",

            "pdf password",

            "pdf encryption",

            "aes 256 pdf",

        ],

        popular: false,

        featured: false,

    },

    {
        id: "unlock-pdf",

        title: "Unlock PDF",

        slug: "unlock-pdf",

        category: "pdf",

        description:
            "Remove password protection from PDF documents directly in your browser.",

        keywords: [

            "unlock pdf",

            "remove pdf password",

            "decrypt pdf",

            "unprotect pdf",

            "pdf unlock",

            "remove protection",

            "pdf security",

            "password remover",

        ],

        popular: false,

        featured: false,

    },

    {
        id: "password-generator",

        title: "Password Generator",

        slug: "password-generator",

        category: "developer",

        description:
            "Generate secure passwords with customizable length and character types directly in your browser.",

        keywords: [

            "password generator",

            "secure password",

            "random password",

            "strong password",

            "password tool",

            "online password generator",

            "generate password",

            "password creator",

        ],

        popular: false,

        featured: false,

    },

    {
        id: "uuid-generator",

        title: "UUID Generator",

        slug: "uuid-generator",

        category: "developer",

        description:
            "Generate RFC 4122 Version 4 UUIDs securely in your browser.",

        keywords: [

            "uuid",

            "uuid generator",

            "uuid v4",

            "guid",

            "random uuid",

            "developer",

            "web crypto",

        ],

        popular: false,

        featured: false,

    },

    {
        id: "json-formatter",

        title: "JSON Formatter",

        slug: "json-formatter",

        category: "developer",

        description:
            "Format, validate, minify and beautify JSON online for free.",

        keywords: [

            "json formatter",

            "json beautifier",

            "json validator",

            "json pretty print",

            "json minifier",

            "format json",

            "developer tools",

        ],

        popular: false,

        featured: false,

    },

    {
        id: "base64",

        title: "Base64 Encoder / Decoder",

        slug: "base64",

        category: "developer",

        description:
            "Encode and decode Base64 strings online for free.",

        keywords: [

            "base64",

            "base64 encoder",

            "base64 decoder",

            "encode base64",

            "decode base64",

            "developer tools",

        ],

        popular: false,

        featured: false,

    },

    {
        id: "url-encoder",

        title: "URL Encoder / Decoder",

        slug: "url-encoder",

        category: "developer",

        description:
            "Encode and decode URL strings using percent encoding directly in your browser.",

        keywords: [

            "url encoder",

            "url decoder",

            "percent encoding",

            "encode uri",

            "decode uri",

            "developer tool",

        ],

        popular: false,

        featured: false,

    },

    {
        id: "hash-generator",
        title: "Hash Generator",
        slug: "hash-generator",
        category: "developer",
        description:
            "Generate SHA-256, SHA-384, and SHA-512 hashes instantly in your browser.",
        keywords: [
            "hash generator",
            "sha256",
            "sha384",
            "sha512",
            "crypto",
            "developer tool",
        ],
        popular: false,
        featured: false,
    },

    {
        id: "case-converter",
        title: "Case Converter",
        slug: "case-converter",
        category: "text",
        description:
            "Convert text into lowercase, uppercase, title case, sentence case, camelCase, PascalCase, snake_case, and kebab-case.",
        keywords: [
            "case converter",
            "text converter",
            "uppercase",
            "lowercase",
            "camel case",
            "snake case",
            "kebab case",
            "title case",
        ],
        popular: true,
        featured: false,
    },

    {
        id: "word-counter",
        title: "Word Counter",
        slug: "word-counter",
        category: "text",
        description:
            "Count words, characters, sentences, paragraphs, and estimate reading time online.",
        keywords: [
            "word counter",
            "character counter",
            "reading time",
            "text statistics",
            "text analyzer",
            "online word counter",
        ],
        popular: true,
        featured: true,
    },

    {
        id: "character-counter",
        title: "Character Counter",
        slug: "character-counter",
        category: "text",
        description:
            "Count characters, words, lines, paragraphs, and characters without spaces instantly.",
        keywords: [
            "character counter",
            "letter counter",
            "text counter",
            "word count",
            "character count",
            "online character counter",
        ],
        popular: true,
        featured: true,
    },

    {
        id: "lorem-ipsum",
        title: "Lorem Ipsum Generator",
        slug: "lorem-ipsum",
        category: "text",
        description:
            "Generate Lorem Ipsum words, sentences, and paragraphs instantly online.",
        keywords: [

            "lorem ipsum",

            "lorem ipsum generator",

            "dummy text",

            "placeholder text",

            "text generator",

            "design text",

        ],
        popular: true,
        featured: false,

    },

    {
        id: "slug-generator",
        title: "Slug Generator",
        slug: "slug-generator",
        category: "text",
        description:
            "Generate clean SEO-friendly URL slugs from any text instantly.",
        keywords: [
            "slug generator",
            "url slug",
            "seo slug",
            "slugify",
            "url generator",
            "seo tools",
        ],
        popular: true,
        featured: true,
    },

    {
        id: "unit-converter",
        title: "Unit Converter",
        slug: "unit-converter",
        category: "converter",
        description:
            "Convert length, weight, area, volume, and speed instantly online.",
        keywords: [
            "unit converter",
            "measurement converter",
            "length converter",
            "weight converter",
            "area converter",
            "volume converter",
            "speed converter",
        ],
        popular: true,
        featured: true,
    },

    {
        id: "temperature-converter",
        title: "Temperature Converter",
        slug: "temperature-converter",
        category: "converter",
        description:
            "Convert Celsius, Fahrenheit, and Kelvin instantly online.",
        keywords: [
            "temperature converter",
            "celsius to fahrenheit",
            "fahrenheit to celsius",
            "kelvin converter",
            "temperature calculator",
        ],
        popular: true,
        featured: true,
    },

    {
        id: "data-storage-converter",
        title: "Data Storage Converter",
        slug: "data-storage-converter",
        category: "converter",
        description:
            "Convert bytes, kilobytes, megabytes, gigabytes and terabytes online instantly.",
        keywords: [
            "storage converter",
            "byte converter",
            "kb to mb",
            "mb to gb",
            "gb to tb",
            "file size converter",
            "data storage calculator",
        ],
        popular: true,
        featured: true,
    }
    
];