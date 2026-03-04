import GhostBlock from "@/components/ui/GhostBlock";

export default function ContactsLoading() {
    return (
        <main className="min-h-screen pb-20">
            {/* Map Section - Matches SecondLevel/Map.tsx */}
            <section className="mx-auto px-2 max-w-full xl:max-w-[95vw] mt-10 mb-20 relative">
                <div className="relative rounded-[4rem] overflow-hidden h-[80vh] xl:h-[90vh] w-full">
                    <GhostBlock className="h-full w-full" />
                    <div className="absolute inset-x-0 inset-y-0 bg-black/40 p-6 md:p-16 lg:p-24 flex flex-col lg:flex-row justify-center lg:justify-start items-start lg:items-center gap-8 lg:gap-[30px]">
                        {/* Center Section Content */}
                        <div className="w-full lg:max-w-4xl space-y-6 order-2 lg:order-1">
                            <GhostBlock className="h-4 w-32 rounded-full opacity-30" />
                            <GhostBlock className="h-24 md:h-32 max-w-2xl rounded-2xl opacity-30" />
                            <GhostBlock className="h-8 max-w-lg rounded-xl opacity-20" />
                            <GhostBlock className="h-8 max-w-md rounded-xl opacity-20" />
                            <GhostBlock className="h-14 w-48 rounded-full opacity-20" />
                        </div>
                        {/* Address Card */}
                        <div className="order-1 lg:order-2 w-full lg:max-w-md lg:mb-40">
                            <GhostBlock className="h-40 w-full rounded-[2.5rem] opacity-20" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ContactGrid Section */}
            <section className="py-16 px-4 md:px-8 lg:px-12 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <GhostBlock key={index} className="h-72 rounded-[3rem]" />
                        ))}
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
