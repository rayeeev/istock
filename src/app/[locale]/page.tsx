import type { Metadata } from "next";
import Images from "@/components/Images";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Companies from "@/components/Companies";
import ContactUs from "@/components/ContactUs";
import { getDictionary } from "@/data/dictionaries";
import { buildPageMetadata, SITE_NAME } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return buildPageMetadata({
    locale,
    title: `${SITE_NAME} | ${dict.Hero?.label ?? "Industrial Water Treatment"}`,
    description:
      dict.Hero?.headline ??
      "Industrial water treatment chemicals, engineering support, and equipment by ISTOCK.",
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main>
      <Images dict={dict.Images} locale={locale} />

      <Hero dict={dict.Hero} locale={locale} />

      <Services dict={dict.Services} locale={locale} />

      <Companies dict={dict.Companies} />

      <ContactUs dict={dict.ContactUs.main} locale={locale} />
    </main>
  );
}
