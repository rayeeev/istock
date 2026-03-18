import type { Metadata } from "next";
import { PT_Sans, Fira_Sans } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HashScroll from "@/components/HashScroll";
import { getDictionary } from "@/data/dictionaries";
import { buildPageMetadata, LOGO_URL, SITE_NAME, SITE_URL } from "@/lib/seo";

const usualFont = Fira_Sans({
  variable: "--font-usual",
  subsets: ["latin", "cyrillic"],
  weight: ["500"],
  display: "swap",
});

const condensedFont = PT_Sans({
  variable: "--font-condensed",
  subsets: ["latin", "cyrillic"],
  weight: ["700"],
  display: "swap",
});

const baseKeywords = [
  "industrial water treatment",
  "water purification",
  "chemical reagents",
  "chlorine dioxide",
  "DIOXEL",
  "Kazakhstan",
  "ISTOCK",
];

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
      "Industrial water treatment chemicals, equipment, and engineering solutions by ISTOCK.",
    keywords: baseKeywords,
  });
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const organizationSchema = {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    email: "istock@istock.kz",
    telephone: "+7 (7172) 251-575",
    address: {
      "@type": "PostalAddress",
      streetAddress: "17 Kuishi Dina Str",
      addressLocality: "Astana",
      addressCountry: "KZ",
    },
  };

  const websiteSchema = {
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ["ru", "en", "kk"],
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, websiteSchema],
  };

  return (
    <html lang={locale}>
      <body
        className={`${usualFont.variable} ${condensedFont.variable} antialiased min-h-screen relative flex flex-col font-usual`}
      >
        <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none z-50">
          <Header dict={dict} lang={locale} />
        </div>

        <HashScroll />
        <main className="flex-grow">{children}</main>

        <Footer dict={dict} lang={locale} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}
