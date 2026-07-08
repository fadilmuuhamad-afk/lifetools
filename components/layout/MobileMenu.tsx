"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

import { navigation } from "@/config/navigation";

export default function MobileMenu() {
    return (
        <Sheet>

            <SheetTrigger
                className="md:hidden rounded-lg p-2 hover:bg-muted transition"
            >
                <Menu className="h-6 w-6" />
            </SheetTrigger>

            <SheetContent side="left">

                <div className="mt-10 flex flex-col gap-6">

                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-lg font-medium hover:text-blue-600 transition"
                        >
                            {item.title}
                        </Link>
                    ))}

                </div>

            </SheetContent>

        </Sheet>
    );
}