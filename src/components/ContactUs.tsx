'use client';

import Link from "next/link";
import Image from "next/image";
import about from "../../public/about.jpeg";
import ArrowButton from "./ui/ArrowButton";

interface ContactUsProps {
    dict: any;
    locale: string;
}

export default function ContactUs({ dict, locale }: ContactUsProps) {
    const handleClick = () => {
        if (typeof window !== "undefined" && (window.location.pathname === `/${locale}/contacts` || window.location.pathname === `/${locale}/contacts/`)) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <section className="relative w-full overflow-hidden h-[165px] md:h-[220px] group cursor-pointer">
            <Link
                href={`/${locale}/contacts#contact-form`}
                onClick={handleClick}
                className="block w-full h-full"
            >
                <Image
                    src={about}
                    alt="Our production facility"
                    fill
                    sizes="100vw"
                    quality={72}
                    placeholder="blur"
                    className="object-cover object-center"
                />

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/60" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4">
                    <h2 className="text-3xl lg:text-4xl mb-6 font-normal tracking-wide text-center drop-shadow-lg">
                        {dict.title}
                    </h2>

                    <div className="flex items-center space-x-3 text-lg lg:text-xl group-hover:text-gray-200 transition-colors drop-shadow-md">
                        <span className="">
                            <ArrowButton diameter={32} />
                        </span>
                        <span>{dict.linkText}</span>
                    </div>
                </div>
            </Link>
        </section>
    )
}
