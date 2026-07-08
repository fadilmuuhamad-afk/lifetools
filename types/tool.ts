export interface Tool {
    id: string;
    title: string;
    slug: string;
    category: string;
    description: string;
    keywords: string[];
    featured?: boolean;
    popular?: boolean;
}