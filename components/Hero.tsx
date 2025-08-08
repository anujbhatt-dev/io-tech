'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import HeroBg from '@/public/hero-bg.jpg';
import { Link } from '@/i18n/navigation';
import { IconChevronCompactLeft } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    href: '/',
    bgImageUrl: '/hero-bg.jpg',
    imageUrl: '',
    heading: 'Slide One',
    subHeading:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores nulla sequi cupiditate delectus consequuntur voluptatum voluptates provident! Eius, cumque.',
    linkText: 'Read More',
  },
  {
    href: '/',
    bgImageUrl: '/hero-bg.jpg',
    imageUrl: '',
    heading: 'Slide Two',
    subHeading:
      'Consequatur voluptatum voluptates provident! Eius, cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    linkText: 'Read More',
  },
  {
    href: '/',
    bgImageUrl: '/hero-bg.jpg',
    imageUrl: '',
    heading: 'Slide Three',
    subHeading:
      'Cupiditate delectus consequuntur voluptatum voluptates provident! Eius, cumque.',
    linkText: 'Read More',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="h-screen overflow-hidden relative">
      {/* arrow left */}
      <div
        className="absolute left-0 top-[50%] -translate-y-[50%] z-30 pl-2 lg:pl-20 cursor-pointer"
        onClick={prevSlide}
      >
        <IconChevronCompactLeft className="text-white h-10 w-10" />
      </div>

      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="h-full w-screen relative bg-gradient-to-b to-amber-950 from-amber-700 flex justify-center items-center px-4 lg:px-60 text-white z-20"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            width={1080}
            height={916}
            className="object-cover h-full absolute top-0 left-0 right-0 bottom-0 w-full opacity-30 -z-1"
            src={slides[current].bgImageUrl}
            alt=""
          />
          <div className="flex justify-between items-center gap-x-2 flex-col lg:flex-row text-center lg:text-left">
            <div className="max-w-xl">
              <h3 className="text-2xl lg:text-5xl font-bold mb-4 lg:mb-8">{slides[current].heading}</h3>
              <p className="text-sm lg:text-xl mb-4 lg:mb-16 leading-relaxed">{slides[current].subHeading}</p>
              <Link
                className="bg-white rounded-xl text-black text-sm lg:text-2xl px-6 py-3 inline-block"
                href={slides[current].href}
              >
                {slides[current].linkText}
              </Link>
            </div>

            <div className="mt-12 lg:mt-0 flex-no-shrink">
              <Image
                width={1080}
                height={916}
                className="object-cover h-[15rem] w-[15rem] lg:h-[25rem] lg:w-[25rem]"
                src={slides[current].bgImageUrl}
                alt=""
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* arrow right */}
      <div
        className="absolute right-0 top-[50%] -translate-y-[50%] z-30 pl-2 lg:pl-20 rotate-180 cursor-pointer"
        onClick={nextSlide}
      >
        <IconChevronCompactLeft className="text-white h-10 w-10" />
      </div>
    </div>
  );
}
