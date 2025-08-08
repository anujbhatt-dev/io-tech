import React from 'react'

export default async function SetviceSlugPage({params}:{params:Promise<{serviceSlug:string}>}) {
  const {serviceSlug} = await params


  return (
    <div className='mt-[4rem]'>SetviceSlugPage {serviceSlug}</div>
  )
}
