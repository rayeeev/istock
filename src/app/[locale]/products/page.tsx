import type { Metadata } from "next";
import products from '../../../../public/products.jpg';
import dioxel from '../../../../public/dioxel.jpg';
import Hero from '@/components/SecondLevel/Hero';
import TextHero from '@/components/SecondLevel/TextHero';
import ProductGrid from '@/components/SecondLevel/ProductGrid';
import Dioxel from '@/components/SecondLevel/Dioxel';
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
        path: "/products",
        title: `${SITE_NAME} | ${dict.ProductsPage?.hero?.title ?? "Products"}`,
        description:
            dict.ProductsPage?.hero?.subtitle ??
            "Explore ISTOCK industrial chemical products and treatment reagents.",
    });
}

export default async function Products({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    return (
        <main className="min-h-screen">
            <Hero dict={dict.ProductsPage.hero} src={products} alt="Our production facility" />

            <TextHero dict={dict.ProductsPage.TextHero} />

            <ProductGrid dict={dict.ProductsPage.ProductGrid} locale={locale} />

            <Dioxel dict={dict.ProductsPage.ImageText} src={dioxel} alt="DIOXEL®" locale={locale} />

            <ContactUs dict={dict.ContactUs.products} locale={locale} />
        </main>
    );
}
