import CTAButton from "../ui/CTAButton";

interface Card {
    title: string;
    description: string;
}

interface SolutionsDict {
    label: string;
    title: string;
    content: string;
    cta: string;
    cards: Card[];
}

interface SolutionsProps {
    dict: SolutionsDict;
    locale?: string;
}

export default function Solutions({ dict, locale = 'en' }: SolutionsProps) {
    return (
        <section id="Solutions" style={{ scrollMarginTop: '50px' }} className="py-20 px-4 md:px-8 lg:px-12 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-start">

                    {/* Left Side - Cards Grid */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 order-2 lg:order-1">
                        {dict.cards.map((card, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col h-full bg-[var(--background)] rounded-[3rem] p-8 md:p-10 transition-all duration-500 shadow-lg hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-3"
                            >
                                <div>
                                    <h3 className="text-2xl lg:text-3xl font-barlow leading-tracking-[0.15em] text-[var(--foreground)] mb-4">
                                        {card.title}
                                    </h3>
                                    <p className="font-pt-sans text-gray-600 leading-relaxed text-sm md:text-base">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Content */}
                    <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-32 space-y-8">
                        <div>
                            <span className="block text-sm font-barlow uppercase tracking-[0.15em] text-gray-500 mb-4 md:mb-6 font-medium">
                                {dict.label}
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] leading-tight font-pt-sans max-w-2xl text-[var(--foreground)] mb-8">
                                {dict.title}
                            </h2>
                            <p className="font-pt-sans text-lg text-gray-600 leading-relaxed max-w-xl">
                                {dict.content}
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="flex justify-start">
                            <CTAButton dict={dict.cta} locale={locale} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}