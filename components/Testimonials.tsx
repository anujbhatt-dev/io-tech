import React from "react"
import TestimonialsSlide from "./TestimonialsSlide"

export default function Testimonials() {
  const testimonialsData = [
    {
      imageUrl: "/hero-bg.jpg",
      testimony:
        "Working with this team was a fantastic experience. They delivered exactly what I needed on time and with exceptional quality. I couldn't be happier! Working with this team was a fantastic experience. They delivered exactly what I needed on time and with exceptional quality. I couldn't be happier!",
      name: "Sarah Johnson",
    },
    {
      imageUrl: "/hero-bg.jpg",
      testimony:
        "Their professionalism and attention to detail stood out. They truly care about the success of your project from start to finish. Working with this team was a fantastic experience. They delivered exactly what I needed on time and with exceptional quality. I couldn't be happier!",
      name: "Michael Smith",
    },
    {
      imageUrl: "/hero-bg.jpg",
      testimony:
        "A wonderful experience! The team went above and beyond to make sure every detail was perfect. I highly recommend them. Working with this team was a fantastic experience. They delivered exactly what I needed on time and with exceptional quality. I couldn't be happier!",
      name: "Emily Davis",
    },
  ]

  return (
    <div className="bg-white dark:bg-black brown:bg-[#4e2618] text-black dark:text-white brown:text-white min-h-screen border-b border-black/10 dark:border-white/10 brown:border-white/10 py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-10 font-bold">
          What our clients say
        </h3>
        <p className="opacity-70 max-w-xl text-sm sm:text-base lg:mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis doloribus voluptas consequuntur animi nobis esse sed, soluta adipisci corrupti nulla commodi, veritatis, in eligendi eaque aliquid aperiam? Sint odit eligendi soluta
        </p>
        <TestimonialsSlide testimonialsData={testimonialsData} />
      </div>
    </div>
  )
}
