import Head from 'next/head';

export default function Events() {
  return (
    <>
      <Head>
        <title>Events – Gong and Motion</title>
        <meta name="description" content="Discover and book our events: sound healing, Qigong workshops, massage, and mindful dance." />
      </Head>
      <main className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
        <table className="min-w-full mb-4">
          <thead>
            <tr>
              <th className="text-left">Date</th>
              <th className="text-left">Event</th>
              <th className="text-left">Location</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>June 14, 2025</td>
              <td>Medical Qigong Workshop</td>
              <td>Stockholm</td>
              <td><a href="/contact" className="btn-primary">Sign up</a></td>
            </tr>
            <tr>
              <td>June 21, 2025</td>
              <td>Evening Gong Bath</td>
              <td>Gothenburg</td>
              <td><a href="/contact" className="btn-primary">Join</a></td>
            </tr>
            <tr>
              <td>June 28, 2025</td>
              <td>Biodynamic Massage Intensive</td>
              <td>Malmö</td>
              <td><a href="/contact" className="btn-primary">Book</a></td>
            </tr>
          </tbody>
        </table>
        <a href="/contact" className="btn-secondary">Contact us for more info</a>
      </main>
    </>
  );
}
