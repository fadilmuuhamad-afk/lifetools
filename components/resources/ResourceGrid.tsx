import { resources } from "@/data/resources";

import ResourceCard from "./ResourceCard";

export default function ResourceGrid() {
    return (
        <div
            className="
                mt-12
                grid
                gap-8
                md:grid-cols-2
            "
        >
            {resources.map((resource) => (
                <ResourceCard
                    key={resource.id}
                    {...resource}
                />
            ))}
        </div>
    );
}