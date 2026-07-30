import Link from "next/link";

interface Props {
    categoryName: string;
    categorySlug: string;
    toolName: string;
}

export default function Breadcrumb({
    categoryName,
    categorySlug,
    toolName,
}: Props) {
    return (
        <nav
            aria-label="Breadcrumb"
            className="mb-6 text-sm text-muted-foreground"
        >
            <ol className="flex flex-wrap items-center gap-2">
                <li>
                    <Link
                        href="/"
                        className="hover:text-blue-600"
                    >
                        Home
                    </Link>
                </li>

                <li>/</li>

                <li>
                    <Link
                        href={`/${categorySlug}`}
                        className="hover:text-blue-600"
                    >
                        {categoryName}
                    </Link>
                </li>

                <li>/</li>

                <li
                    className="font-medium text-foreground"
                >
                    {toolName}
                </li>
            </ol>
        </nav>
    );
}