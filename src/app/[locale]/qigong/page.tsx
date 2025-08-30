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
      {/* Hero Section */}
      <section className="relative overflow-hidden text-center bg-gradient-to-br from-primary-light via-accent-purple/20 to-background min-h-[50vh]">
        <video
          className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/Videos/qigong-poster.jpeg"
          aria-hidden="true"
        >
          <source src="/Videos/qigong.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 py-20 sm:py-24 px-4 flex items-center justify-center min-h-[50vh]">
          <div className="bg-white/80 rounded-2xl shadow-lg inline-block px-6 sm:px-8 py-6 sm:py-8">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 text-primary-dark drop-shadow">{dict.qigong.hero_title}</h1>
            <p className="text-lg mb-8 text-primary-dark/80 max-w-2xl mx-auto">{dict.qigong.hero_subtitle}</p>
            <Button href="#workshop" variant="primary" className="text-lg px-8 py-3">{dict.qigong.hero_cta}</Button>
          </div>
        </div>
      </section>

      {/* What is Qigong Section */}
      <section className="py-16 bg-background px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 text-primary-dark text-center">{dict.qigong.what_is_qigong_title}</h2>
          <div className="prose prose-lg max-w-none text-primary-dark/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: dict.qigong.what_is_qigong_content }} />
        </div>
      </section>

      {/* Workshop Section */}
      <section id="workshop" className="py-16 bg-gradient-to-b from-green-50 to-background px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6 text-primary-dark text-center">{dict.qigong.workshop_title}</h2>
          <p className="text-lg mb-8 text-primary-dark/80 text-center max-w-3xl mx-auto">{dict.qigong.workshop_intro}</p>
          
          <div className="bg-white/90 rounded-2xl shadow-lg p-8 border border-accent-purple/10 mb-8">
            <h3 className="text-xl font-semibold mb-6 text-primary-dark">In this workshop, you will:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-accent-purple mr-3 flex-shrink-0">•</span>
                <span className="text-primary-dark/80">{dict.qigong.workshop_benefits.one_to_one}</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-purple mr-3 flex-shrink-0">•</span>
                <span className="text-primary-dark/80">{dict.qigong.workshop_benefits.gentle_movements}</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-purple mr-3 flex-shrink-0">•</span>
                <span className="text-primary-dark/80">{dict.qigong.workshop_benefits.stress_relief}</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-purple mr-3 flex-shrink-0">•</span>
                <span className="text-primary-dark/80">{dict.qigong.workshop_benefits.guided_practice}</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-purple mr-3 flex-shrink-0">•</span>
                <span className="text-primary-dark/80">{dict.qigong.workshop_benefits.daily_tools}</span>
              </li>
            </ul>
            <p className="text-primary-dark/80 italic">{dict.qigong.workshop_note}</p>
          </div>
        </div>
      </section>

      {/* Upcoming Workshop Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-8 text-primary-dark">{dict.qigong.upcoming_workshop_title}</h2>
          <div className="bg-gradient-to-br from-accent-purple/10 to-primary-light/20 rounded-2xl p-8 mb-8">
            <div className="space-y-4 mb-6">
              <p className="text-lg text-primary-dark font-medium">{dict.qigong.workshop_details.where}</p>
              <p className="text-lg text-primary-dark font-medium">{dict.qigong.workshop_details.when}</p>
              <p className="text-lg text-primary-dark font-medium">{dict.qigong.workshop_details.cost}</p>
            </div>
            <Button href="mailto:eileenmurray100@gmail.com" variant="primary" className="text-lg px-8 py-3">{dict.qigong.book_cta}</Button>
          </div>
        </div>
      </section>

      {/* Meet Your Teacher Section */}
      <section className="py-16 bg-gradient-to-b from-background to-green-50 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 text-primary-dark text-center">{dict.qigong.teacher_title}</h2>
          <div className="bg-white/90 rounded-2xl shadow-lg p-8 border border-accent-purple/10">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <img 
                  src="/eileen-hero.webp" 
                  alt="Eileen Murray - Qigong Teacher"
                  className="w-full rounded-xl shadow-md object-cover aspect-square"
                />
              </div>
              <div className="md:col-span-2">
                <div className="prose prose-lg max-w-none text-primary-dark/80" dangerouslySetInnerHTML={{ __html: dict.qigong.teacher_bio }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-12 text-primary-dark text-center">{dict.qigong.testimonials_title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-accent-purple/10 rounded-2xl p-6 border border-accent-purple/10">
              <p className="text-primary-dark/80 italic mb-4">&ldquo;{dict.qigong.testimonials.mary}&rdquo;</p>
            </div>
            <div className="bg-gradient-to-br from-accent-purple/10 to-green-50 rounded-2xl p-6 border border-accent-purple/10">
              <p className="text-primary-dark/80 italic mb-4">&ldquo;{dict.qigong.testimonials.joan}&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-green-50 via-background to-accent-purple/10 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-12 text-primary-dark text-center">{dict.qigong.faq_title}</h2>
          <div className="space-y-6">
            <div className="bg-white/90 rounded-xl shadow p-6 border border-accent-purple/10">
              <h3 className="font-semibold text-primary-dark mb-2">{dict.qigong.faq.experience_needed.question}</h3>
              <p className="text-primary-dark/80">{dict.qigong.faq.experience_needed.answer}</p>
            </div>
            <div className="bg-white/90 rounded-xl shadow p-6 border border-accent-purple/10">
              <h3 className="font-semibold text-primary-dark mb-2">{dict.qigong.faq.limited_mobility.question}</h3>
              <p className="text-primary-dark/80">{dict.qigong.faq.limited_mobility.answer}</p>
            </div>
            <div className="bg-white/90 rounded-xl shadow p-6 border border-accent-purple/10">
              <h3 className="font-semibold text-primary-dark mb-2">{dict.qigong.faq.online_requirements.question}</h3>
              <p className="text-primary-dark/80">{dict.qigong.faq.online_requirements.answer}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-light via-accent-purple/20 to-background px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6 text-primary-dark">{dict.qigong.closing_title}</h2>
          <p className="text-lg mb-8 text-primary-dark/80">{dict.qigong.closing_text}</p>
          <div className="bg-white/90 rounded-2xl p-6 inline-block shadow-lg border border-accent-purple/10">
            <p className="text-primary-dark font-medium">{dict.qigong.contact_info}</p>
          </div>
        </div>
      </section>
    </>
  );
}
