"use client";

import Link from "next/link";

interface LogoProps {
    className?: string;
    textClassName?: string;
    lang: string;
}

export default function Logo({ className = "", textClassName = "text-gray-600", lang }: LogoProps) {
    const handleScrollToTop = (e: React.MouseEvent) => {
        if (typeof window !== "undefined" && (window.location.pathname === `/${lang}` || window.location.pathname === `/${lang}/`)) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div className={className}>
            <Link
                href={`/${lang}`}
                onClick={handleScrollToTop}
                className="flex items-center gap-3 group"
                aria-label="Home"
            >
                <h2 className={`text-xl md:text-2xl font-black font-condensed tracking-[0.1em] transition-all duration-300 ${textClassName}`}>
                    ISTOCK
                </h2>
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 via-blue-400 to-green-400 rounded-[4px] shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:rotate-12 transition-transform duration-500"></div>
            </Link>
        </div>
    );
}