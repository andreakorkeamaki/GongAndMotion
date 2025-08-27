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
    title: dict.massage.title,
    description: dict.massage.description,
  };
}

export default function Massage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const resolvedParams = use(params);
  const dict = use(getDictionary(resolvedParams.locale));
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-purple/20 via-primary-light to-background py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-primary-dark drop-shadow">
          {dict.massage.hero_title}
        </h1>
        <p className="text-lg mb-8 text-primary-dark/80 max-w-2xl mx-auto">
          {dict.massage.hero_subtitle}
        </p>
        <Button href="mailto:eileenmurray100@gmail.com" variant="primary" className="text-lg px-8 py-3">
          {dict.massage.hero_cta}
        </Button>
      </section>

      {/* What is Biodynamic Massage Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 text-primary-dark text-center">
            {dict.massage.what_is_title}
          </h2>
          <div 
            className="text-lg text-primary-dark/90 leading-relaxed max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: dict.massage.what_is_content }}
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-background py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 text-primary-dark text-center">
            {dict.massage.benefits_title}
          </h2>
          <p className="text-lg text-primary-dark/90 mb-8 text-center max-w-3xl mx-auto">
            {dict.massage.benefits_intro}
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/80 rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-primary-dark mb-2">• {dict.massage.benefits.pain_relief}</h3>
            </div>
            <div className="bg-white/80 rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-primary-dark mb-2">• {dict.massage.benefits.stress_reduction}</h3>
            </div>
            <div className="bg-white/80 rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-primary-dark mb-2">• {dict.massage.benefits.depression_support}</h3>
            </div>
            <div className="bg-white/80 rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-primary-dark mb-2">• {dict.massage.benefits.life_transitions}</h3>
            </div>
          </div>
          <p className="text-lg text-primary-dark/90 text-center max-w-3xl mx-auto italic">
            {dict.massage.benefits_conclusion}
          </p>
        </div>
      </section>

      {/* About Eileen Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 text-primary-dark text-center">
            {dict.massage.about_eileen_title}
          </h2>
          <div className="bg-gradient-to-br from-primary-light/30 to-accent-purple/10 rounded-2xl p-8 shadow-lg">
            <div 
              className="text-lg text-primary-dark/90 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: dict.massage.about_eileen_content }}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-background py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-12 text-primary-dark text-center">
            {dict.massage.faq_title}
          </h2>
          <div className="space-y-8">
            <div className="bg-white/90 rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-primary-dark mb-3 text-lg">
                {dict.massage.faq.difference.question}
              </h3>
              <p className="text-primary-dark/80">
                {dict.massage.faq.difference.answer}
              </p>
            </div>
            <div className="bg-white/90 rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-primary-dark mb-3 text-lg">
                {dict.massage.faq.who_benefits.question}
              </h3>
              <p className="text-primary-dark/80">
                {dict.massage.faq.who_benefits.answer}
              </p>
            </div>
            <div className="bg-white/90 rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-primary-dark mb-3 text-lg">
                {dict.massage.faq.online_sessions.question}
              </h3>
              <p className="text-primary-dark/80">
                {dict.massage.faq.online_sessions.answer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="bg-gradient-to-br from-primary-light via-accent-purple/20 to-background py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6 text-primary-dark">
            {dict.massage.closing_title}
          </h2>
          <p className="text-lg mb-8 text-primary-dark/80">
            {dict.massage.closing_text}
          </p>
          <Button 
            href="mailto:eileenmurray100@gmail.com" 
            variant="primary" 
            className="text-lg px-8 py-3"
          >
            {dict.massage.contact_cta}
          </Button>
        </div>
      </section>
    </>
  );
}
