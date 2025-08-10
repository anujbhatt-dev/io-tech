"use client"

import { Link } from '@/i18n/navigation'
import { strapiMediaUrl } from '@/utils/data'
import { IconBrandWhatsapp, IconMail, IconPhone, IconChevronCompactLeft, IconChevronCompactRight } from '@tabler/icons-react'
import Image from 'next/image'
import React, { useRef, useState, useEffect } from 'react'

type Member = {
  name: string
  position: string
  whatsapp: string
  phone: string
  email: string
  imageUrl: {
    alternativeText:string,
    url:string
  }
}

export default function TeamSlider({ members }: { members: Member[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)
  const [cardWidth, setCardWidth] = useState(0)

  const checkArrows = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setShowLeft(scrollLeft > 0)
    setShowRight(scrollLeft + clientWidth < scrollWidth - 1)
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    checkArrows()
    const el = scrollRef.current
    if (el) {
      el.addEventListener("scroll", checkArrows)
      return () => el.removeEventListener("scroll", checkArrows)
    }
  }, [])

  // Measure card width dynamically for current screen size
  useEffect(() => {
    const measure = () => {
      if (cardRef.current) {
        const style = window.getComputedStyle(cardRef.current)
        const gap = parseFloat(style.marginRight) || 0
        setCardWidth(cardRef.current.offsetWidth + gap)
      }
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [members])

  return (
    <div className="relative w-full lg:px-20">
      <div className="relative">
        {/* left arrow */}
        {showLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 lg:-left-24 top-1/2 -translate-y-1/2 z-10"
          >
            <IconChevronCompactLeft />
          </button>
        )}

        {/* right arrow */}
        {showRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 lg:-right-24 top-1/2 -translate-y-1/2 z-10"
          >
            <IconChevronCompactRight />
          </button>
        )}

        {/* slider */}
        <div
          ref={scrollRef}
          className="flex justify-start gap-0 items-start overflow-x-auto scroll-smooth no-scrollbar "
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {members.map((member, i) => (
            <div
              ref={i === 0 ? cardRef : null} // measure first card
              key={member.name + i}
              className="
                flex flex-col justify-center items-center 
                flex-shrink-0 scroll-snap-align-start
                w-full sm:w-[calc((100%-2rem)/3)]" 
              style={{ marginRight: '1rem' }} // gap-4 = 1rem
            >
              <Image
                width={1080}
                height={916}
                className="w-full h-[15rem] object-cover origin-top"
                src={`${strapiMediaUrl}${member.imageUrl.url}`}
                alt=""
              />
              <p className="py-3 pb-2 font-bold text-xl text-[#4e2618]">{member.name}</p>
              <p className="pb-3 text-lg text-neutral-500">{member.position}</p>
              <div className="flex justify-center items-center gap-4">
                <Link href={member.whatsapp} target='_blank' className={""}><IconBrandWhatsapp /></Link>
                <Link href={"tel:"+member.whatsapp}  className={""}><IconPhone /></Link>
                <Link href={"mailto:"+member.whatsapp} className={""}><IconMail /></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
