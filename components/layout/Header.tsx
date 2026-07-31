import Link from "next/link";

import { navigation } from "@/config/navigation";

import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                <Link
                    href="/"
                    className="text-2xl font-bold text-blue-600"
                >
                    LifeTools
                </Link>

                <nav
                    aria-label="Main navigation"
                    className="hidden items-center gap-8 md:flex"
                >

                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium hover:text-blue-600"
                        >
                            {item.title}
                        </Link>
                    ))}

                </nav>

                <div className="flex items-center gap-3">

                    <ThemeToggle />

                    <MobileMenu />

                </div>

            </div>
        </header>
    );
}