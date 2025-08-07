"use client"
import { dm_sans } from '@/utils/fonts'
import React, { ReactNode } from 'react'

export default function Providers(
    {children}:{children:ReactNode}
) {

  return (
    <div className={`${dm_sans.className}`}>
        {children}
    </div>
  )
}
