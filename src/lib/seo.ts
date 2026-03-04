import type { Metadata } from "next";

export const SITE_URL = "https://istock.kz";
export const SITE_NAME = "ISTOCK";
export const OG_IMAGE_URL = `${SITE_URL}/OpenGraph.png`;
export const LOGO_URL = `${SITE_URL}/logo.jpg`;

export const SUPPORTED_LOCALES = ["ru", "en", "kk"] as const;
export type SiteLocale = (typeof SUPPORTED_LOCALES)[number];

const OPEN_GRAPH_LOCALE: Record<SiteLocale, string> = {
  ru: "ru_RU",
  en: "en_US",
  kk: "kk_KZ",
};

function normalizePath(path = "") {
  if (!path) return "";
  return path.startsWith("/") ? path : `/${path}`;
}

export function buildPageMetadata({
  locale,
  path = "",
  title,
  description,
  keywords = [],
}: {
  locale: string;
  path?: string;
  title: string;
  description: string;
  keywords?: string[];
}): Metadata {
  const safeLocale = SUPPORTED_LOCALES.includes(locale as SiteLocale)
    ? (locale as SiteLocale)
    : "ru";

  const normalizedPath = normalizePath(path);
  const canonical = `${SITE_URL}/${safeLocale}${normalizedPath}`;

  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((code) => [code, `${SITE_URL}/${code}${normalizedPath}`])
  );

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url: canonical,
      locale: OPEN_GRAPH_LOCALE[safeLocale],
      title,
      description,
      images: [
        {
          url: OG_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} Open Graph`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE_URL],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: [{ url: LOGO_URL, type: "image/jpeg" }],
      shortcut: [LOGO_URL],
      apple: [LOGO_URL],
    },
    manifest: `${SITE_URL}/manifest.webmanifest`,
  };
}
