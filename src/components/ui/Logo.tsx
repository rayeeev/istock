"use client";

import Link from "next/link";
import Image from "next/image";

interface LogoProps {
    className?: string;
    textClassName?: string;
    lang: string;
}

export default function Logo({ className = "", textClassName = "text-gray-600", lang }: LogoProps) {
    const handleScrollToTop = () => {
        if (typeof window !== "undefined" && (window.location.pathname === `/${lang}` || window.location.pathname === `/${lang}/`)) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div className={className}>
            <Link
                href={`/${lang}`}
                onClick={handleScrollToTop}
                className="flex items-center gap-2 group"
                aria-label="Home"
            >
                <h2 className={`text-xl md:text-2xl font-black font-condensed tracking-[0.1em] transition-all duration-300 drop-shadow-[0_0_6px_rgba(180,180,180,0.35)] ${textClassName}`}>
                    ISTOCK
                </h2>
                <Image
                    src="/logo.svg"
                    alt="ISTOCK logo"
                    width={28}
                    height={28}
                    priority
                    className="w-9 h-9 md:w-10 md:h-10 shrink-0 group-hover:rotate-12 transition-transform duration-500 drop-shadow-[0_0_6px_rgba(109,212,248,0.30)]"
                />
            </Link>
        </div>
    );
}
