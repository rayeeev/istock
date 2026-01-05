import Image from "next/image";
import CTAButton from "../ui/CTAButton";

interface DioxelProps {
    dict: any;
    src: any;
    alt: string;
    locale: string;
}

export default function Dioxel({ dict, src, alt, locale }: DioxelProps) {
    return (
        <section id="Dioxel" style={{ scrollMarginTop: '50px' }} className={`py-20 px-4 md:px-8 lg:px-24 bg-[var(--background)]`}>
            <div className="mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-20">
                <div className="w-full md:w-2/3">
                    <span className="block text-sm font-barlow uppercase tracking-[0.1em] text-gray-500 mb-4 md:mb-6 font-medium">
                        {dict.title}
                    </span>
                    <h2 className="text-xl lg:text-2xl leading-tight font-pt-sans text-[var(--foreground)] whitespace-pre-line mb-12 md:mb-16">
                        {dict.content}
                    </h2>
                    <CTAButton dict={dict.cta} locale={locale} />
                </div>
                <div className="w-full md:w-1/3">
                    <div className="relative aspect-[4/3] md:aspect-[9/16] lg:aspect-[9/10] overflow-hidden rounded-[4rem] shadow-sm">
                        <Image
                            src={src}
                            alt={alt}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}