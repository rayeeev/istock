"use client";

import { useState, useEffect } from "react";

interface MapProps {
    dict: {
        title: string;
        subtitle: string;
        number: string;
        email: string;
        mapHint: string;
        office: {
            title: string;
            statusOpen: string;
            willOpenIn: string;
            hour: string;
            hours: string;
            hoursMany: string;
            leaveRequestBtn: string;
            address: string;
            workingHours: string;
        };
    };
}

const ASTANA_TIMEZONE = "Asia/Almaty";
const OPEN_HOUR = 8;
const CLOSE_HOUR = 20;

const astanaTimeFormatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: ASTANA_TIMEZONE,
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
});

function getOfficeState() {
    const now = new Date();
    const parts = astanaTimeFormatter.formatToParts(now);
    const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0");
    const minute = Number(parts.find((part) => part.type === "minute")?.value ?? "0");
    const currentMinutes = hour * 60 + minute;
    const openMinutes = OPEN_HOUR * 60;
    const closeMinutes = CLOSE_HOUR * 60;

    const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;
    let hoursUntilOpen = 0;

    if (!isOpen) {
        const minutesUntilOpen =
            currentMinutes < openMinutes
                ? openMinutes - currentMinutes
                : 24 * 60 - currentMinutes + openMinutes;
        hoursUntilOpen = Math.max(1, Math.ceil(minutesUntilOpen / 60));
    }

    return { isOpen, hoursUntilOpen };
}

export default function Map({ dict }: MapProps) {
    const [isActive, setIsActive] = useState(false);
    const [officeState, setOfficeState] = useState(() => getOfficeState());

    useEffect(() => {
        setOfficeState(getOfficeState());
        const timer = setInterval(() => {
            setOfficeState(getOfficeState());
        }, 60000);
        return () => clearInterval(timer);
    }, []);

    const { isOpen, hoursUntilOpen } = officeState;

    const scrollToContactForm = () => {
        const element = document.getElementById('contact-form');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    let pluralKey = "";

    if (hoursUntilOpen === 1) {
        pluralKey = dict.office.hour;
    } else if (hoursUntilOpen >= 2 && hoursUntilOpen <= 4) {
        pluralKey = dict.office.hours;
    } else {
        pluralKey = dict.office.hoursMany;
    }

    // Build the status text
    const statusText = isOpen
        ? dict.office.statusOpen
        : `${dict.office.willOpenIn} ${hoursUntilOpen} ${pluralKey}`.trim();

    return (
        <section className="mx-auto px-2 max-w-full xl:max-w-[95vw] mt-10 mb-20 relative group">
            <div
                className="relative rounded-[4rem] overflow-hidden h-[80vh] xl:h-[90vh] w-full min-h-[600px]"
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
                        <div className="absolute inset-0 bg-black/60 transition-all duration-500 pt-[140px] pb-10 px-5 sm:pt-[160px] sm:px-10 md:pt-[180px] md:px-16 lg:p-24 flex flex-col lg:flex-row justify-start items-start lg:items-center gap-6 sm:gap-8 lg:gap-26 xl:gap-50 overflow-y-auto w-full">

                            {/* Center Section: Page Header & Interaction Hint */}
                            <div className="w-full lg:w-auto lg:max-w-4xl animate-in fade-in slide-in-from-left-8 duration-1000 order-1 flex-shrink-0 lg:shrink">
                                <span className="block text-[10px] sm:text-xs md:text-sm font-condensed uppercase tracking-[0.25em] text-white/70 mb-2 sm:mb-3 md:mb-4 font-medium">
                                    {dict.subtitle}
                                </span>
                                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-usual text-white leading-tight mb-3 md:mb-4">
                                    {dict.title}
                                </h1>
                                <a
                                    href={`tel:${dict.number.replace(/\s+/g, '')}`}
                                    className="block text-lg sm:text-xl md:text-2xl font-condensed uppercase tracking-[0.25em] text-white mb-2 sm:mb-3 md:mb-4 font-semibold hover:text-white/70 transition-colors w-fit"
                                >
                                    {dict.number}
                                </a>
                                <a
                                    href={`mailto:${dict.email}`}
                                    className="block text-lg sm:text-xl md:text-2xl font-condensed uppercase tracking-[0.25em] text-white mb-5 sm:mb-6 md:mb-8 font-semibold hover:text-white/70 transition-colors w-fit"
                                >
                                    {dict.email}
                                </a>

                                <button
                                    onClick={() => setIsActive(true)}
                                    className="inline-flex items-center gap-2 sm:gap-3 md:gap-4 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 md:px-8 md:py-4 rounded-full text-white font-condensed uppercase tracking-[0.2em] text-[10px] sm:text-xs md:text-sm hover:bg-white/20 transition-all duration-300"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                                    {dict.mapHint}
                                </button>
                            </div>

                            {/* Top Section: Address Card */}
                            <div className="flex justify-start mb-0 lg:my-0 order-2 w-full lg:w-auto flex-shrink-0 lg:shrink">
                                <div className="w-full lg:w-[400px] xl:w-[448px] max-w-full lg:max-w-md bg-white/10 backdrop-blur-md border border-white/20 p-5 sm:p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] text-white animate-in fade-in slide-in-from-top-4 duration-700">
                                    <h3 className="font-condensed font-bold text-[14px] sm:text-base md:text-xl uppercase mb-2 md:mb-3 tracking-wider flex items-center gap-2 md:gap-3">
                                        <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-pulse flex-shrink-0 ${isOpen ? "bg-emerald-400" : "bg-orange-400"}`} />
                                        {dict.office.title} {statusText}
                                    </h3>
                                    <p className="font-usual text-[13px] sm:text-sm md:text-lg text-white/90 leading-relaxed mb-1 md:mb-2">
                                        {dict.office.address}
                                    </p>
                                    <p className="font-usual text-[11px] sm:text-xs md:text-sm text-white/60 mb-3 sm:mb-4">
                                        {dict.office.workingHours}
                                    </p>
                                    {!isOpen && (
                                        <div className="border-t border-white/10 pt-4 sm:pt-6 mt-2">
                                            <button
                                                onClick={scrollToContactForm}
                                                className="w-full bg-white text-black hover:bg-white/90 active:scale-[0.98] transition-all duration-300 font-condensed font-bold uppercase tracking-widest py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl shadow-xl flex items-center justify-center gap-2 sm:gap-3 group text-xs sm:text-sm"
                                            >
                                                {dict.office.leaveRequestBtn}
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    width="18"
                                                    height="18"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="translate-x-0 sm:w-5 sm:h-5"
                                                >
                                                    <path d="M12 5v14m-7-7l7 7 7-7" />
                                                </svg>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}