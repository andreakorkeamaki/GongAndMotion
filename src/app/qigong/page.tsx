import Head from "next/head";
import Button from "../components/Button";

export default function Qigong() {
  return (
    <>
      <Head>
        <title>Qigong – Self-healing Techniques | Gong and Motion</title>
        <meta name="description" content="Learn to cultivate health, emotional balance, and spiritual growth with our medical Qigong workshops in Sweden." />
      </Head>
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
    </>
  );
}
