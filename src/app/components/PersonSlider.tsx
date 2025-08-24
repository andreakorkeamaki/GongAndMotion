"use client";

import { useState, useEffect } from "react";
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { getClientDictionary } from "@/i18n/client-dictionaries";
import { type Locale } from "@/i18n/config";

const MotionImage = motion(Image);

interface Practitioner {
  name: string;
  image: string;
  bio: string;
  button: {
    href: string;
    label: string;
  };
}

interface Dictionary {
  practitioners: {
    eileen: {
      name: string;
      bio: string;
      button_label: string;
      button_href: string;
    };
    kari: {
      name: string;
      bio: string;
      button_label: string;
      button_href: string;
    };
  };
}

interface PersonSliderProps {
  locale: Locale;
}

export default function PersonSlider({ locale }: PersonSliderProps) {
  const [idx, setIdx] = useState(0);
  const [dict, setDict] = useState<Dictionary | null>(null);
  const [people, setPeople] = useState<Practitioner[]>([]);
  
  const gradients = [
    'bg-gradient-to-l from-green-100 via-white/80 to-transparent',
    'bg-gradient-to-l from-accent-purple/20 via-white/80 to-transparent'
  ];

  useEffect(() => {
    const loadDictionary = async () => {
      const dictionary = await getClientDictionary(locale);
      setDict(dictionary);
      
      // Create people array from dictionary
      const practitionersData = [
        {
          name: dictionary.practitioners.eileen.name,
          image: "/eileen-hero.webp",
          bio: dictionary.practitioners.eileen.bio,
          button: { 
            href: dictionary.practitioners.eileen.button_href, 
            label: dictionary.practitioners.eileen.button_label 
          },
        },
        {
          name: dictionary.practitioners.kari.name,
          image: "/kari-hero.webp",
          bio: dictionary.practitioners.kari.bio,
          button: { 
            href: dictionary.practitioners.kari.button_href, 
            label: dictionary.practitioners.kari.button_label 
          },
        },
      ];
      setPeople(practitionersData);
    };
    
    loadDictionary();
  }, [locale]);

  useEffect(() => {
    if (people.length === 0) return;
    
    const timer = setTimeout(() => {
      setIdx((prevIdx) => (prevIdx + 1) % people.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [idx, people.length]);

  if (!dict || people.length === 0) {
    return <div className="py-16 min-h-[480px] flex items-center justify-center">Loading...</div>;
  }

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
        <div className="relative w-full md:w-[48%] max-w-lg md:ml-8 bg-white/80 rounded-2xl p-6 shadow-lg">
          <div className="flex flex-col h-[320px] md:h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={person.name + '-content'}
                className="flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <h2 className="text-3xl font-heading font-bold mb-4 text-primary-dark">
                  {person.name}
                </h2>
                <div className="mb-6 text-primary-dark/80 text-base flex-grow overflow-y-auto" dangerouslySetInnerHTML={{ __html: person.bio }} />
                <div className="mt-auto">
                  <Button href={person.button.href} variant="primary">{person.button.label}</Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="w-full md:w-[44%] flex justify-center items-center h-full mb-8 md:mb-0">
          <AnimatePresence mode="wait">
            <div
              key={person.name + '-img-wrap'}
              className="relative w-[90vw] max-w-[360px] aspect-[3/4] rounded-2xl shadow-xl bg-white/30 overflow-hidden transition-all duration-700 ease-in-out"
            >
              <MotionImage
                src={person.image}
                alt={person.name}
                fill
                sizes="(max-width: 768px) 90vw, 360px"
                className="object-cover"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
