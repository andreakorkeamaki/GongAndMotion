import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gong and Motion – Regenerate your body and mind</title>
        <meta name="description" content="Discover Qigong, massage, gong bath and Dancing Mindfulness: events and sessions for your holistic well-being. Book now!" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Welcome to Gong and Motion</h1>
        <p className="mb-6 text-center max-w-xl">An immersive experience of sound, movement, and holistic healing. Explore practices for energy balance, deep relaxation, and mindful movement.</p>
        <div className="flex flex-col gap-2">
          <a href="/qigong" className="btn-primary">Qigong</a>
          <a href="/massage" className="btn-primary">Biodynamic Massage</a>
          <a href="/gongbath" className="btn-primary">Gong Bath</a>
          <a href="/dancingmindfulness" className="btn-primary">Dancing Mindfulness</a>
          <a href="/events" className="btn-secondary">View All Events</a>
        </div>
      </main>
    </>
  );
}
