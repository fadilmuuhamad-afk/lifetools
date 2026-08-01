import {
    ShieldCheck,
    Zap,
    Globe,
    Smartphone,
} from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Fast",
        description: "Lightning-fast tools that work directly in your browser.",
    },
    {
        icon: ShieldCheck,
        title: "Secure",
        description: "Your files stay private and are never stored permanently.",
    },
    {
        icon: Globe,
        title: "Free",
        description: "All essential tools are available without registration.",
    },
    {
        icon: Smartphone,
        title: "Responsive",
        description: "Works seamlessly on desktop, tablet, and mobile devices.",
    },
];

export default function Features() {
    return (
        <section className="bg-muted/40 py-20">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold">
                        Why Choose LifeTools?
                    </h2>

                    <p
                        className="
                        mt-3
                        text-muted-foreground
                        "
                    >
                        Everything designed to make your work easier.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="
                        rounded-2xl
                        border
                        bg-card
                        p-8
                        shadow-sm
                        transition
                        hover:shadow-lg
                        "
                        >
                            <feature.icon className="mb-4 h-10 w-10 text-blue-600" />

                            <h3 className="text-xl font-bold">
                                {feature.title}
                            </h3>

                            <p className="mt-2 text-sm text-muted-foreground">
                                {feature.description}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}