import type { Metadata } from "next";
import Button from "../components/Button";

export const metadata: Metadata = {
  title: "Biodynamic Massage – Body and Soul in Balance",
  description:
    "Experience tailored treatment: initial consultation, biodynamic techniques, and integrated care for your total well-being.",
};

export default function Massage() {
  return (
    <>
      <section className="bg-gradient-to-br from-accent-purple/20 via-primary-light to-background py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-primary-dark drop-shadow">Biodynamic Massage</h1>
        <p className="text-lg mb-8 text-primary-dark/80 max-w-2xl mx-auto">Every session begins with a conversation to understand your needs. Then, we create a personalized journey for body and soul.</p>
        <Button href="/contact" variant="primary" className="text-lg px-8 py-3">Book your massage</Button>
      </section>
      <section className="bg-background py-12 px-4">
        <div className="max-w-3xl mx-auto rounded-2xl shadow-lg bg-white/90 p-8 border border-accent-purple/10">
          <ul className="list-disc ml-6 mb-6 text-left text-primary-dark/90">
            <li>Unique holistic treatment in Sweden</li>
            <li>Personalized dialogue</li>
            <li>Intuition and expertise of Eileen Murray</li>
          </ul>
          <blockquote className="italic border-l-4 pl-4 mb-4 border-accent-purple/50 text-primary-dark/80">“After three sessions I regained full mobility in my shoulder. A deeply healing experience.” – Nina, doctor</blockquote>
        </div>
      </section>
    </>
  );
}
