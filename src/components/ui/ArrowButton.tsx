'use client';

import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ArrowButtonProps {
    diameter: number;
    where?: string;
    lang?: string;
    className?: string;
}

export default function ArrowButton({
    diameter,
    where = "",
    lang = "ru",
    className = ""
}: ArrowButtonProps) {
    const handleScrollToTop = (e: React.MouseEvent) => {
        // Only scroll if already on the target page
        if (typeof window !== "undefined" && where && (window.location.pathname === `/${lang}/${where}` || window.location.pathname === `/${lang}/${where}/`)) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const CircleVisual = (
        <div
            style={{
                width: `${diameter}px`,
                height: `${diameter}px`,
            }}
            className={`rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 ease-in-out ${className}`}
        >
            <ArrowRight
                size={Math.round(diameter * 0.4)}
                className="transition-all duration-500 ease-in-out text-white group-hover:text-black"
            />
        </div>
    );

    if (!where) {
        return CircleVisual;
    }

    return (
        <Link
            href={`/${lang}/${where}`}
            onClick={handleScrollToTop}
            className="group inline-block"
        >
            {CircleVisual}
        </Link>
    );
}