"use client";

import { useState } from "react";

interface MapProps {
    dict: {
        title: string;
        subtitle: string;
        number: string;
        email: string;
        mapHint: string;
        office: {
            title: string;
            address: string;
        };
    };
}

export default function Map({ dict }: MapProps) {
    const [isActive, setIsActive] = useState(false);

    return (
        <section className="mx-auto px-2 max-w-full xl:max-w-[95vw] mt-10 mb-20 relative group">
            <div
                className="relative rounded-[4rem] overflow-hidden h-[80vh] xl:h-[90vh] w-full"
                onMouseLeave={() => setIsActive(false)}
            >
                <div className="absolute inset-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.4682367736636!2d71.48866237692603!3d51.13689457173117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424583d06148674d%3A0x62919d850407de2b!2z0YPQuy4g0JrRg9C50YjQuCDQlNC40L3RiyAxNywg0JDRgdGC0LDQvdCwIDAxMDAwMA!5e0!3m2!1sen!2skz!4v1709900000000!5m2!1sen!2skz"
                        width="100%"
                        height="100%"
                        style={{ border: 0, pointerEvents: isActive ? 'auto' : 'none' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className={`transition-all duration-700 ${isActive ? 'grayscale-0' : 'grayscale'}`}
                    ></iframe>

                    {/* Overlay */}
                    {!isActive && (
                        <div className="absolute inset-0 bg-black/60 transition-all duration-500 p-6 md:p-16 lg:p-24 flex flex-col lg:flex-row justify-center lg:justify-start items-start lg:items-center gap-8 lg:gap-[30px]">

                            {/* Center Section: Page Header & Interaction Hint */}
                            <div className="w-full lg:max-w-4xl animate-in fade-in slide-in-from-left-8 duration-1000 order-2 lg:order-1">
                                <span className="block text-xs md:text-sm font-condensed uppercase tracking-[0.25em] text-white/70 mb-3 md:mb-4 font-medium">
                                    {dict.subtitle}
                                </span>
                                <h1 className="text-4xl md:text-7xl lg:text-8xl font-usual text-white leading-tight mb-3 md:mb-4">
                                    {dict.title}
                                </h1>
                                <a
                                    href={`tel:${dict.number.replace(/\s+/g, '')}`}
                                    className="block text-xl md:text-2xl font-condensed uppercase tracking-[0.25em] text-white mb-3 md:mb-4 font-medium hover:text-white/70 transition-colors w-fit"
                                >
                                    {dict.number}
                                </a>
                                <a
                                    href={`mailto:${dict.email}`}
                                    className="block text-xl md:text-2xl font-condensed uppercase tracking-[0.25em] text-white mb-6 md:mb-8 font-medium hover:text-white/70 transition-colors w-fit"
                                >
                                    {dict.email}
                                </a>

                                <button
                                    onClick={() => setIsActive(true)}
                                    className="inline-flex items-center gap-3 md:gap-4 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 md:px-8 md:py-4 rounded-full text-white font-condensed uppercase tracking-[0.2em] text-[10px] md:text-sm hover:bg-white/20 transition-all duration-300"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                                    {dict.mapHint}
                                </button>
                            </div>

                            {/* Top Section: Address Card */}
                            <div className="flex justify-start mb-0 lg:mb-40 order-1 lg:order-2 w-full">
                                <div className="max-w-full lg:max-w-md bg-white/10 backdrop-blur-md border border-white/20 p-5 md:p-8 rounded-[2rem] md:rounded-[2.5rem] text-white animate-in fade-in slide-in-from-top-4 duration-700">
                                    <h3 className="font-condensed font-bold text-base md:text-xl uppercase mb-2 md:mb-3 tracking-wider flex items-center gap-2 md:gap-3">
                                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-400 animate-pulse" />
                                        {dict.office.title}
                                    </h3>
                                    <p className="font-usual text-sm md:text-lg text-white/90 leading-relaxed">
                                        {dict.office.address}
                                    </p>
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}