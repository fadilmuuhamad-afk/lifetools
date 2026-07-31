import {
    ShieldCheck,
    Zap,
    Globe,
} from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Carefully Selected",
        description:
            "We only recommend useful online services that provide real value.",
    },
    {
        icon: Zap,
        title: "Boost Productivity",
        description:
            "Discover tools that help you work faster and more efficiently.",
    },
    {
        icon: Globe,
        title: "Always Accessible",
        description:
            "Explore online resources available anytime from anywhere.",
    },
];

export default function WhyResources() {
    return (
        <section className="mt-24">

            <div className="text-center">

                <h2 className="text-4xl font-bold">

                    Why These Resources?

                </h2>

                <p className="mt-4 text-muted-foreground">

                    Every recommendation is selected to help creators,
                    developers, students, and professionals become more productive.

                </p>

            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">

                {features.map((feature) => {

                    const Icon = feature.icon;

                    return (

                        <div
                            key={feature.title}
                            className="rounded-2xl border p-8"
                        >

                            <Icon className="h-8 w-8 text-blue-600" />

                            <h3 className="mt-4 text-xl font-semibold">

                                {feature.title}

                            </h3>

                            <p className="mt-2 text-sm text-muted-foreground">

                                {feature.description}

                            </p>

                        </div>

                    );

                })}

            </div>

        </section>
    );
}