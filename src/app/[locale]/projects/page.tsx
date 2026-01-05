import Hero from '@/components/SecondLevel/Hero';
import TextHero from '@/components/SecondLevel/TextHero';
import Solutions from '@/components/SecondLevel/Solutions';
import Companies from '@/components/Companies';
import projects from '../../../../public/projects.jpg';
import ContactUs from '@/components/ContactUs';
import { getDictionary } from '@/data/dictionaries';


export default async function Projects({ params }: { params: { locale: string } }) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    return (
        <main className="min-h-screen">
            <Hero dict={dict.ProjectsPage.hero} src={projects} alt="Our production facility" />

            <TextHero dict={dict.ProjectsPage.TextHero} />

            <Solutions dict={dict.ProjectsPage.Solutions} locale={locale} />

            <Companies dict={dict.ProjectsPage.Companies} />

            <ContactUs dict={dict.ContactUs.projects} locale={locale} />
        </main>
    );
}