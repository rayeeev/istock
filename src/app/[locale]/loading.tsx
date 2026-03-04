import GhostBlock from "@/components/ui/GhostBlock";

export default function LocaleLoading() {
  return (
    <main className="pb-20">
      {/* Hero Section - Matches Images.tsx */}
      <section className="h-[100vh] w-full relative">
        <GhostBlock className="h-full w-full" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 lg:px-32 z-10 pt-20">
          <div className="max-w-5xl space-y-6">
            <GhostBlock className="h-4 w-32 rounded-full opacity-30" />
            <GhostBlock className="h-16 max-w-2xl rounded-2xl opacity-30" />
            <div className="flex items-center gap-6">
              <GhostBlock className="h-6 w-32 rounded-full opacity-30" />
              <GhostBlock className="h-14 w-14 rounded-full opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section - Matches Hero.tsx cards */}
      <section className="py-20 px-4 md:px-8 lg:px-12">
        <div className="mb-12 lg:px-24 space-y-4">
          <GhostBlock className="h-4 w-32 rounded-full" />
          <GhostBlock className="h-10 max-w-lg rounded-2xl" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[1600px] mx-auto">
          {Array.from({ length: 4 }).map((_, index) => (
            <GhostBlock key={index} className="h-[450px] md:h-[500px] rounded-[3rem]" />
          ))}
        </div>
      </section>

      {/* Services Section - Matches Services.tsx grid */}
      <section className="py-20 px-4 md:px-8 lg:px-12 bg-gray-50/50">
        <div className="mb-12 lg:px-24 space-y-4">
          <GhostBlock className="h-4 w-28 rounded-full" />
          <GhostBlock className="h-10 max-w-xl rounded-2xl" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1600px] mx-auto">
          {Array.from({ length: 6 }).map((_, index) => (
            <GhostBlock key={index} className="h-[400px] rounded-[3rem]" />
          ))}
        </div>
      </section>

      {/* Companies Section - Matches Companies.tsx */}
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

      {/* Contact Section - Matches ContactUs.tsx */}
      <section className="px-4 md:px-8 lg:px-12 py-10">
        <GhostBlock className="h-[600px] w-full rounded-[4rem]" />
      </section>
    </main>
  );
}
