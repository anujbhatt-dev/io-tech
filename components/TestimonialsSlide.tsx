"use client"

import Image from "next/image"
import React, { useState } from "react"
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import { motion, AnimatePresence } from "framer-motion"
import { strapiMediaUrl } from "@/utils/data"

type Testimonial = {
  imageUrl: {
    alternativeText:string,
    url:string
  },
  testimony: string
  name: string
}

export default function TestimonialsSlide({ testimonialsData }: { testimonialsData: Testimonial[], locale:"en" | "ar" }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1) // 1 for right, -1 for left

  const nextTestimonial = () => {
    setDirection(1)
    setIndex((prev) => (prev + 1) % testimonialsData.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  }

  return (
    <div className="relative overflow-hidden px-0 sm:px-8 md:px-0">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-8 lg:my-10 "
        >
          <div className="mt-2 md:mt-0 flex-shrink-0 flex lg:justify-center ">
            <Image
              width={1080}
              height={916}
              className="object-cover h-auto w-full md:h-[25rem] md:w-[25rem]"
              src={`${strapiMediaUrl}${testimonialsData[index].imageUrl.url}`}
              alt={testimonialsData[index].imageUrl.alternativeText || ""}
            />
          </div>
          <div className="col-span-2 flex flex-col justify-start mt-6 md:mt-0">
            <p className="opacity-70 text-sm sm:text-base">{testimonialsData[index].testimony}</p>
            <p className="lg:my-10 mt-2 mb-10 font-semibold text-lg">{testimonialsData[index].name}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows bottom-right */}
      <div className="lg:absolute lg:bottom-4 lg:right-4 flex gap-4 lg:gap-12">
        <button
            onClick={prevTestimonial}
            className="
            bg-black/80 dark:bg-white/80 brown:bg-[#74402d] 
            text-white dark:text-black brown:text-white 
            p-2 lg:p-4 rounded-full shadow
            transition 
            hover:bg-black/60 dark:hover:bg-white/60 brown:hover:bg-[#96573f]
            hover:scale-110
            ease-in-out duration-300
            "
        >
            <IconArrowLeft />
        </button>
        <button
            onClick={nextTestimonial}
            className="
            bg-black dark:bg-white brown:bg-white 
            text-white dark:text-black brown:text-black 
            p-2 lg:p-4 rounded-full shadow
            transition 
            hover:bg-black/70 dark:hover:bg-white/70 brown:hover:bg-[#f0d9c4]
            hover:scale-110
            ease-in-out duration-300
            "
        >
            <IconArrowRight />
        </button>
        </div>

    </div>
  )
}
