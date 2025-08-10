import React from 'react'
import Hero from './Hero'
import OurTeam from './OurTeam'
import Testimonials from './Testimonials'
import { fetchHeroData } from '@/utils/data'
import { HeroSlideSchema } from '@/types'



export default async function Landing({locale}:{locale:"en"|"ar"}) {
  const slides:HeroSlideSchema[] = await fetchHeroData({locale});
  if(!slides) return null
  return (
    <div className=''>
        <Hero locale={locale} slides={slides} />
        <OurTeam locale={locale}/>
        <Testimonials locale={locale}/>
    </div>
  )
}
