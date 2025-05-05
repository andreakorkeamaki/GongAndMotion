import Head from 'next/head';

export default function Qigong() {
  return (
    <>
      <Head>
        <title>Qigong – Self-healing Techniques | Gong and Motion</title>
        <meta name="description" content="Learn to cultivate health, emotional balance, and spiritual growth with our medical Qigong workshops in Sweden." />
      </Head>
      <main className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Medical Qigong</h1>
        <ul className="list-disc ml-6 mb-4">
          <li>Self-healing and prevention</li>
          <li>Immune system regulation</li>
          <li>Emotional harmony and peace of mind</li>
          <li>Spiritual growth and universal openness</li>
        </ul>
        <p className="mb-2">Next workshop: June 14, 2025 – Stockholm</p>
        <a href="/contact" className="btn-primary">Sign up now</a>
      </main>
    </>
  );
}
