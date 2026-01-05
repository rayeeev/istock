import Image from "next/image";

interface HeroProps {
    dict: any;
    src: any;
    alt: string;
}

export default function Hero({ src, dict, alt }: HeroProps) {
    return (
        <div className="mx-auto px-2 max-w-full xl:max-w-[95vw] mt-10">
            <div className="relative rounded-[4rem] overflow-hidden h-[80vh] xl:h-[90vh] w-full">
                {/* Background Image using Photo component logic or direct Image for control */}
                <div className="absolute inset-0">
                    <Image
                        src={src}
                        alt={alt}
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
                <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/80 via-black/40 to-transparent opacity-90" />

                {/* Content */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center">
                    <div className="max-w-4xl">
                        {/* Breadcrumb / Label */}
                        <div className="flex items-center gap-3 mb-4 text-white/80">
                            <span className="font-barlow font-bold uppercase tracking-[0.15em] text-sm">
                                {dict.label}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-pt-sans text-white leading-tight mb-4">
                            {dict.title}
                        </h1>
                        <p className="text-xl md:text-2xl font-pt-sans text-white/90 max-w-2xl leading-relaxed">
                            {dict.subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}