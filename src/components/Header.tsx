"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./ui/Logo";

interface HeaderProps {
    dict: any;
    lang: string;
}

const Flags = {
    en: (
        <svg viewBox="0 0 60 30" width="24" height="12" className="rounded-sm overflow-hidden shadow-sm">
            <clipPath id="s">
                <path d="M0,0 v30 h60 v-30 z" />
            </clipPath>
            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </svg>
    ),
    ru: (
        <svg viewBox="0 0 3 2" width="24" height="16" className="rounded-sm overflow-hidden shadow-sm">
            <rect width="3" height="1" fill="#fff" />
            <rect width="3" height="1" y="1" fill="#D52B1E" />
            <rect width="3" height="0.66" y="0.66" fill="#0039A6" />
        </svg>
    ),
    kk: (
        <svg viewBox="0 0 32 16" width="24" height="12" className="rounded-sm overflow-hidden shadow-sm">
            <rect width="32" height="16" fill="#00AFCA" />
            <circle cx="16" cy="8" r="3.5" fill="#FEC604" />
            <path d="M16 4.5l.5 1.5h1.5l-1.2 1 .5 1.5-1.3-1-1.3 1 .5-1.5-1.2-1h1.5z" fill="#FEC604" transform="scale(0.8) translate(4 2)" />
        </svg>
    )
};

export default function Header({ dict, lang }: HeaderProps) {
    const router = useRouter();
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 35);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLang = e.target.value;
        if (!pathname) return;
        const segments = pathname.split('/');
        if (segments.length > 1) {
            segments[1] = newLang;
            const newPath = segments.join('/');
            router.push(newPath);
        }
    };

    const handleNavChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const item = e.target.value;
        if (item) {
            router.push(`/${lang}/${item}`);
        }
    };

    const navItems = ['about', 'products', 'projects', 'contacts'];
    const currentFlag = Flags[lang as keyof typeof Flags] || Flags.en;

    return (
        <header className="sticky top-[30px] mt-25 left-0 right-0 pointer-events-auto z-50">
            <div className="mx-auto px-4 sm:px-8 max-w-7xl">
                <div className={`rounded-full h-14 flex items-center justify-between px-6 transition-all duration-700 ease-in-out ${isScrolled
                    ? "bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl"
                    : "bg-transparent backdrop-blur-none border-transparent shadow-none"
                    } hover:bg-black/50`}>

                    <div className="flex items-center gap-3 sm:gap-6 lg:gap-10">
                        {/* Language Selector */}
                        <div className="relative flex items-center gap-3 cursor-pointer group group-hover:opacity-90 transition-opacity">
                            <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                                {currentFlag}
                                <span className="uppercase font-condensed font-bold text-sm tracking-widest text-white/90">
                                    {lang}
                                </span>
                            </div>

                            <select
                                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                onChange={handleLanguageChange}
                                value={lang}
                                aria-label="Select Language"
                            >
                                <option value="en">English</option>
                                <option value="ru">Русский</option>
                                <option value="kk">Қазақша</option>
                            </select>

                            {/* Divider for desktop */}
                            <div className={`h-4 w-[1px] ml-2 hidden md:block transition-all duration-500 ${isScrolled ? "bg-white/20" : "bg-transparent"}`}></div>
                        </div>

                        {/* Mobile Navigation Selector */}
                        <div className="relative md:hidden flex items-center gap-2 cursor-pointer group">
                            {/* Divider for mobile */}
                            <div className="h-4 w-[1px] bg-white/10 mr-2"></div>

                            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-105 transition-all duration-300">
                                <span className="uppercase font-condensed font-bold text-[10px] sm:text-xs tracking-[0.2em] text-white/90">
                                    {dict.Header.nav[pathname?.split('/')[2] || ''] || dict.Header.menu}
                                </span>
                                <svg
                                    width="8"
                                    height="5"
                                    viewBox="0 0 10 6"
                                    fill="none"
                                    className="text-white/40 group-hover:text-white/80 transition-transform duration-300"
                                >
                                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            <select
                                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                onChange={handleNavChange}
                                value={pathname?.split('/')[2] || ''}
                                aria-label="Navigate"
                            >
                                <option value="" disabled>{dict.Header.menu}</option>
                                {navItems.map((item) => (
                                    <option key={item} value={item} className="text-black">
                                        {dict.Header.nav[item]}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Navigation Links (Desktop) */}
                        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item}
                                    href={`/${lang}/${item}`}
                                    className="relative group py-2"
                                >
                                    <span className="uppercase text-sm lg:text-[15px] font-bold font-condensed tracking-[0.1em] text-white/80 group-hover:text-white transition-colors duration-500">
                                        {dict.Header.nav[item]}
                                    </span>
                                    {/* Premium Underline Indicator */}
                                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[var(--blue)] rounded-full transition-all duration-500 ease-out group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <Logo textClassName="text-white tracking-[0.15em] hover:opacity-80 transition-opacity" lang={lang} />
                    </div>
                </div>
            </div>
        </header>
    );
}
