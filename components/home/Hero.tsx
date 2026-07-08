import { siteConfig } from "@/config/site";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import HeroSearch from "@/components/search/HeroSearch";

export default function Hero() {
    return (
        <Section className="relative overflow-hidden">

            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" />

            <Container>

                <div className="mx-auto max-w-4xl text-center">

                    {/* Badge */}

                    <div className="inline-flex rounded-full border bg-white px-4 py-2 text-sm shadow-sm">

                        {siteConfig.hero.badge}

                    </div>

                    {/* Title */}

                    <h1 className="mt-8 text-5xl font-black tracking-tight md:text-7xl">

                        {siteConfig.hero.title}

                        <br />

                        <span className="text-blue-600">

                            {siteConfig.hero.subtitle}

                        </span>

                    </h1>

                    {/* Description */}

                    <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">

                        {siteConfig.hero.description}

                    </p>
                    <HeroSearch />
                    <div className="mt-12 grid grid-cols-3 gap-6">

                        {siteConfig.hero.stats.map((stat) => (

                            <div key={stat.label}>

                                <h3 className="text-3xl font-bold">

                                    {stat.value}

                                </h3>

                                <p className="text-sm text-muted-foreground">

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