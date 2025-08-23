import type { Metadata } from "next";
import Button from "../../components/Button";
import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/i18n/config";
import { use } from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.locale);
  
  return {
    title: dict.dancingmindfulness.title,
    description: dict.dancingmindfulness.description,
  };
}

export default function DancingMindfulness({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const resolvedParams = use(params);
  const dict = use(getDictionary(resolvedParams.locale));
  return (
    <>
      <section className="bg-gradient-to-br from-accent-purple/20 via-background to-primary-light py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-primary-dark drop-shadow">{dict.dancingmindfulness.hero_title}</h1>
        <p className="text-lg mb-8 text-primary-dark/80 max-w-2xl mx-auto">{dict.dancingmindfulness.hero_subtitle}</p>
        <Button href="/contact" variant="primary" className="text-lg px-8 py-3">{dict.common.book_now}</Button>
      </section>
      <section className="bg-background py-12 px-4">
        <div className="max-w-3xl mx-auto rounded-2xl shadow-lg bg-white/90 p-8 border border-accent-purple/10">
          <ul className="list-disc ml-6 mb-6 text-left text-primary-dark/90">
            <li>Body expression and inner freedom</li>
            <li>Mind-body connection</li>
            <li>Joy and lightness in every step</li>
          </ul>
        </div>
      </section>
    </>
  );
}
