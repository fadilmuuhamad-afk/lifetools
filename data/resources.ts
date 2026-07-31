export interface ResourceItem {
    id: string;

    slug: string;

    title: string;

    description: string;

    icon: string;

    placement: string;

    featured: boolean;
}

export const resources: ResourceItem[] = [
    {
        id: "ai-tools",

        slug: "ai-tools",

        title: "AI Tools",

        description:
            "Discover AI-powered services that improve productivity.",

        icon: "🤖",

        placement: "ai_tools",

        featured: true,
    },

    {   
        id: "developer-resources",
        slug: "developer-resources",
        title: "Developer Resources",
        description:
            "Useful online resources for developers, programmers, and engineers.",
        icon: "💻",
        placement: "developer_resources",
        featured: true,
    },

    {
        id: "learning-platforms",
        slug: "learning-platforms",
        title: "Learning Platforms",
        description:
            "Learn new skills with recommended online education platforms.",
        icon: "📚",
        placement: "learning_platforms",
        featured: true,
    },
    
    {
        id: "bonus-offers",
        slug: "bonus-offers",
        title: "Bonus Offers",
        description:
            "Explore featured partner recommendations and exclusive offers.",
        icon: "🎁",
        placement: "bonus_offers",
        featured: true,
    },
];  