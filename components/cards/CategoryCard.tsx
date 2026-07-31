import Link from "next/link";

interface Props {
    title: string;
    description: string;
    icon: React.ElementType;
    href: string;
    comingSoon: boolean;
}

export default function CategoryCard({
    title,
    description,
    icon: Icon,
    href,
    comingSoon,
}: Props) {
    return (
        <Link
            href={href}
            className="group relative rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            {comingSoon && (
                <span className="absolute right-4 top-4 rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-700">
                    Coming Soon
                </span>
            )}

            <Icon className="mb-4 h-10 w-10 text-blue-600 transition-transform duration-300 group-hover:scale-110" />

            <h3 className="mb-2 text-xl font-semibold">
                {title}
            </h3>

            <p className="text-sm text-gray-500">
                {description}
            </p>
        </Link>
    );
}