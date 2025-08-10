import React, { useEffect, useState } from 'react'
import SubscribeForm from './SubscribeForm'
import Link from 'next/link'
import { IconBrandFacebook, IconBrandFacebookFilled, IconBrandGoogle, IconBrandGoogleFilled, IconBrandTwitter, IconBrandTwitterFilled, IconCopyright } from '@tabler/icons-react'
import { fetchGlobalData } from '@/utils/data'


interface FooterSchema{
    copyright:string,
    navLinks:{
        label:string,
        href:string,
    }[],
    socialLinks:{
        label:string,
        href:string,
    }[]
}

export default function Footer({locale}:{locale:"ar"|"en"}) {
    const [footerData,setFooterData] = useState<FooterSchema | null>(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const fetchAppbarData = async () => {
          const data = (await fetchGlobalData({locale})).footer;
          setFooterData(data)        
          setLoading(false)
        }

        fetchAppbarData()
    },[])

    if(loading) return null

  return (
    <div className='bg-white dark:bg-black brown:bg-[#4e2618] py-15 px-10 xl:px-30  z-50 text-black dark:text-white brown:text-white'>
        <div className='flex  flex-col lg:flex-row justify-end lg:items-center gap-8'>
            <SubscribeForm locale={locale}/>
            <h3>
                {locale==="en"?"Contacts":"جهات الاتصال"}
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
                    <Link href={footerData?.navLinks[0].href || ""}>
                    {footerData?.navLinks[0].label || ""}
                    </Link>
                    <Link href={footerData?.navLinks[1].href || ""}>
                    {footerData?.navLinks[1].label || ""}
                    </Link>
                    <Link href={footerData?.navLinks[2].href || ""}>
                    {footerData?.navLinks[2].label || ""}
                    </Link>
                    <Link href={footerData?.navLinks[3].href || ""}>
                    {footerData?.navLinks[3].label || ""}
                    </Link>
                    <Link href={footerData?.navLinks[4].href || ""}>
                    {footerData?.navLinks[4].label || ""}
                    </Link>
            </div>
            <div className=''>
                <p className='flex justify-center items-center gap-2'>
                    <IconCopyright/> 2025 {footerData?.copyright || ""}
                </p>
            </div>
        </div>
    </div>
  )
}
