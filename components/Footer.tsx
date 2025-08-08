import React from 'react'
import SubscribeForm from './SubscribeForm'
import Link from 'next/link'
import { IconBrandFacebook, IconBrandFacebookFilled, IconBrandGoogle, IconBrandGoogleFilled, IconBrandTwitter, IconBrandTwitterFilled, IconCopyright } from '@tabler/icons-react'

export default function Footer() {
  return (
    <div className='bg-white dark:bg-black brown:bg-[#4e2618] py-15 px-10 xl:px-30  z-50 text-black dark:text-white brown:text-white'>
        <div className='flex  flex-col lg:flex-row justify-end lg:items-center gap-8'>
            <SubscribeForm/>
            <h3>
                Contacts
            </h3>
            <div className='flex gap-4'>
                <Link href="/">
                    <IconBrandTwitterFilled/>
                </Link>
                <Link href="/">
                    <IconBrandFacebookFilled/>                    
                </Link>
                <Link href="/">
                    <IconBrandGoogleFilled/>
                </Link>
            </div>
        </div>
        <div className='w-full h-[2px] bg-black/20 dark:bg-white/20 brown:bg-white/20 my-10'>
        </div>
        <div className='flex justify-between  lg:items-center flex-wrap gap-4 flex-col lg:flex-row' >
            <div className='flex justify-center lg:items-center gap-4 flex-col lg:flex-row'>
                    <Link href={"/"}>
                        About Us
                    </Link>
                    <Link href={"/"}>
                        Our Strategy
                    </Link>
                    <Link href={"/"}>
                        Our Advantages
                    </Link>
                    <Link href={"/"}>
                        Social Resposibilities
                    </Link>
                    <Link href={"/"}>
                        Our Services
                    </Link>
            </div>
            <div className=''>
                <p className='flex justify-center items-center gap-2'>
                    <IconCopyright/> All rights reserved
                </p>
            </div>
        </div>
    </div>
  )
}
