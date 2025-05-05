import Head from 'next/head';

export default function DancingMindfulness() {
  return (
    <>
      <Head>
        <title>Dancing Mindfulness – Move Your Body, Free Your Mind</title>
        <meta name="description" content="A blend of mindful dance and movement meditation: awaken energy and creativity." />
      </Head>
      <main className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Dancing Mindfulness</h1>
        <p className="mb-2">A dynamic practice for:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Body expression and inner freedom</li>
          <li>Mind-body connection</li>
          <li>Joy and lightness in every step</li>
        </ul>
        <a href="/events" className="btn-primary">Join the next session</a>
      </main>
    </>
  );
}
