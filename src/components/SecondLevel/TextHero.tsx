interface HeroProps {
    dict: any;

}

export default function TextHero({ dict }: HeroProps) {
    return (
        <section className="py-16 px-4 md:px-8 lg:px-12">
            <div className="max-w-5xl lg:px-24">
                <span className="block text-sm font-barlow uppercase tracking-[0.15em] text-gray-500 mb-4 md:mb-6 font-medium">
                    {dict.title}
                </span>
                <h2 className="text-2xl lg:text-3xl leading-tight font-pt-sans text-[var(--foreground)]">
                    {dict.content}
                </h2>
            </div>
        </section>
    )
}