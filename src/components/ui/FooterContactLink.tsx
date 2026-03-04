"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FooterContactLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isContactsPage = pathname === href || pathname.endsWith("/contacts");

    return (
        <Link
            href={href}
            className={`group relative inline-flex w-fit items-center justify-center gap-3 px-8 py-3 bg-[var(--blue)] border-2 border-white/20 text-white text-sm font-bold font-condensed uppercase tracking-widest rounded-full overflow-hidden transition-all duration-500 shadow-[0_4px_20px_-4px_rgba(0,163,224,0.5)] hover:shadow-[0_8px_30px_-6px_rgba(0,163,224,0.6)] hover:scale-105 active:scale-95 ${isContactsPage ? "opacity-0 pointer-events-none" : ""}`}
        >
            <span className="relative z-10">{children}</span>
            <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative z-10 translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
            >
                <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </Link>
    );
}
