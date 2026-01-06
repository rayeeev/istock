import type { Metadata } from "next";
import { PT_Sans, Oswald } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/data/dictionaries";

const usualFont = PT_Sans({
  variable: "--font-usual",
  subsets: ["latin", "cyrillic"],
  weight: ["700"],
  display: "swap",
});

const condensedFont = Oswald({
  variable: "--font-condensed",
  subsets: ["latin", "cyrillic"],
  weight: ["500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ISTOCK",
  description: "Company Website",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body
        className={`${usualFont.variable} ${condensedFont.variable} antialiased min-h-screen relative flex flex-col font-usual`}
      >
        <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none z-50">
          <Header dict={dict} lang={locale} />
        </div>

        <main className="flex-grow">{children}</main>

        <Footer dict={dict} lang={locale} />
      </body>
    </html>
  );
}
