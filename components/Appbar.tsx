import { NavItems, NavItemsType } from '@/utils/data'
import Link from 'next/link'
import React from 'react'

export default function Appbar() {
  
  return (

    <div className='flex justify-between items-center px-20 h-[4rem] z-50'>
        <div>
          LOGO
        </div>
        <div className='flex gap-x-8 relative'>
        {
          NavItems.map((navItem, i) => {
            if(navItem.type===NavItemsType.LINK){
              return <Link key={navItem.text+i} href={navItem.href || "/"}>{navItem.text}</Link>
            }else{
              return <div key={navItem.text+i}>{navItem.text}</div>
            }
          })
        }
        <div className='absolute top-[100%] p-10 grid grid-cols-4 gap-x-4 gap-y-8 rounded-b-3xl left-[50%] -translate-x-[50%] w-[90vw]'>
              {NavItems[1].dropdownItems?.map((dropdownItem,i)=>(
                  <Link key={dropdownItem.text+i} href={dropdownItem.href || "/"}>{dropdownItem.text}</Link>
              ))}
        </div>
        </div>
        <div className='flex gap-x-8'>

        </div>
    </div>
  )
}
