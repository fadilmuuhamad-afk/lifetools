import type { LucideIcon } from "lucide-react";

export interface Category {
    id: string;

    slug: string;

    title: string;

    shortTitle: string;

    description: string;

    href: string;

    icon: LucideIcon;
}