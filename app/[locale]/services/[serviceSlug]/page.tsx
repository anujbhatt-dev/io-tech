import Service from '@/components/Service'
import { fetchServiceData } from '@/utils/data'
import React from 'react'

export default async function SetviceSlugPage({params}:{params:Promise<{serviceSlug:string,locale:"en"|"ar"}>}) {
  const {serviceSlug, locale} = await params

  const serviceData = await fetchServiceData({serviceSlug,locale})

  if(!serviceData) return null

  return (
    <Service locale={locale} data={serviceData}/>
  )
}
