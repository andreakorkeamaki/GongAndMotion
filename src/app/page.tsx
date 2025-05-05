"use client";
import Head from "next/head";
import Image from 'next/image';
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

import { useState, useEffect } from "react";

function PersonSlider() {
  const people = [
    {
      name: "Eileen Murray",
      image: "/eileen-hero.webp",
      bg: "bg-gradient-to-l from-green-100 via-white/80 to-transparent",
      bio: (
        <>
          Open Floor International Movement teacher, currently in training at BISO – Dynamic Movement Facilitator Training (2 years).<br/>
          Biodynamic massage therapist, psychotherapist, and medical qigong teacher. 35 years of experience in Australia, Sweden, the UK, and Ireland.<br/>
          &ldquo;I teach from the heart and feel it is a privilege to guide others to deeper awareness of themselves and all that they are.&rdquo;
        </>
      ),
      button: { href: "/qigong", label: "Discover Qigong" },
    },
    {
      name: "Kari Korkeamaki",
      image: "/kari-hero.webp",
      bg: "bg-gradient-to-l from-accent-purple/20 via-white/80 to-transparent",
      bio: (
        <>
          Has played gong for 12 years and offered many gong baths in various formats—together with yoga, at festivals, individual sessions, with hypnosis, and outdoors in nature.<br/>
          Assisted with gong at Open Floor in Ireland and Sweden. Sees both gong and dance as beautiful ways to discover your inner world, free from inhibitions and to let in new, fresh life.
        </>
      ),
      button: { href: "/gongbath", label: "Discover Gong Bath" },
    },
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIdx((idx + 1) % people.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [idx, people.length]);
  const person = people[idx];
  return (
    <section className={`relative py-16 min-h-[480px] ${person.bg}`}>
      <div className="max-w-5xl mx-auto w-full flex flex-col-reverse md:flex-row items-center px-4">
        {/* LEFT TEXT WITH GRADIENT (gradient now on section) */}
        <div className="relative w-full md:w-[48%] max-w-lg md:ml-8 bg-white/80 rounded-2xl p-6 shadow-lg transition-all duration-700 ease-in-out">
          <h2 className="text-3xl font-heading font-bold mb-2 text-primary-dark">{person.name}</h2>
          <p className="mb-4 text-primary-dark/80 text-base">{person.bio}</p>
          <Button href={person.button.href} variant="primary">{person.button.label}</Button>
        </div>
        {/* RIGHT PHOTO, LARGER, NO PURPLE BORDER, CLOSER TO TEXT */}
        <div className="w-full md:w-[44%] flex justify-center items-center h-full mb-8 md:mb-0">
          <img 
            src={person.image} 
            alt={person.name} 
            className="w-[90vw] max-w-[360px] h-auto object-contain rounded-2xl shadow-xl bg-white/30 transition-all duration-700 ease-in-out" 
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Gong and Motion – Regenerate your body and mind</title>
        <meta name="description" content="Discover Qigong, massage, gong bath and Dancing Mindfulness: events and sessions for your holistic well-being. Book now!" />
      </Head>
      <section className="relative py-20 px-4 flex flex-col items-center justify-center text-center min-h-[60vh]">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image src="/header-bg.webp" alt="Holistic Healing" fill className="object-cover object-right" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>
        <div className="relative w-full max-w-2xl mx-auto px-4 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6 text-primary-dark drop-shadow-lg">Regenerate your body and mind</h1>
          <p className="text-lg sm:text-xl mb-8 text-primary-dark/80">Sound, movement, and holistic healing for your well-being. Discover our unique events and treatments in Sweden.</p>
          <Button href="/events" variant="primary" className="text-lg px-8 py-3 shadow-lg">Discover Events</Button>
        </div>
      </section>
      {/* --- SLIDER PERSONE --- */}
      <PersonSlider />
      <div className="w-full flex justify-center">
        <div className="h-1 w-24 rounded-full bg-accent-purple/60 mb-12"></div>
      </div>
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-10 text-center text-primary-dark">Our Services</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 items-stretch">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col h-full justify-between rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 items-center text-center border border-primary/10 hover:-translate-y-1 hover:scale-105 min-w-0"
              >
                <h3 className="text-xl font-heading font-semibold mb-2 text-primary-dark">{service.title}</h3>
                <p className="text-primary-dark/80 mb-4 text-sm flex-1">{service.description}</p>
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
      <section className="py-16 bg-gradient-to-b from-accent-purple/10 via-background to-green-50 px-2 sm:px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-12 text-primary-dark">What People Say</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch h-full">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col justify-between h-full items-center">
            <img src="/nina.jpg" alt="Nina" className="w-14 h-14 rounded-full object-cover mb-4 border-2 border-accent-purple/40 shadow" />
            <p className="italic text-primary-dark/90 text-base sm:text-lg text-center flex-1 flex items-start">
              “After three sessions I regained full mobility in my shoulder. A deeply healing experience.”
            </p>
            <span className="block text-accent-purple font-semibold text-base text-center mt-8">
              Nina, doctor
            </span>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col justify-between h-full items-center">
            <img src="/kari.jpg" alt="Kari" className="w-14 h-14 rounded-full object-cover mb-4 border-2 border-accent-purple/40 shadow" />
            <p className="italic text-primary-dark/90 text-base sm:text-lg text-center flex-1 flex items-start">
              “Gong yourself back to life. I felt a transformation after the sound bath!”
            </p>
            <span className="block text-accent-purple font-semibold text-base text-center mt-8">
              Kari, musician
            </span>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col justify-between h-full items-center">
            <img src="/sofia.jpg" alt="Sofia" className="w-14 h-14 rounded-full object-cover mb-4 border-2 border-accent-purple/40 shadow" />
            <p className="italic text-primary-dark/90 text-base sm:text-lg text-center flex-1 flex items-start">
              “The Qigong workshop gave me new energy and inner peace. Highly recommended!”
            </p>
            <span className="block text-accent-purple font-semibold text-base text-center mt-8">
              Sofia, therapist
            </span>
          </div>
        </div>
      </section>
      {/* Section Divider */}
      <div className="w-full flex justify-center">
        <div className="h-1 w-24 rounded-full bg-accent/60 mb-12"></div>
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
