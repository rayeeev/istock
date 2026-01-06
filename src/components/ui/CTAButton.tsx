import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
    dict: string;
    locale?: string;
}

export default function CTAButton({ dict, locale }: CTAButtonProps) {
    return (
        <Link
            href={`/${locale}/contacts`}
            className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 bg-[var(--blue)] border-3 border-white/20 text-white text-xl font-bold font-condensed uppercase tracking-wider rounded-full overflow-hidden transition-all duration-500 shadow-[0_8px_32px_-8px_rgba(0,163,224,0.5)] hover:shadow-[0_10px_40px_-10px_rgba(0,163,224,0.5)] hover:scale-105 active:scale-95"
        >
            <span className="relative z-10">
                {dict}
            </span>
            <ArrowRight
                className="w-6 h-6 relative z-10 transition-all duration-500 group-hover:translate-x-1"
                strokeWidth={2.5}
            />

            {/* Shine effect */}
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </Link>
    );
}