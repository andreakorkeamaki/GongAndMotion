import Head from "next/head";
import Button from "../components/Button";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact – Gong and Motion</title>
        <meta name="description" content="Write or call us for information and bookings. We are here for you!" />
      </Head>
      <section className="bg-gradient-to-br from-accent-purple/20 via-primary-light to-background py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-primary-dark drop-shadow">Contact Us</h1>
        <p className="text-lg mb-8 text-primary-dark/80 max-w-2xl mx-auto">Write or call us for information and bookings. We are here for you!</p>
      </section>
      <section className="bg-background py-12 px-4">
        <div className="max-w-xl mx-auto rounded-2xl shadow-lg bg-white/90 p-8 border border-accent-purple/10">
          <p className="mb-2 text-primary-dark/90">Email: <a className="text-accent-purple underline" href="mailto:gongandmotion@gmail.com">gongandmotion@gmail.com</a></p>
          <p className="mb-2 text-primary-dark/90">Phone/WhatsApp: <a className="text-accent-purple underline" href="tel:+46700501673">+46 70 050 1673</a></p>
          <p className="mb-4 text-primary-dark/80">Or fill out the form below for a quick response.</p>
          <form className="flex flex-col gap-3">
            <input className="border border-accent-purple rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-purple" type="text" placeholder="Your Name" required />
            <input className="border border-accent-purple rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-purple" type="email" placeholder="Your Email" required />
            <textarea className="border border-accent-purple rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-purple" placeholder="Your Message" required />
            <Button type="submit" variant="primary" className="mt-2">Send</Button>
          </form>
        </div>
      </section>
    </>
  );
}
