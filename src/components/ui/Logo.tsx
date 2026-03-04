"use client";

import Link from "next/link";
import Image from "next/image";

interface LogoProps {
    lang: string;
}

export default function Logo({ lang }: LogoProps) {
    const handleScrollToTop = () => {
        if (typeof window !== "undefined" && (window.location.pathname === `/${lang}` || window.location.pathname === `/${lang}/`)) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div>
            <Link
                href={`/${lang}`}
                onClick={handleScrollToTop}
                className="group relative flex items-center justify-center px-4 py-1 bg-black/40 rounded-full overflow-hidden transition-all duration-500 shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)] hover:scale-105 active:scale-95"
                aria-label="Home"
            >
                <Image
                    src="/logo-text.png"
                    alt="ISTOCK"
                    width={837}
                    height={151}
                    priority
                    className="relative z-10 h-10 w-[100px] md:w-[200px] object-contain"
                />
            </Link>
        </div>
    );
}
