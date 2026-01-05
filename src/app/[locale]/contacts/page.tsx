import Map from '@/components/SecondLevel/Map';
import ContactGrid from '@/components/SecondLevel/ContactGrid';
import ContactUs from '@/components/ContactUs';
import { getDictionary } from '@/data/dictionaries';

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

            <ContactUs dict={dict.ContactUs.contacts} locale={locale} />
        </main>
    );
}