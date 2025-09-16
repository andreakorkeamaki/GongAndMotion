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
    title: dict.contact.title,
    description: dict.contact.description,
  };
}

export default function Contact({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const resolvedParams = use(params);
  const dict = use(getDictionary(resolvedParams.locale));
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark/20 via-primary-light to-accent-light/60 py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-primary-dark drop-shadow">{dict.contact.hero_title}</h1>
        <p className="text-lg mb-8 text-primary-dark/80 max-w-2xl mx-auto">{dict.contact.hero_subtitle}</p>
      </section>
      <section className="bg-background py-12 px-4">
        <div className="max-w-xl mx-auto rounded-2xl shadow-lg bg-white/90 p-8 border border-accent-purple/10">
          <p className="mb-2 text-primary-dark/90">{dict.contact.email} <a className="text-accent-purple underline" href="mailto:gongandmotion@gmail.com">gongandmotion@gmail.com</a></p>
          <p className="mb-2 text-primary-dark/90">{dict.contact.phone} <a className="text-accent-purple underline" href="tel:+46700501673">+46 70 050 1673</a></p>
          <p className="mb-4 text-primary-dark/80">{dict.contact.form_description}</p>
          <form className="flex flex-col gap-3">
            <div className="text-left">
              <label htmlFor="name" className="sr-only">{dict.contact.your_name}</label>
              <input id="name" name="name" className="w-full border border-accent-purple rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-purple" type="text" placeholder={dict.contact.your_name} required />
            </div>
            <div className="text-left">
              <label htmlFor="email" className="sr-only">{dict.contact.your_email}</label>
              <input id="email" name="email" className="w-full border border-accent-purple rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-purple" type="email" placeholder={dict.contact.your_email} required />
            </div>
            <div className="text-left">
              <label htmlFor="message" className="sr-only">{dict.contact.your_message}</label>
              <textarea id="message" name="message" className="w-full border border-accent-purple rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-purple" placeholder={dict.contact.your_message} required />
            </div>
            <Button type="submit" variant="primary" className="mt-2">{dict.contact.send}</Button>
          </form>
        </div>
      </section>
    </>
  );
}
