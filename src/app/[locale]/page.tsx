"use client";
import Image from 'next/image';
import Button from "../components/Button";
import PersonSlider from "../components/PersonSlider";
import { motion } from "framer-motion";
import { getClientDictionary } from "@/i18n/client-dictionaries";
import { type Locale } from "@/i18n/config";
import { useState, useEffect, use } from "react";

interface Dictionary {
  home: {
    title: string;
    description: string;
    hero_title: string;
    hero_subtitle: string;
  };
  common: {
    home: string;
    services: string;
    events: string;
    contact: string;
    book_now: string;
    learn_more: string;
    testimonials: string;
  };
  services: {
    qigong: string;
    massage: string;
    gongbath: string;
    dancingmindfulness: string;
  };
}

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

const serviceImages = [
  '/qigong-servizio.webp',
  '/massage-servizio.webp',
  '/gongbath-servizio.webp',
  '/dancingmindfulness-servizio.webp',
];

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const resolvedParams = use(params);
  const [dict, setDict] = useState<Dictionary | null>(null);
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

  useEffect(() => {
    const loadDict = async () => {
      const dictionary = await getClientDictionary(resolvedParams.locale);
      setDict(dictionary);
    };
    loadDict();
  }, [resolvedParams.locale]);

  if (!dict) return <div>Loading...</div>;

  return (
    <>
      {/* Debug Info - Shows detected locale */}
      <div className="fixed top-0 right-0 bg-red-500 text-white p-2 text-xs z-50 rounded-bl">
        Detected: {resolvedParams.locale}
      </div>
      <section className="relative py-20 px-4 flex flex-col items-center justify-center text-center min-h-[60vh]">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image src="/header-bg.webp" alt="Holistic Healing" fill priority className="object-cover object-right" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>
        <div className="relative w-full max-w-2xl mx-auto px-4 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6 text-primary-dark drop-shadow-lg">
            {dict.home.hero_title}
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-primary-dark/80">
            {dict.home.hero_subtitle}
          </p>
          <Button href="/events" variant="primary" className="text-lg px-8 py-3 shadow-lg">
            {dict.common.book_now}
          </Button>
        </div>
      </section>
      {/* --- SLIDER PERSONE --- */}
      <PersonSlider />
      <div className="w-full flex justify-center">
        <div className="h-1 w-24 rounded-full bg-accent-purple/60 mb-12"></div>
      </div>
      {/* Debug Info */}
      <div className="fixed top-0 right-0 bg-red-500 text-white p-2 text-xs z-50">
        Locale: {resolvedParams.locale}
      </div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          {serviceImages.map((img, i) => (
            <Image
              key={img}
              src={img}
              alt={services[i].title}
              fill
              sizes="100vw"
              className={`object-cover transition-opacity duration-700 ease-in-out ${hoveredService === i ? 'opacity-30 scale-100' : 'opacity-0'}`}
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
                <h3 className="text-xl font-bold text-primary-dark mb-4 z-10 relative">{service.title}</h3>
                <p className="text-primary-dark/80 mb-4 text-sm flex-1 z-10 relative">{service.description}</p>
                <Button href={service.href} variant="secondary" className="z-10 relative">{dict.common.learn_more}</Button>
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
        <h2 className="text-3xl font-heading font-bold text-center mb-12 text-primary-dark">{dict?.common.testimonials || "What People Say"}</h2>
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
                <Image src={t.img} alt={t.author} width={56} height={56} className="w-14 h-14 rounded-full object-cover mb-4 border-2 border-accent-purple/40 shadow" />
                <p className="italic text-primary-dark/90 text-base sm:text-lg text-center mb-4">&ldquo;{t.text}&rdquo;</p>
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
            <label htmlFor="newsletter-email" className="sr-only">Your email</label>
            <input id="newsletter-email" name="email" type="email" placeholder="Your email" className="border border-primary rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent w-full sm:w-auto" />
            <Button type="submit" variant="primary">Subscribe</Button>
          </form>
        </div>
      </section>
    </>
  );
}
