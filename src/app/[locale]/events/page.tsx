import type { Metadata } from "next";
import Button from "../../components/Button";

export const metadata: Metadata = {
  title: "Events – Gong and Motion",
  description:
    "Discover and book our events: sound healing, Qigong workshops, massage, and mindful dance.",
};

export default function Events() {
  return (
    <>
      <section className="bg-gradient-to-br from-accent-purple/30 via-primary-light to-background py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-primary-dark drop-shadow">Upcoming Events</h1>
        <p className="text-lg mb-8 text-primary-dark/80 max-w-2xl mx-auto">Discover and book our events: sound healing, Qigong workshops, massage, and mindful dance for your holistic well-being.</p>
      </section>
      <section className="bg-background py-12 px-4">
        <div className="max-w-4xl mx-auto rounded-2xl shadow-lg bg-white/90 p-8 border border-accent-purple/10">
          <table className="min-w-full mb-6">
            <thead>
              <tr>
                <th className="text-left pb-2">Date</th>
                <th className="text-left pb-2">Event</th>
                <th className="text-left pb-2">Location</th>
                <th className="text-left pb-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>June 14, 2025</td>
                <td>Medical Qigong Workshop</td>
                <td>Stockholm</td>
                <td><Button href="/contact" variant="primary" className="text-sm">Sign Up</Button></td>
              </tr>
              <tr>
                <td>June 21, 2025</td>
                <td>Evening Gong Bath</td>
                <td>Gothenburg</td>
                <td><Button href="/contact" variant="primary" className="text-sm">Join</Button></td>
              </tr>
              <tr>
                <td>June 28, 2025</td>
                <td>Biodynamic Massage Intensive</td>
                <td>Malmö</td>
                <td><Button href="/contact" variant="primary" className="text-sm">Book</Button></td>
              </tr>
            </tbody>
          </table>
          <Button href="/contact" variant="secondary">Contact us for more info</Button>
        </div>
      </section>
    </>
  );
}
