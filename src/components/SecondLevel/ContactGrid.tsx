import { Mail, User, Building2, ArrowUpRight } from "lucide-react";

interface Company {
    title: string;
    name: string;
    email: string;
}

interface ContactGridProps {
    dict: {
        info: Record<string, Company>;
    };
}

export default function ContactGrid({ dict }: ContactGridProps) {
    return (
        <section className="py-16 px-4 md:px-8 lg:px-12 bg-white">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {Object.values(dict.info).map((company: Company, index: number) => (
                        <div
                            key={index}
                            className="group relative bg-[var(--background)] rounded-[3rem] p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-transparent hover:border-[var(--blue)]/10"
                        >
                            {/* Decorative Icon Background */}
                            <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <Building2 className="w-6 h-6 text-[var(--blue)]" strokeWidth={1.5} />
                            </div>

                            <div className="relative z-10">
                                <h3 className="font-barlow font-bold text-2xl mb-6 text-[var(--foreground)] pr-16 tracking-wide">
                                    {company.title}
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm text-[var(--blue)]">
                                            <User size={20} strokeWidth={1.5} />
                                        </div>
                                        <div className="pt-2">
                                            <p className="font-pt-sans text-lg text-gray-600 font-medium">
                                                {company.name}
                                            </p>
                                        </div>
                                    </div>

                                    <a
                                        href={`mailto:${company.email}`}
                                        className="flex items-center space-x-4 group/link"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-[var(--blue)] text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover/link:scale-110 transition-transform duration-300">
                                            <Mail size={18} strokeWidth={2} />
                                        </div>
                                        <div className="pt-1">
                                            <span className="font-pt-sans text-lg text-[var(--foreground)] group-hover/link:text-[var(--blue)] transition-colors duration-300 flex items-center gap-2">
                                                {company.email}
                                                <ArrowUpRight size={16} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
