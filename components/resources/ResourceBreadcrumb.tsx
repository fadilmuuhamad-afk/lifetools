import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ResourceBreadcrumb() {
    return (
        <nav className="mb-8 flex items-center text-sm text-muted-foreground">

            <Link
                href="/"
                className="hover:text-foreground"
            >
                Home
            </Link>

            <ChevronRight className="mx-2 h-4 w-4" />

            <span className="font-medium text-foreground">

                Resources

            </span>

        </nav>
    );
}