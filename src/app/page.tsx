import Head from "next/head";
import Button from "./components/Button";

const services = [
  {
    title: "Qigong",
    description: "Self-healing, energy balance, and spiritual growth through ancient movement and breath techniques.",
    href: "/qigong",
  },
  {
    title: "Biodynamic Massage",
    description: "Holistic treatments tailored to your needs. Mind and body in harmony for deep relaxation.",
    href: "/massage",
  },
  {
    title: "Gong Bath",
    description: "Immersive sound journeys for transformation and inner renewal. Group and private sessions.",
    href: "/gongbath",
  },
  {
    title: "Dancing Mindfulness",
    description: "Awaken energy and creativity with mindful movement and dance meditation.",
    href: "/dancingmindfulness",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Gong and Motion – Regenerate your body and mind</title>
        <meta name="description" content="Discover Qigong, massage, gong bath and Dancing Mindfulness: events and sessions for your holistic well-being. Book now!" />
      </Head>
      <section className="relative bg-gradient-to-br from-primary-light via-background to-accent/30 py-20 px-4 flex flex-col items-center justify-center text-center min-h-[60vh]">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6 text-primary-dark drop-shadow-lg">Regenerate your body and mind</h1>
          <p className="text-lg sm:text-xl mb-8 text-primary-dark/80">Sound, movement, and holistic healing for your well-being. Discover our unique events and treatments in Sweden.</p>
          <Button href="/events" variant="primary" className="text-lg px-8 py-3 shadow-lg">Discover Events</Button>
        </div>
      </section>
      {/* Section Divider */}
      <div className="w-full flex justify-center">
        <div className="h-1 w-24 rounded-full bg-accent-purple/60 mb-12"></div>
      </div>
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-10 text-center text-primary-dark">Our Services</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center border border-primary/10 hover:-translate-y-1 hover:scale-105"
              >
                <h3 className="text-xl font-heading font-semibold mb-2 text-primary-dark">{service.title}</h3>
                <p className="text-primary-dark/80 mb-4 text-sm">{service.description}</p>
                <Button href={service.href} variant="secondary">Learn More</Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section Divider */}
      <div className="w-full flex justify-center">
        <div className="h-1 w-24 rounded-full bg-primary/50 mb-12"></div>
      </div>
      <section className="py-16 bg-primary-light/60">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-heading font-bold mb-2 text-primary-dark">Experience the Healing Power of Sound</h2>
            <p className="mb-4 text-primary-dark/80">Join our next Gong Bath or Sound Healing event and feel the transformation.</p>
            <Button href="/events" variant="primary">Upcoming Events</Button>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-heading font-bold mb-2 text-primary-dark">Contact Our Team</h2>
            <p className="mb-4 text-primary-dark/80">Questions, private sessions, or collaborations? We’re here for you.</p>
            <Button href="/contact" variant="secondary">Contact Us</Button>
          </div>
        </div>
      </section>
      {/* Section Divider */}
      <div className="w-full flex justify-center">
        <div className="h-1 w-24 rounded-full bg-accent/60 mb-12"></div>
      </div>
      <section className="py-16 bg-gradient-to-br from-accent-purple/10 via-background to-primary-light">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-10 text-center text-primary-dark">What People Say</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white/90 shadow-lg p-6 border border-accent-purple/10 flex flex-col items-center">
              <p className="text-primary-dark/90 italic mb-4">“After three sessions I regained full mobility in my shoulder. A deeply healing experience.”</p>
              <span className="font-semibold text-accent-purple">Nina, doctor</span>
            </div>
            <div className="rounded-2xl bg-white/90 shadow-lg p-6 border border-accent-purple/10 flex flex-col items-center">
              <p className="text-primary-dark/90 italic mb-4">“Gong yourself back to life. I felt a transformation after the sound bath!”</p>
              <span className="font-semibold text-accent-purple">Kari, musician</span>
            </div>
            <div className="rounded-2xl bg-white/90 shadow-lg p-6 border border-accent-purple/10 flex flex-col items-center">
              <p className="text-primary-dark/90 italic mb-4">“The Qigong workshop gave me new energy and inner peace. Highly recommended!”</p>
              <span className="font-semibold text-accent-purple">Sofia, therapist</span>
            </div>
          </div>
        </div>
      </section>
      {/* Section Divider */}
      <div className="w-full flex justify-center">
        <div className="h-1 w-24 rounded-full bg-accent-purple/60 mb-12"></div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-heading font-bold mb-4 text-primary-dark">Stay Connected</h2>
          <p className="mb-6 text-primary-dark/80">Subscribe to our newsletter for event updates, exclusive content, and wellness tips.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
            <input type="email" placeholder="Your email" className="border border-primary rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent w-full sm:w-auto" />
            <Button variant="primary">Subscribe</Button>
          </form>
        </div>
      </section>
    </>
  );
}
