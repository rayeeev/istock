import GhostBlock from "@/components/ui/GhostBlock";

export default function LocaleLoading() {
  return (
    <main className="pb-20">
      <section className="h-[95vh] px-4 md:px-8 lg:px-12 pt-24">
        <GhostBlock className="h-full w-full rounded-[3rem]" />
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-12">
        <div className="lg:px-24 space-y-5 mb-10">
          <GhostBlock className="h-4 w-40 rounded-full" />
          <GhostBlock className="h-10 max-w-3xl rounded-2xl" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1600px] mx-auto">
          {Array.from({ length: 6 }).map((_, index) => (
            <GhostBlock key={index} className="h-72 rounded-[3rem]" />
          ))}
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 lg:px-12">
        <div className="lg:px-24 space-y-5 mb-12">
          <GhostBlock className="h-4 w-28 rounded-full" />
          <GhostBlock className="h-10 max-w-2xl rounded-2xl" />
        </div>
        <div className="flex gap-8 overflow-hidden">
          {Array.from({ length: 5 }).map((_, index) => (
            <GhostBlock key={index} className="h-28 min-w-48 rounded-3xl" />
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-12">
        <GhostBlock className="h-56 w-full rounded-[3rem]" />
      </section>
    </main>
  );
}
