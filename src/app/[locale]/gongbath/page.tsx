import type { Metadata } from "next";
import Button from "../../components/Button";

export const metadata: Metadata = {
  title: "Gong Bath – Transformative Vibrations",
  description:
    "Surrender to the regenerative power of the gong: sound, deep relaxation, and inner renewal.",
};

export default function GongBath() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-light via-background to-accent-purple/30 py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-primary-dark drop-shadow">Gong Bath</h1>
        <p className="text-lg mb-8 text-primary-dark/80 max-w-2xl mx-auto">Led by Kari Korkeamaki, experience sound waves for transformation and purification. Group and private sessions available.</p>
        <Button href="/events" variant="primary" className="text-lg px-8 py-3">See upcoming dates</Button>
      </section>
      <section className="bg-background py-12 px-4">
        <div className="max-w-3xl mx-auto rounded-2xl shadow-lg bg-white/90 p-8 border border-accent-purple/10">
          <ul className="list-disc ml-6 mb-6 text-left text-primary-dark/90">
            <li>Sound waves for transformation and purification</li>
            <li>A journey to your true Self</li>
            <li>Group and private sessions</li>
          </ul>
          <blockquote className="italic border-l-4 pl-4 mb-4 border-accent-purple/50 text-primary-dark/80">"Gong yourself back to life."</blockquote>
        </div>
      </section>
    </>
  );
}
