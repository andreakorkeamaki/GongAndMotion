import type { Metadata } from "next";
import Button from "../../components/Button";

export const metadata: Metadata = {
  title: "Qigong – Self-healing Techniques | Gong and Motion",
  description:
    "Learn to cultivate health, emotional balance, and spiritual growth with our medical Qigong workshops in Sweden.",
};

export default function Qigong() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-light via-accent-purple/20 to-background py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-primary-dark drop-shadow">Medical Qigong</h1>
        <p className="text-lg mb-8 text-primary-dark/80 max-w-2xl mx-auto">Learn to cultivate health, emotional balance, and spiritual growth with our medical Qigong workshops in Sweden.</p>
        <Button href="/contact" variant="primary" className="text-lg px-8 py-3">Sign up now</Button>
      </section>
      <section className="bg-background py-12 px-4">
        <div className="max-w-3xl mx-auto rounded-2xl shadow-lg bg-white/90 p-8 border border-accent-purple/10">
          <ul className="list-disc ml-6 mb-6 text-left text-primary-dark/90">
            <li>Self-healing and prevention</li>
            <li>Immune system regulation</li>
            <li>Emotional harmony and peace of mind</li>
            <li>Spiritual growth and universal openness</li>
          </ul>
          <p className="mb-2 text-primary-dark/80">Next workshop: <span className="font-semibold text-accent-purple">June 14, 2025 – Stockholm</span></p>
        </div>
      </section>
      {/* FAQ SECTION */}
      <section className="py-16 bg-gradient-to-b from-green-50 via-background to-accent-purple/10">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-heading font-bold mb-8 text-primary-dark text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white/90 rounded-xl shadow p-6 border border-accent-purple/10">
              <h3 className="font-semibold text-primary-dark mb-2">What is Medical Qigong?</h3>
              <p className="text-primary-dark/80">Medical Qigong is an ancient Chinese practice that combines movement, breath, and intention to promote health, healing, and spiritual growth. It is used for self-healing, prevention, and as a complement to Western medicine.</p>
            </div>
            <div className="bg-white/90 rounded-xl shadow p-6 border border-accent-purple/10">
              <h3 className="font-semibold text-primary-dark mb-2">Do I need any experience to join?</h3>
              <p className="text-primary-dark/80">No experience is needed. Our workshops are suitable for all levels, including complete beginners. You will be guided step by step.</p>
            </div>
            <div className="bg-white/90 rounded-xl shadow p-6 border border-accent-purple/10">
              <h3 className="font-semibold text-primary-dark mb-2">What should I bring to a Qigong class?</h3>
              <p className="text-primary-dark/80">Wear comfortable clothes that allow you to move freely. Bring a water bottle and an open mind!</p>
            </div>
            <div className="bg-white/90 rounded-xl shadow p-6 border border-accent-purple/10">
              <h3 className="font-semibold text-primary-dark mb-2">Can Qigong help with stress and anxiety?</h3>
              <p className="text-primary-dark/80">Yes! Qigong is known for its calming effects on the mind and body. Many participants report reduced stress, improved sleep, and greater emotional balance.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
