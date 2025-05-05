import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact – Gong and Motion</title>
        <meta name="description" content="Write or call us for information and bookings. We are here for you!" />
      </Head>
      <main className="max-w-xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-2">Email: <a className="text-blue-600 underline" href="mailto:gongandmotion@gmail.com">gongandmotion@gmail.com</a></p>
        <p className="mb-2">Phone/WhatsApp: <a className="text-blue-600 underline" href="tel:+46700501673">+46 70 050 1673</a></p>
        <p className="mb-4">Or fill out the form below for a quick response.</p>
        <form className="flex flex-col gap-2">
          <input className="border rounded p-2" type="text" placeholder="Your Name" required />
          <input className="border rounded p-2" type="email" placeholder="Your Email" required />
          <textarea className="border rounded p-2" placeholder="Your Message" required />
          <button type="submit" className="btn-primary">Send</button>
        </form>
      </main>
    </>
  );
}
