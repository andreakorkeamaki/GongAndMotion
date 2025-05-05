import Head from 'next/head';

export default function GongBath() {
  return (
    <>
      <Head>
        <title>Gong Bath – Transformative Vibrations</title>
        <meta name="description" content="Surrender to the regenerative power of the gong: sound, deep relaxation, and inner renewal." />
      </Head>
      <main className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Gong Bath</h1>
        <p className="mb-2">Led by Kari Korkeamaki, experience:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Sound waves for transformation and purification</li>
          <li>A journey to your true Self</li>
          <li>Group and private sessions</li>
        </ul>
        <blockquote className="italic border-l-4 pl-4 mb-4">“Gong yourself back to life.”</blockquote>
        <a href="/events" className="btn-primary">See upcoming dates</a>
      </main>
    </>
  );
}
