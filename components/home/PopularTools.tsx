import ToolCard from "@/components/cards/ToolCard";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { getPopularTools } from "@/lib/tools";

export default function PopularTools() {
    const tools = getPopularTools();


    return (
        <Section>
            <Container>
                <SectionTitle
                    title="Popular Tools"
                    subtitle="Most frequently used tools by our users."
                />

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {tools.map((tool) => (
                        <ToolCard
                            key={tool.id}
                            tool={tool}
                        />
                    ))}
                </div>
            </Container>
        </Section>
    );
}