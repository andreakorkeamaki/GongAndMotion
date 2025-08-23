import type { Metadata } from "next";
import Button from "../../components/Button";

export const metadata: Metadata = {
  title: "Dancing Mindfulness – Move Your Body, Free Your Mind",
  description:
    "A blend of mindful dance and movement meditation: awaken energy and creativity.",
};

export default function DancingMindfulness() {
  return (
    <>
      <section className="bg-gradient-to-br from-accent-purple/20 via-background to-primary-light py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-primary-dark drop-shadow">Dancing Mindfulness</h1>
        <p className="text-lg mb-8 text-primary-dark/80 max-w-2xl mx-auto">A dynamic practice for body expression, joy, and mind-body connection. Awaken energy and creativity with mindful movement and dance meditation.</p>
        <Button href="/events" variant="primary" className="text-lg px-8 py-3">Join the next session</Button>
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
