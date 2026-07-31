import type { Metadata } from "next";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import ResourceGrid from "@/components/resources/ResourceGrid";
import ResourceHero from "@/components/resources/ResourceHero";
import WhyResources
    from "@/components/resources/WhyResources";

import ResourceFaq
    from "@/components/resources/ResourceFaq";

import ResourceFaqSchema
    from "@/components/seo/ResourceFaqSchema";

import ResourceBreadcrumb
    from "@/components/resources/ResourceBreadcrumb";

import ResourceDisclosure
    from "@/components/resources/ResourceDisclosure";

import ResourceCTA
    from "@/components/resources/ResourceCTA";

export const metadata: Metadata = {
    title: "Resources",
    description:
        "Discover useful online resources for developers, creators, students, and professionals.",
};

export default function ResourcesPage() {
    return (
        <Section>

            <Container>
                <ResourceBreadcrumb />

                <ResourceHero />
                <ResourceFaqSchema />

                <ResourceHero />

                <ResourceHero />

                <div id="resources">

                    <ResourceGrid />
                    <ResourceHero />

                    <div id="resources">

                        <ResourceGrid />

                    </div>

                    <WhyResources />
                    <ResourceHero />

                    <div id="resources">

                        <ResourceGrid />

                    </div>

                    <WhyResources />

                    <ResourceFaq />

                    <ResourceDisclosure />

                    <ResourceCTA />

                </div>

            </Container>

        </Section>
    );
}