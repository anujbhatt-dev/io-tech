import Service from '@/components/Service'
import React from 'react'

export default async function SetviceSlugPage({params}:{params:Promise<{serviceSlug:string}>}) {
  const {serviceSlug} = await params
  const data:any = []

  return (
    <Service data={data}/>
  )
}
