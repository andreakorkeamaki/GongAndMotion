import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import Header from "../components/Header";
import Footer from "../components/Footer";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.locale);
  
  return {
    metadataBase: new URL("https://www.gongandmotion.com"),
    title: dict.home.title,
    description: dict.home.description,
    alternates: {
      canonical: `/${resolvedParams.locale}`,
      languages: {
        en: "/en",
        sv: "/sv",
      },
    },
    openGraph: {
      title: dict.home.title,
      description: dict.home.description,
      url: `/${resolvedParams.locale}`,
      siteName: "Gong & Motion",
      type: "website",
      images: [
        {
          url: "/header-bg.jpg",
          width: 1200,
          height: 630,
          alt: "Gong & Motion",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.home.title,
      description: dict.home.description,
      images: ["/header-bg.jpg"],
    },
  };
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
