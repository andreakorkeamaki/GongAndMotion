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
    title: dict.qigong.title,
    description: dict.qigong.description,
  };
}

export default function Qigong({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const resolvedParams = use(params);
  const dict = use(getDictionary(resolvedParams.locale));
  return (
    <>
      <section className="bg-gradient-to-br from-primary-light via-accent-purple/20 to-background py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-primary-dark drop-shadow">{dict.qigong.hero_title}</h1>
        <p className="text-lg mb-8 text-primary-dark/80 max-w-2xl mx-auto">{dict.qigong.hero_subtitle}</p>
        <Button href="/contact" variant="primary" className="text-lg px-8 py-3">{dict.common.sign_up_now}</Button>
      </section>
      <section className="bg-background py-12 px-4">
        <div className="max-w-3xl mx-auto rounded-2xl shadow-lg bg-white/90 p-8 border border-accent-purple/10">
          <ul className="list-disc ml-6 mb-6 text-left text-primary-dark/90">
            <li>{dict.qigong.benefits.self_healing}</li>
            <li>{dict.qigong.benefits.immune_system}</li>
            <li>{dict.qigong.benefits.emotional_harmony}</li>
            <li>{dict.qigong.benefits.spiritual_growth}</li>
          </ul>
          <p className="mb-2 text-primary-dark/80">{dict.qigong.next_workshop} <span className="font-semibold text-accent-purple">{dict.qigong.workshop_date}</span></p>
        </div>
      </section>
      {/* FAQ SECTION */}
      <section className="py-16 bg-gradient-to-b from-green-50 via-background to-accent-purple/10">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-heading font-bold mb-8 text-primary-dark text-center">{dict.common.frequently_asked_questions}</h2>
          <div className="space-y-6">
            <div className="bg-white/90 rounded-xl shadow p-6 border border-accent-purple/10">
              <h3 className="font-semibold text-primary-dark mb-2">{dict.qigong.faq.what_is_qigong.question}</h3>
              <p className="text-primary-dark/80">{dict.qigong.faq.what_is_qigong.answer}</p>
            </div>
            <div className="bg-white/90 rounded-xl shadow p-6 border border-accent-purple/10">
              <h3 className="font-semibold text-primary-dark mb-2">{dict.qigong.faq.experience_needed.question}</h3>
              <p className="text-primary-dark/80">{dict.qigong.faq.experience_needed.answer}</p>
            </div>
            <div className="bg-white/90 rounded-xl shadow p-6 border border-accent-purple/10">
              <h3 className="font-semibold text-primary-dark mb-2">{dict.qigong.faq.what_to_bring.question}</h3>
              <p className="text-primary-dark/80">{dict.qigong.faq.what_to_bring.answer}</p>
            </div>
            <div className="bg-white/90 rounded-xl shadow p-6 border border-accent-purple/10">
              <h3 className="font-semibold text-primary-dark mb-2">{dict.qigong.faq.stress_anxiety.question}</h3>
              <p className="text-primary-dark/80">{dict.qigong.faq.stress_anxiety.answer}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
