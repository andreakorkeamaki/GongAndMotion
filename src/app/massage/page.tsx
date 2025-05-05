import Head from 'next/head';

export default function Massage() {
  return (
    <>
      <Head>
        <title>Biodynamic Massage – Body and Soul in Balance</title>
        <meta name="description" content="Experience tailored treatment: initial consultation, biodynamic techniques, and integrated care for your total well-being." />
      </Head>
      <main className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Biodynamic Massage</h1>
        <p className="mb-2">Every session begins with a conversation to understand your needs. Then, we create a personalized journey for body and soul.</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Unique holistic treatment in Sweden</li>
          <li>Personalized dialogue</li>
          <li>Intuition and expertise of Eileen Murray</li>
        </ul>
        <blockquote className="italic border-l-4 pl-4 mb-4">“After three sessions I regained full mobility in my shoulder. A deeply healing experience.” – Nina, doctor</blockquote>
        <a href="/contact" className="btn-primary">Book your massage</a>
      </main>
    </>
  );
}
