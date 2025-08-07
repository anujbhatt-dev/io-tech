"use client"
import { dm_sans } from '@/utils/fonts'
import React, { ReactNode } from 'react'
import Appbar from './Appbar'

export default function Providers(
    {children}:{children:ReactNode}
) {

  return (
    <div className={`${dm_sans.className}`}>
        <Appbar/> 
        {children}
    </div>
  )
}
