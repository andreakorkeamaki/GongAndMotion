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
    title: dict.gongbath.title,
    description: dict.gongbath.description,
  };
}

export default function GongBath({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const resolvedParams = use(params);
  const dict = use(getDictionary(resolvedParams.locale));
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden text-center bg-gradient-to-br from-primary-light via-background to-accent-purple/30 min-h-[50vh]">
        <img
          src="/gongbath-servizio.webp"
          alt="Gong Bath Sound Healing"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 py-20 sm:py-24 px-4 flex items-center justify-center min-h-[50vh]">
          <div className="bg-white/80 rounded-2xl shadow-lg inline-block px-6 sm:px-8 py-6 sm:py-8">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 text-primary-dark drop-shadow">{dict.gongbath.hero_title}</h1>
            <p className="text-lg mb-8 text-primary-dark/80 max-w-2xl mx-auto">{dict.gongbath.hero_subtitle}</p>
            <Button href="#book" variant="primary" className="text-lg px-8 py-3">{dict.gongbath.hero_cta}</Button>
          </div>
        </div>
      </section>

      {/* What is a Gong Bath Section */}
      <section className="py-16 bg-background px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 text-primary-dark text-center">{dict.gongbath.what_is_title}</h2>
          <div className="prose prose-lg max-w-none text-primary-dark/80 leading-relaxed mb-12" dangerouslySetInnerHTML={{ __html: dict.gongbath.what_is_content }} />
        </div>
      </section>

      {/* Benefits Overview Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-light/20 to-accent-purple/10 rounded-2xl shadow-lg p-8 border border-accent-purple/10">
            <h3 className="text-2xl font-semibold mb-6 text-primary-dark text-center">{dict.gongbath.designed_for_title}</h3>
            <ul className="grid md:grid-cols-2 gap-4 mb-6 max-w-3xl mx-auto">
              <li className="flex items-center justify-center text-center">
                <div className="flex items-start">
                  <span className="text-accent-purple mr-3 flex-shrink-0">•</span>
                  <span className="text-primary-dark/80">{dict.gongbath.benefits.stress_release}</span>
                </div>
              </li>
              <li className="flex items-center justify-center text-center">
                <div className="flex items-start">
                  <span className="text-accent-purple mr-3 flex-shrink-0">•</span>
                  <span className="text-primary-dark/80">{dict.gongbath.benefits.deep_rest}</span>
                </div>
              </li>
              <li className="flex items-center justify-center text-center">
                <div className="flex items-start">
                  <span className="text-accent-purple mr-3 flex-shrink-0">•</span>
                  <span className="text-primary-dark/80">{dict.gongbath.benefits.clear_blockages}</span>
                </div>
              </li>
              <li className="flex items-center justify-center text-center">
                <div className="flex items-start">
                  <span className="text-accent-purple mr-3 flex-shrink-0">•</span>
                  <span className="text-primary-dark/80">{dict.gongbath.benefits.meditation_support}</span>
                </div>
              </li>
            </ul>
            <p className="text-primary-dark/80 italic text-center">{dict.gongbath.unique_note}</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 text-primary-dark text-center">{dict.gongbath.benefits_title}</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-primary-light/20 to-accent-purple/10 rounded-xl p-6 border border-accent-purple/10">
              <div className="flex items-start">
                <span className="text-accent-purple mr-3 flex-shrink-0">•</span>
                <h3 className="font-semibold text-primary-dark">{dict.gongbath.main_benefits.deep_relaxation}</h3>
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent-purple/10 to-primary-light/20 rounded-xl p-6 border border-accent-purple/10">
              <div className="flex items-start">
                <span className="text-accent-purple mr-3 flex-shrink-0">•</span>
                <h3 className="font-semibold text-primary-dark">{dict.gongbath.main_benefits.anxiety_relief}</h3>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-light/20 to-accent-purple/10 rounded-xl p-6 border border-accent-purple/10">
              <div className="flex items-start">
                <span className="text-accent-purple mr-3 flex-shrink-0">•</span>
                <h3 className="font-semibold text-primary-dark">{dict.gongbath.main_benefits.healing_stimulation}</h3>
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent-purple/10 to-primary-light/20 rounded-xl p-6 border border-accent-purple/10">
              <div className="flex items-start">
                <span className="text-accent-purple mr-3 flex-shrink-0">•</span>
                <h3 className="font-semibold text-primary-dark">{dict.gongbath.main_benefits.creativity_clarity}</h3>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-light/20 to-accent-purple/10 rounded-xl p-6 border border-accent-purple/10">
              <div className="flex items-start">
                <span className="text-accent-purple mr-3 flex-shrink-0">•</span>
                <h3 className="font-semibold text-primary-dark">{dict.gongbath.main_benefits.spiritual_renewal}</h3>
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent-purple/10 to-primary-light/20 rounded-xl p-6 border border-accent-purple/10">
              <div className="flex items-start">
                <span className="text-accent-purple mr-3 flex-shrink-0">•</span>
                <h3 className="font-semibold text-primary-dark">{dict.gongbath.main_benefits.energy_balance}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Kari Section */}
      <section className="py-16 bg-gradient-to-b from-background to-accent-purple/10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 text-primary-dark text-center">{dict.gongbath.meet_kari_title}</h2>
          <div className="bg-white/90 rounded-2xl shadow-lg p-8 border border-accent-purple/10">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <img 
                  src="/kari-hero.webp" 
                  alt="Kari Korkeamaki - Gong Bath Facilitator"
                  className="w-full rounded-xl shadow-md object-cover aspect-square"
                />
              </div>
              <div className="md:col-span-2">
                <div className="prose prose-lg max-w-none text-primary-dark/80" dangerouslySetInnerHTML={{ __html: dict.gongbath.kari_bio }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-12 text-primary-dark text-center">{dict.gongbath.faq_title}</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary-light/10 to-accent-purple/10 rounded-xl shadow p-6 border border-accent-purple/10">
              <h3 className="font-semibold text-primary-dark mb-2">{dict.gongbath.faq.experience_needed.question}</h3>
              <p className="text-primary-dark/80">{dict.gongbath.faq.experience_needed.answer}</p>
            </div>
            <div className="bg-gradient-to-br from-accent-purple/10 to-primary-light/10 rounded-xl shadow p-6 border border-accent-purple/10">
              <h3 className="font-semibold text-primary-dark mb-2">{dict.gongbath.faq.what_to_bring.question}</h3>
              <p className="text-primary-dark/80">{dict.gongbath.faq.what_to_bring.answer}</p>
            </div>
            <div className="bg-gradient-to-br from-primary-light/10 to-accent-purple/10 rounded-xl shadow p-6 border border-accent-purple/10">
              <h3 className="font-semibold text-primary-dark mb-2">{dict.gongbath.faq.what_feels_like.question}</h3>
              <p className="text-primary-dark/80">{dict.gongbath.faq.what_feels_like.answer}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section id="book" className="py-16 bg-gradient-to-br from-primary-light via-accent-purple/20 to-background px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6 text-primary-dark">{dict.gongbath.closing_title}</h2>
          <p className="text-lg mb-8 text-primary-dark/80">{dict.gongbath.closing_subtitle}</p>
          <div className="bg-white/90 rounded-2xl p-6 inline-block shadow-lg border border-accent-purple/10">
            <p className="text-primary-dark font-medium mb-4">{dict.gongbath.contact_info}</p>
            <Button href="mailto:kari.korkeamaki@gmail.com" variant="primary" className="text-lg px-8 py-3">{dict.gongbath.book_cta}</Button>
          </div>
        </div>
      </section>
    </>
  );
}
