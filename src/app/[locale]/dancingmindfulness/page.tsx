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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-purple/20 via-background to-primary-light py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-primary-dark drop-shadow">
          {dict.dancingmindfulness.hero_title}
        </h1>
        <p className="text-lg mb-8 text-primary-dark/80 max-w-2xl mx-auto">
          {dict.dancingmindfulness.hero_subtitle}
        </p>
        <Button href="mailto:eileenmurray100@gmail.com" variant="primary" className="text-lg px-8 py-3">
          {dict.dancingmindfulness.hero_cta}
        </Button>
      </section>

      {/* What is Conscious Dance Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 text-primary-dark text-center">
            {dict.dancingmindfulness.what_is_title}
          </h2>
          <div 
            className="text-lg text-primary-dark/90 leading-relaxed max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: dict.dancingmindfulness.what_is_content }}
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-background py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 text-primary-dark text-center">
            {dict.dancingmindfulness.benefits_title}
          </h2>
          <p className="text-lg text-primary-dark/90 mb-8 text-center max-w-3xl mx-auto">
            {dict.dancingmindfulness.benefits_intro}
          </p>
          <div className="space-y-6">
            <div className="bg-white/80 rounded-lg p-6 shadow-md">
              <p className="text-primary-dark/90 leading-relaxed">
                <strong>1.</strong> {dict.dancingmindfulness.benefits.mind_holiday}
              </p>
            </div>
            <div className="bg-white/80 rounded-lg p-6 shadow-md">
              <p className="text-primary-dark/90 leading-relaxed">
                <strong>2.</strong> {dict.dancingmindfulness.benefits.overcome_blockages}
              </p>
            </div>
            <div className="bg-white/80 rounded-lg p-6 shadow-md">
              <p className="text-primary-dark/90 leading-relaxed">
                <strong>3.</strong> {dict.dancingmindfulness.benefits.confidence}
              </p>
            </div>
            <div className="bg-white/80 rounded-lg p-6 shadow-md">
              <p className="text-primary-dark/90 leading-relaxed">
                <strong>4.</strong> {dict.dancingmindfulness.benefits.feel_good_hormones}
              </p>
            </div>
            <div className="bg-white/80 rounded-lg p-6 shadow-md">
              <p className="text-primary-dark/90 leading-relaxed">
                <strong>5.</strong> {dict.dancingmindfulness.benefits.emotional_strength}
              </p>
            </div>
            <div className="bg-white/80 rounded-lg p-6 shadow-md">
              <p className="text-primary-dark/90 leading-relaxed">
                <strong>6.</strong> {dict.dancingmindfulness.benefits.connection}
              </p>
            </div>
            <div className="bg-white/80 rounded-lg p-6 shadow-md">
              <p className="text-primary-dark/90 leading-relaxed">
                <strong>7.</strong> {dict.dancingmindfulness.benefits.spiritual_creativity}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Eileen Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 text-primary-dark text-center">
            {dict.dancingmindfulness.about_eileen_title}
          </h2>
          <div className="bg-gradient-to-br from-primary-light/30 to-accent-purple/10 rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <img 
                  src="/eileen-hero.webp" 
                  alt="Eileen Murray - Conscious Dance Facilitator"
                  className="w-full rounded-xl shadow-md object-cover aspect-square"
                />
              </div>
              <div className="md:col-span-2">
                <div 
                  className="text-lg text-primary-dark/90 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: dict.dancingmindfulness.about_eileen_content }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-background py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-12 text-primary-dark text-center">
            {dict.dancingmindfulness.faq_title}
          </h2>
          <div className="space-y-8">
            <div className="bg-white/90 rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-primary-dark mb-3 text-lg">
                {dict.dancingmindfulness.faq.experience_needed.question}
              </h3>
              <p className="text-primary-dark/80">
                {dict.dancingmindfulness.faq.experience_needed.answer}
              </p>
            </div>
            <div className="bg-white/90 rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-primary-dark mb-3 text-lg">
                {dict.dancingmindfulness.faq.what_needed.question}
              </h3>
              <p className="text-primary-dark/80">
                {dict.dancingmindfulness.faq.what_needed.answer}
              </p>
            </div>
            <div className="bg-white/90 rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-primary-dark mb-3 text-lg">
                {dict.dancingmindfulness.faq.what_to_expect.question}
              </h3>
              <p className="text-primary-dark/80">
                {dict.dancingmindfulness.faq.what_to_expect.answer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="bg-gradient-to-br from-primary-light via-accent-purple/20 to-background py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6 text-primary-dark">
            {dict.dancingmindfulness.closing_title}
          </h2>
          <p className="text-lg mb-8 text-primary-dark/80">
            {dict.dancingmindfulness.closing_text}
          </p>
          <Button 
            href="mailto:eileenmurray100@gmail.com" 
            variant="primary" 
            className="text-lg px-8 py-3"
          >
            {dict.dancingmindfulness.contact_cta}
          </Button>
        </div>
      </section>
    </>
  );
}
