import GhostBlock from "@/components/ui/GhostBlock";

export default function ProjectsLoading() {
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

            {/* Solutions Section */}
            <section className="py-20 px-4 md:px-8 lg:px-12 bg-white">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-start">
                    {/* Cards Grid */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 order-2 lg:order-1">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <GhostBlock key={index} className="h-[300px] rounded-[3rem]" />
                        ))}
                    </div>
                    {/* Right Side Content */}
                    <div className="lg:col-span-5 order-1 lg:order-2 space-y-8">
                        <div className="space-y-6">
                            <GhostBlock className="h-4 w-32 rounded-full" />
                            <GhostBlock className="h-12 w-full rounded-2xl" />
                            <GhostBlock className="h-24 w-full rounded-2xl" />
                        </div>
                        <GhostBlock className="h-14 w-48 rounded-full" />
                    </div>
                </div>
            </section>

            {/* Companies Section */}
            <section className="py-20 px-4 md:px-8 lg:px-12">
                <div className="lg:px-24 space-y-4 mb-12">
                    <GhostBlock className="h-4 w-28 rounded-full" />
                    <GhostBlock className="h-10 max-w-2xl rounded-2xl" />
                </div>
                <div className="flex gap-8 overflow-hidden">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <GhostBlock key={index} className="h-32 min-w-[200px] rounded-3xl" />
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section className="px-4 md:px-8 lg:px-12 py-10">
                <GhostBlock className="h-[600px] w-full rounded-[4rem]" />
            </section>
        </main>
    );
}
