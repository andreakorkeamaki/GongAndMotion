"use client";
import Head from "next/head";
import Image from 'next/image';
import Button from "./components/Button";
import { motion, AnimatePresence } from "framer-motion";

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
      bio: (
        <>
          Open Floor International Movement teacher, currently in training at BISO – Dynamic Movement Facilitator Training (2 years).<br/>
          Biodynamic massage therapist, psychotherapist, and medical qigong teacher. 35 years of experience in Australia, Sweden, the UK, and Ireland.<br/>
          &ldquo;&rdquo;
        </>
      ),
      button: { href: "/qigong", label: "Discover Qigong" },
    },
    {
      name: "Kari Korkeamaki",
      image: "/kari-hero.webp",
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
  const gradients = [
    'bg-gradient-to-l from-green-100 via-white/80 to-transparent', // Eileen
    'bg-gradient-to-l from-accent-purple/20 via-white/80 to-transparent' // Kari
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      setIdx((idx + 1) % people.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [idx, people.length]);
  const person = people[idx];

  return (
    <section className="relative py-16 min-h-[480px]">
      <div className="absolute inset-0 w-full h-full z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={person.name + '-bg'}
            className={`absolute inset-0 w-full h-full ${gradients[idx]}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </div>
      <div className="max-w-5xl mx-auto w-full flex flex-col-reverse md:flex-row items-center px-4 relative z-10">
        {/* LEFT TEXT WITH GRADIENT (gradient now on section) */}
        <div className="relative w-full md:w-[48%] max-w-lg md:ml-8 bg-white/80 rounded-2xl p-6 shadow-lg transition-all duration-700 ease-in-out">
          <div className="flex flex-col" style={{ minHeight: '220px' }}>
            <AnimatePresence mode="wait">
              <motion.h2
                key={person.name}
                className="text-3xl font-heading font-bold mb-2 text-primary-dark"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                {person.name}
              </motion.h2>
              <motion.div
                key={person.name + '-bio'}
                className="mb-4 text-primary-dark/80 text-base flex-grow"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
              >
                {person.bio}
              </motion.div>
              <motion.div
                key={person.name + '-button'}
                className="mt-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button href={person.button.href} variant="primary">{person.button.label}</Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        {/* RIGHT PHOTO, LARGER, NO PURPLE BORDER, CLOSER TO TEXT */}
        <div className="w-full md:w-[44%] flex justify-center items-center h-full mb-8 md:mb-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={person.name + '-img'}
              src={person.image}
              alt={person.name}
              className="w-[90vw] max-w-[360px] h-auto object-contain rounded-2xl shadow-xl bg-white/30 transition-all duration-700 ease-in-out"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

const serviceImages = [
  '/qigong-servizio.webp',
  '/massage-servizio.webp',
  '/gongbath-servizio.webp',
  '/dancingmindfulness-servizio.webp',
];

export default function Home() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const testimonials = [
    {
      img: "/eileen-hero.webp",
      text: "After three sessions I regained full mobility in my shoulder. A deeply healing experience.",
      author: "Nina, doctor",
    },
    {
      img: "/kari-hero.webp",
      text: "Gong yourself back to life. I felt a transformation after the sound bath!",
      author: "Kari, musician",
    },
    {
      img: "/qigong-servizio.webp",
      text: "The Qigong workshop gave me new energy and inner peace. Highly recommended!",
      author: "Sofia, therapist",
    },
  ];
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
      <section className="py-16 bg-background relative overflow-hidden">
        {/* SFONDO IMMAGINE SERVIZIO */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          {serviceImages.map((img, i) => (
            <img
              key={img}
              src={img}
              alt={services[i].title}
              className={`object-cover w-full h-full absolute left-0 top-0 transition-opacity duration-700 ease-in-out ${hoveredService === i ? 'opacity-30 scale-100' : 'opacity-0'}`}
              style={{ filter: 'blur(1.5px)' }}
            />
          ))}
        </div>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-heading font-bold mb-10 text-center text-primary-dark">Our Services</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 items-stretch mb-12">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="flex flex-col h-full justify-between rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 items-center text-center border border-primary/10 hover:-translate-y-1 hover:scale-105 min-w-0 group relative overflow-hidden"
                onMouseEnter={() => setHoveredService(i)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <h3 className="text-xl font-heading font-semibold mb-2 text-primary-dark z-10 relative">{service.title}</h3>
                <p className="text-primary-dark/80 mb-4 text-sm flex-1 z-10 relative">{service.description}</p>
                <Button href={service.href} variant="secondary" className="z-10 relative">Learn More</Button>
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
        {/* Testimonials scroller fixed */}
        <div className="relative w-full overflow-x-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: [0, `-${testimonials.length * 340}px`] }}
            transition={{ repeat: Infinity, repeatType: 'loop', duration: 60, ease: 'linear' }}
            style={{ width: `${testimonials.length * 340 * 2}px` }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex flex-col items-center justify-center w-[340px] max-w-full px-6"
              >
                <img src={t.img} alt={t.author} className="w-14 h-14 rounded-full object-cover mb-4 border-2 border-accent-purple/40 shadow" />
                <p className="italic text-primary-dark/90 text-base sm:text-lg text-center mb-4">“{t.text}”</p>
                <span className="block text-accent-purple font-semibold text-base text-center">{t.author}</span>
              </div>
            ))}
          </motion.div>
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
