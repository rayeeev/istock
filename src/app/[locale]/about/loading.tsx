import GhostBlock from "@/components/ui/GhostBlock";

export default function AboutLoading() {
    return (
        <main className="min-h-screen pb-20">
            {/* Hero Section - Matches SecondLevel/Hero.tsx */}
            <section className="mx-auto px-2 max-w-full xl:max-w-[95vw] mt-10">
                <div className="relative rounded-[4rem] overflow-hidden h-[80vh] xl:h-[90vh] w-full">
                    <GhostBlock className="h-full w-full" />
                    <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center bg-black/10">
                        <div className="max-w-4xl space-y-6">
                            <GhostBlock className="h-4 w-32 rounded-full opacity-30" />
                            <GhostBlock className="h-16 max-w-2xl rounded-2xl opacity-30" />
                            <GhostBlock className="h-8 max-w-xl rounded-xl opacity-20" />
                        </div>
                    </div>
                </div>
            </section>

            {/* TextHero Section */}
            <section className="py-16 px-4 md:px-8 lg:px-12">
                <div className="max-w-5xl lg:px-24 space-y-4">
                    <GhostBlock className="h-4 w-28 rounded-full" />
                    <GhostBlock className="h-20 max-w-3xl rounded-2xl" />
                </div>
            </section>

            {/* ImageText Section */}
            <section className="py-20 px-4 md:px-8 lg:px-24 bg-white">
                <div className="mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-20">
                    <div className="w-full md:w-1/2">
                        <GhostBlock className="aspect-[4/3] md:aspect-square lg:aspect-[4/3] w-full rounded-[4rem]" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <GhostBlock className="h-4 w-32 rounded-full" />
                        <GhostBlock className="h-24 w-full rounded-2xl" />
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="px-4 md:px-8 lg:px-12 py-10">
                <GhostBlock className="h-[600px] w-full rounded-[4rem]" />
            </section>
        </main>
    );
}
