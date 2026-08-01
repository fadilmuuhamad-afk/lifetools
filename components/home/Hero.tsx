import { siteConfig } from "@/config/site";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import HeroSearch from "@/components/search/HeroSearch";

export default function Hero() {
    return (
        <Section className="relative overflow-hidden">

            {/* Background Gradient */}
            <div className="
            absolute inset-0 -z-10
            bg-gradient-to-b
            from-blue-50
            via-background
            to-background
            dark:from-slate-900
            dark:via-background
            dark:to-background
            "/>

            <Container>

                <div className="mx-auto max-w-4xl text-center">

                    {/* Badge */}

                    <div
                        className="
                    inline-flex
                    rounded-full
                    border
                    border-border
                    bg-background/80
                    px-4
                    py-2
                    text-sm
                    text-foreground
                    shadow-sm
                    backdrop-blur
                    "
                    >

                        {siteConfig.hero.badge}

                    </div>

                    {/* Title */}

                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">

                        {siteConfig.hero.title}

                        <br />

                        <span className="text-blue-600">

                            {siteConfig.hero.subtitle}

                        </span>

                    </h1>

                    {/* Description */}

                    <p
                        className="
                    mt-6
                    text-base
                    leading-7
                    text-muted-foreground
                    sm:text-lg
                    "
                    >
                        {siteConfig.hero.description}

                    </p>
                    <HeroSearch />
                    <div className="mt-12 grid grid-cols-3 gap-6">

                        {siteConfig.hero.stats.map((stat) => (

                            <div key={stat.label}>

                                <h3 className="text-3xl font-bold text-foreground">

                                    {stat.value}

                                </h3>

                                <p
                                    className="
                                text-base
                                leading-7
                                text-muted-foreground
                                sm:text-lg
                                "
                                >

                                    {stat.label}

                                </p>

                            </div>

                        ))}

                    </div>
                </div>

            </Container>

        </Section>
    );
}