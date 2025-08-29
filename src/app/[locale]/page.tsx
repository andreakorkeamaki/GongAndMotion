"use client";
import Image from 'next/image';
import Button from "../components/Button";
import PersonSlider from "../components/PersonSlider";
import { motion } from "framer-motion";
import { getClientDictionary } from "@/i18n/client-dictionaries";
import { type Locale } from "@/i18n/config";
import { useState, useEffect, use } from "react";

interface Service {
  title: string;
  description: string;
  href: string;
}

interface Testimonial {
  text: string;
  author: string;
}

interface Dictionary {
  home: {
    title: string;
    description: string; 
    hero_title: string;
    hero_subtitle: string;
    our_services: string;
    testimonial_1: string;
    testimonial_1_author: string;
    testimonial_2: string;
    testimonial_2_author: string;
    testimonial_3: string;
    testimonial_3_author: string;
    testimonial_4: string;
    testimonial_4_author: string;
    testimonial_5: string;
    testimonial_5_author: string;
  };
  common: {
    home: string;
    services: string;
    events: string;
    contact: string;
    book_now: string;
    learn_more: string;
    testimonials: string;
    stay_connected: string;
    newsletter_description: string;
    your_email: string;
    subscribe: string;
  };
  services: {
    qigong: string;
    massage: string;
    gongbath: string;
    dancingmindfulness: string;
    qigong_description: string;
    massage_description: string;
    gongbath_description: string;
    dancingmindfulness_description: string;
  };
}

const getServices = (dict: Dictionary, locale: string) => [
  {
    title: dict.services.qigong,
    description: dict.services.qigong_description,
    href: `/${locale}/qigong`,
  },
  {
    title: dict.services.massage,
    description: dict.services.massage_description,
    href: `/${locale}/massage`,
  },
  {
    title: dict.services.gongbath,
    description: dict.services.gongbath_description,
    href: `/${locale}/gongbath`,
  },
  {
    title: dict.services.dancingmindfulness,
    description: dict.services.dancingmindfulness_description,
    href: `/${locale}/dancingmindfulness`,
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
  
  const getTestimonials = (dict: Dictionary) => [
    {
      text: dict.home.testimonial_1,
      author: dict.home.testimonial_1_author,
    },
    {
      text: dict.home.testimonial_2,
      author: dict.home.testimonial_2_author,
    },
    {
      text: dict.home.testimonial_3,
      author: dict.home.testimonial_3_author,
    },
    {
      text: dict.home.testimonial_4,
      author: dict.home.testimonial_4_author,
    },
    {
      text: dict.home.testimonial_5,
      author: dict.home.testimonial_5_author,
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

  const services = getServices(dict, resolvedParams.locale);
  const testimonials = getTestimonials(dict);

  return (
    <>
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
      <PersonSlider locale={resolvedParams.locale} />
      <div className="w-full flex justify-center">
        <div className="h-1 w-24 rounded-full bg-accent-purple/60 mb-12"></div>
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
          <h2 className="text-3xl font-heading font-bold mb-10 text-center text-primary-dark">{dict.home.our_services}</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 items-stretch mb-12">
            {services.map((service: Service, i: number) => (
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
      <section className="py-16 bg-gradient-to-b from-accent-purple/10 to-background px-2 sm:px-4 -mb-12">
        <h2 className="text-3xl font-heading font-bold text-center mb-12 text-primary-dark">{dict.common.testimonials}</h2>
        {/* Testimonials infinite scroller */}
        <div className="relative w-full overflow-hidden pb-8">
          <motion.div
            className="flex gap-8"
            animate={{ x: [0, -testimonials.length * 380] }}
            transition={{ 
              repeat: Infinity, 
              repeatType: 'loop', 
              duration: testimonials.length * 10, 
              ease: 'linear' 
            }}
            style={{ width: `${testimonials.length * 380 * 2}px` }}
          >
            {[...testimonials, ...testimonials].map((t: Testimonial, i: number) => (
              <div
                key={i}
                className="flex-shrink-0 flex flex-col items-center justify-center w-[360px] max-w-full px-6"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg flex flex-col items-center text-center h-full border border-white/20">
                  <p className="italic text-primary-dark/90 text-base sm:text-lg text-center mb-4 flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <span className="block text-accent-purple font-semibold text-base text-center">
                    {t.author}
                  </span>
                </div>
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
          <h2 className="text-2xl font-heading font-bold mb-4 text-primary-dark">{dict.common.stay_connected}</h2>
          <p className="mb-6 text-primary-dark/80">{dict.common.newsletter_description}</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">{dict.common.your_email}</label>
            <input id="newsletter-email" name="email" type="email" placeholder={dict.common.your_email} className="border border-primary rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent w-full sm:w-auto" />
            <Button type="submit" variant="primary">{dict.common.subscribe}</Button>
          </form>
        </div>
      </section>
    </>
  );
}
