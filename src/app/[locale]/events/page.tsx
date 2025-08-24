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
    title: dict.events.title,
    description: dict.events.description,
  };
}

export default function Events({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const resolvedParams = use(params);
  const dict = use(getDictionary(resolvedParams.locale));
  return (
    <>
      <section className="bg-gradient-to-br from-accent-purple/30 via-primary-light to-background py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-primary-dark drop-shadow">{dict.events.hero_title}</h1>
        <p className="text-lg mb-8 text-primary-dark/80 max-w-2xl mx-auto">{dict.events.hero_subtitle}</p>
      </section>
      <section className="bg-background py-12 px-4">
        <div className="max-w-4xl mx-auto rounded-2xl shadow-lg bg-white/90 p-8 border border-accent-purple/10">
          <table className="min-w-full mb-6">
            <thead>
              <tr>
                <th className="text-left pb-2">{dict.events.date}</th>
                <th className="text-left pb-2">{dict.events.event}</th>
                <th className="text-left pb-2">{dict.events.location}</th>
                <th className="text-left pb-2">{dict.events.action}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>14 juni 2025</td>
                <td>{dict.events.events_list.qigong_workshop}</td>
                <td>Stockholm</td>
                <td><Button href="/contact" variant="primary" className="text-sm">{dict.events.sign_up}</Button></td>
              </tr>
              <tr>
                <td>21 juni 2025</td>
                <td>{dict.events.events_list.gong_bath}</td>
                <td>Göteborg</td>
                <td><Button href="/contact" variant="primary" className="text-sm">{dict.events.join}</Button></td>
              </tr>
              <tr>
                <td>28 juni 2025</td>
                <td>{dict.events.events_list.massage_intensive}</td>
                <td>Malmö</td>
                <td><Button href="/contact" variant="primary" className="text-sm">{dict.events.book}</Button></td>
              </tr>
            </tbody>
          </table>
          <Button href="/contact" variant="secondary">{dict.events.contact_more_info}</Button>
        </div>
      </section>
    </>
  );
}
