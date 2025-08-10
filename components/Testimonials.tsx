import React from "react"
import TestimonialsSlide from "./TestimonialsSlide"
import { fetchTestimonialSectionData } from "@/utils/data"

export default async function Testimonials({locale}:{locale:"en"|"ar"}) {
  const testimonialSection = await fetchTestimonialSectionData({locale})
  const testimonialsData = testimonialSection.testimonialItems

  if(!testimonialSection || !testimonialsData) return null

  return (
    <div className="bg-white dark:bg-black brown:bg-[#4e2618] text-black dark:text-white brown:text-white min-h-screen border-b border-black/10 dark:border-white/10 brown:border-white/10 py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-10 font-bold text-[#4e2618] brown:text-white dark:text-white">
          {testimonialSection.heading}
        </h3>
        <p className="opacity-70 text-sm sm:text-base mb-5 lg:mb-10">
          {testimonialSection.subHeading}
        </p>
        <TestimonialsSlide locale={locale}  testimonialsData={testimonialsData} />
      </div>
    </div>
  )
}
