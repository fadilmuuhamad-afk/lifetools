import Link from "next/link";
import { navigation } from "@/config/navigation";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-bold text-blue-600"
                >
                    LifeTools
                </Link>

                {/* Menu */}
                <nav className="hidden md:flex items-center gap-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium hover:text-blue-600 transition"
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>

            </div>
        </header>
    );
}