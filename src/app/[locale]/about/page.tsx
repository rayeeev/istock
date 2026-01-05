import cleaning from "../../../../public/cleaning.jpg";
import about from "../../../../public/about.jpg";
import Hero from "@/components/SecondLevel/Hero";
import TextHero from "@/components/SecondLevel/TextHero";
import ImageText from "@/components/SecondLevel/ImageText";
import ContactUs from "@/components/ContactUs";
import { getDictionary } from "@/data/dictionaries";

export default async function About({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    return (
        <main className="min-h-screen">
            <Hero dict={dict.AboutPage.hero} src={cleaning} alt="Cleaning facility" />

            <TextHero dict={dict.AboutPage.TextHero} />

            <ImageText dict={dict.AboutPage.ImageText} src={about} alt="Our production facility" />

            <ContactUs dict={dict.ContactUs.about} locale={locale} />
        </main >
    );
}