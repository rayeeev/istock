"use client";

import { ArrowUp } from "lucide-react";

interface ScrollToTopProps {
    className?: string;
}

export default function ScrollToTop({ className = "" }: ScrollToTopProps) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-gray-100 transition-colors ${className}`}
            aria-label="Scroll to top"
        >
            <ArrowUp size={20} strokeWidth={1.5} className="text-gray-800" />
        </button>
    );
}
