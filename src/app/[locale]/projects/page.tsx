import type { Metadata } from "next";
import Hero from '@/components/SecondLevel/Hero';
import TextHero from '@/components/SecondLevel/TextHero';
import Solutions from '@/components/SecondLevel/Solutions';
import Companies from '@/components/Companies';
import projects from '../../../../public/projects.jpeg';
import ContactUs from '@/components/ContactUs';
import { getDictionary } from '@/data/dictionaries';
import { buildPageMetadata, SITE_NAME } from '@/lib/seo';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    return buildPageMetadata({
        locale,
        path: "/projects",
        title: `${SITE_NAME} | ${dict.ProjectsPage?.hero?.title ?? "Projects"}`,
        description:
            dict.ProjectsPage?.hero?.subtitle ??
            "View ISTOCK projects, industrial partnerships, and engineering case studies.",
    });
}


export default async function Projects({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    return (
        <main className="min-h-screen">
            <Hero dict={dict.ProjectsPage.hero} src={projects} alt="Reverse Osmosis (RO) System" />

            <TextHero dict={dict.ProjectsPage.TextHero} />

            <Solutions dict={dict.ProjectsPage.Solutions} locale={locale} />

            <Companies dict={dict.ProjectsPage.Companies} />

            <ContactUs dict={dict.ContactUs.projects} locale={locale} />
        </main>
    );
}
