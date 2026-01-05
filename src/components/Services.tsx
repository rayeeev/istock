import CTAButton from "./ui/CTAButton";
import {
    Briefcase,
    BarChart3,
    Settings,
    Users,
    Globe,
    Shield,
    Check
} from "lucide-react";

interface ServiceItem {
    title: string;
    list: string[];
}

interface ServicesDict {
    subtitle: string;
    title: string;
    cta: string;
    items: ServiceItem[];
}

interface ServicesProps {
    locale: string;
    dict: ServicesDict;
}

const ICONS = [Briefcase, BarChart3, Settings, Users, Globe, Shield];

export default function Services({ dict, locale }: ServicesProps) {
    return (
        <section id="Services" style={{ scrollMarginTop: '50px' }} className="bg-white py-16 px-4 md:px-8 lg:px-12">
            <div className="mb-12 lg:px-24">
                <span className="block text-sm font-barlow uppercase tracking-[0.15em] text-gray-500 mb-4">
                    {dict.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] leading-tight font-pt-sans max-w-2xl text-[var(--foreground)]">
                    {dict.title}
                </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1600px] mx-auto mb-20">
                {dict.items.map((service, index) => {
                    const Icon = ICONS[index % ICONS.length];

                    return (
                        <div
                            key={index}
                            className="group relative flex flex-col h-full bg-[var(--background)] rounded-[3rem] p-8 md:p-10 transition-all duration-500 shadow-lg hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-3"
                        >
                            {/* Sticker */}
                            <div className="absolute top-8 right-8 w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center transform rotate-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 z-10">
                                <Icon className="w-7 h-7 text-[var(--foreground)] group-hover:text-[var(--blue)] transition-colors duration-500" strokeWidth={1.5} />
                            </div>

                            {/* Service Content */}
                            <div className="relative z-0">
                                <h3 className="text-2xl font-bold font-pt-sans mb-6 pr-16 text-[var(--foreground)] group-hover:text-[var(--blue)] transition-colors duration-500 leading-tight">
                                    {service.title}
                                </h3>

                                <div className="w-12 h-[2px] bg-[var(--foreground)] mb-8 group-hover:bg-[var(--blue)] transition-colors duration-500" />

                                <ul className="space-y-4">
                                    {service.list.map((item, i) => (
                                        <li key={i} className="flex items-start text-base text-gray-600 leading-relaxed font-medium">
                                            <span className="mr-3 mt-1.5 flex-shrink-0 text-[var(--blue)]">
                                                <Check size={16} strokeWidth={3} />
                                            </span>
                                            <span className="whitespace-pre-line">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
                <CTAButton dict={dict.cta} locale={locale} />
            </div>
        </section>
    );
}
