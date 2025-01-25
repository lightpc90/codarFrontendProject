'use client'

import { useState } from 'react'
import Image from 'next/image'
import React from 'react'
import ProductReaction from '../productIcons/ProductReaction'


const FeaturedProductLayout = ({ item }) => {
    const [isHover, setHover] = useState(false)
  return (
      <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className='flex flex-col items-center justify-center gap-2'>
          <div className='w-[260px] h-[300px] flex
                   bg-gray-200 rounded-md items-center justify-center justify-center relative'>
              <Image src={item.image} alt={item.name} width={200} height={200} />
              <div className={`absolute bottom-[10%] transition-all ${isHover ? 'animate-slideUp': 'animate-slideDown'}`}>
                  <ProductReaction />
              </div>
          </div>
          <h1 className='mt-2'>{item.name}</h1>
          <p className='font-bold mb-6'>{item.price || "$30.00"}</p>
      </div>
  )
}

export default FeaturedProductLayout