import Image from "next/image";

interface ImageTextProps {
    dict: any;
    src: any;
    alt: string;
}

export default function ImageText({ dict, src, alt }: ImageTextProps) {
    return (
        <section id="ImageText" style={{ scrollMarginTop: '50px' }} className="py-20 px-4 md:px-8 lg:px-24 bg-white">
            <div className="mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-20">
                <div className="w-full md:w-1/2">
                    <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/3] overflow-hidden rounded-[4rem] shadow-sm">
                        <Image
                            src={src}
                            alt={alt}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <span className="block text-sm font-barlow uppercase tracking-[0.1em] text-gray-500 mb-4 md:mb-6 font-medium">
                        {dict.title}
                    </span>
                    <h2 className="text-2xl lg:text-3xl leading-tight font-pt-sans text-[var(--foreground)]">
                        {dict.content}
                    </h2>
                </div>
            </div>
        </section>
    )
}