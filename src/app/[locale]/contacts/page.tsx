import type { Metadata } from "next";
import Map from '@/components/SecondLevel/Map';
import ContactGrid from '@/components/SecondLevel/ContactGrid';
import ContactForm from '@/components/SecondLevel/ContactForm';
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
        path: "/contacts",
        title: `${SITE_NAME} | ${dict.ContactsPage?.title ?? "Contacts"}`,
        description:
            dict.ContactsPage?.subtitle ??
            "Contact ISTOCK offices in Astana for industrial water treatment solutions.",
    });
}

export default async function Contacts({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    return (
        <main className="min-h-screen">
            <Map dict={dict.ContactsPage} />

            <ContactGrid dict={dict.ContactsPage} />

            <ContactForm dict={dict.ContactsPage} />
        </main>
    );
}
