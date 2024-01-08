import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'
type Features={
  title:string,
  icon:string,
  description:string
}
const FeatureItems = ({title ,icon, description}:Features)=>{
  return(
    <li className='flex flex-col gap-2'>
      <div className='rounded-full bg-green-50 w-[50px] p-3'>
        <Image src={icon} alt='map' width={50} height={50} />
      </div>
      <h2 className='bold-20'>{title}</h2>
      <p className='text-gray-50 bg-white/50'>{description}</p>
    </li>
  )
}
const Feature = () => {
  return (
    <section className=' bg-feature-bg'>
      <div className='max-container relative justify-between gap-20 mt-28 flex'>

      <div className='flex flex-1'>
        <Image src="/phone.png" alt='phone' width={400} height={1000} className='feature-phone'/>
      </div>
      <div>
      <Image src='/camp.svg' width={50} height={50} alt='camp' />
      <h1 className='bold-40'>Our Features</h1>
      <ul className='grid md:grid-cols-2 mt-7 gap-20'>
        {FEATURES.map(item=>{
          return(
            <FeatureItems key={item.title} title={item.title} description={item.description} icon={item.icon}/>
          )
        })}
      </ul>
      </div>
      </div>
    </section>
  )
}

export default Feature
