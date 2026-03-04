'use client';

import Image from "next/image";
import Link from "next/link";
import ArrowButton from "./ui/ArrowButton";
import p1 from "../../public/about.jpeg";
import p2 from "../../public/dioxel.jpeg";
import p3 from "../../public/cleaning.jpg";
import p4 from "../../public/storing.jpg";

interface HeroProps {
    dict: any;
    locale: string;
}

export default function Hero({ dict, locale }: HeroProps) {
    const heroImages = [p1, p2, p3, p4];
    const links = [
        `/${locale}/about#ImageText`,
        `/${locale}/products#Dioxel`,
        `/${locale}/#Services`,
        `/${locale}/projects#Solutions`,
    ];

    return (
        <section className="py-16 px-4 md:px-8 lg:px-12">
            {/* Header Section */}
            <div className="mb-12 lg:px-24">
                <span className="block text-sm font-condensed uppercase tracking-[0.15em] text-gray-500 mb-4">
                    {dict.label}
                </span>
                <h1 className="text-2xl lg:text-3xl leading-tight font-usual max-w-2xl text-[var(--foreground)]">
                    {dict.headline}
                </h1>
            </div>

            {/* Cards Section - Carousel on mobile, Grid on desktop */}
            <div className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto snap-x snap-mandatory pb-6 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] -mx-4 px-4 md:mx-0 md:px-0">
                {dict.cards.map((card: any, index: number) => (
                    <div
                        key={index}
                        className="relative h-[450px] md:h-[500px] min-w-[85vw] md:min-w-0 md:w-auto flex-shrink-0 snap-center rounded-[3rem] overflow-hidden group cursor-pointer"
                    >
                        <Link href={links[index]} className="block h-full w-full">
                            {/* Background Image */}
                            <Image
                                src={heroImages[index]}
                                alt={card.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                sizes="(max-width: 768px) 85vw, (max-width: 1280px) 45vw, 40vw"
                                quality={72}
                                placeholder="blur"
                            />

                            {/* Overlays */}
                            {/* General darken */}
                            <div className="absolute inset-0 bg-black/20" />

                            {/* Gradient from bottom */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                                {/* Top Label */}
                                <span className="text-xs font-condensed font-bold tracking-[0.15em] uppercase text-white/90">
                                    {card.category}
                                </span>

                                {/* Bottom Content */}
                                <div>
                                    <h3 className="text-xl md:text-2xl font-usual leading-snug mb-6 pr-4">
                                        {card.title}
                                    </h3>

                                    {/* Arrow Button */}
                                    <div className="flex justify-end transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-x-2">
                                        <ArrowButton diameter={40} lang={locale} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
