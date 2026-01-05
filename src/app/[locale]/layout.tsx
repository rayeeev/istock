import type { Metadata } from "next";
import { PT_Sans, Barlow_Condensed } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/data/dictionaries";

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
        className={`${ptSans.variable} ${barlowCondensed.variable} antialiased min-h-screen relative flex flex-col font-pt-sans`}
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
