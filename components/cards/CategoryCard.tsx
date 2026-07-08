import Link from "next/link";

interface Props {
    title: string;
    description: string;
    icon: React.ElementType;
    href: string;
}

export default function CategoryCard({
    title,
    description,
    icon: Icon,
    href,
}: Props) {
    return (
        <Link
            href={href}
            className="group rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <Icon className="mb-4 h-10 w-10 text-blue-600 transition group-hover:scale-110" />

            <h3 className="mb-2 text-xl font-semibold">
                {title}
            </h3>

            <p className="text-sm text-gray-500">
                {description}
            </p>
        </Link>
    );
}