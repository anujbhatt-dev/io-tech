import { IconBrandWhatsapp, IconMail, IconPhone } from '@tabler/icons-react'
import { Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function OurTeam() {

  const members = [
    {
        name:"Name Here",
        position:"Full Stack Developer",
        wharsapp:"",
        phone:"",
        email:"",
        imageUrl:"/face.jpg"        
    },
    {
        name:"Name Here",
        position:"Full Stack Developer",
        wharsapp:"",
        phone:"",
        email:"",
        imageUrl:"/face.jpg"        
    },
    {
        name:"Name Here",
        position:"Full Stack Developer",
        wharsapp:"",
        phone:"",
        email:"",
        imageUrl:"/face.jpg"        
    },
    {
        name:"Name Here",
        position:"Full Stack Developer",
        wharsapp:"",
        phone:"",
        email:"",
        imageUrl:"/face.jpg"        
    },
    {
        name:"Name Here",
        position:"Full Stack Developer",
        wharsapp:"",
        phone:"",
        email:"",
        imageUrl:"/face.jpg"        
    },
  ]  
  return (
    <div className=' bg-[#f3f3f3] flex flex-col items-center px-[20rem] py-30 text-center'>
            <h2 className='text-center mb-5 text-5xl font-bold '>
                Our Team
            </h2>
            <p className='px-2 lg:px-0 max-w-3xl leading-relaxed text-neutral-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eos in. Molestiae aperiam facere reiciendis, eum labore aspernatur nemo quod sit quas corporis error perspiciatis voluptate 
            </p>
            <div className='overflow-hidden'>
                {/* arrow */}
                <div className='flex justify-center gap-4 items-center mt-10 '>
                {
                    members && members.map((member,i)=>(
                        <div key={member.name+i} className='flex flex-col justify-center items-center w-1/3 flex-shrink-0'>
                        <Image width={1080} height={916} className="w-[20rem] h-[15rem] object-cover origin-top"  src={member.imageUrl} alt=""/>
                        <p className='py-3 pb-2  font-bold text-xl'>{member.name}</p>
                        <p className='pb-3 text-lg text-neutral-500'>{member.position}</p>
                        <div className='flex justify-center items-center gap-4'>
                            <IconBrandWhatsapp/>
                            <IconPhone/>
                            <IconMail/>
                        </div>
                    </div>
                    ))
                }
                </div>
                {/* arrow */}
            </div>
    </div>
  )
}
