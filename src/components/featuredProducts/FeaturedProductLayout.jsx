'use client'

import { useState } from 'react'
import Image from 'next/image'
import React from 'react'
import ProductReaction from '../productIcons/ProductReaction'
import { motion, AnimatePresence } from 'framer-motion'


const FeaturedProductLayout = ({ item }) => {
    const [isHover, setHover] = useState(false)
  return (
      <motion.div
          layout
          initial={{ opacity: 0, scale: 0.9 }} // Animate in from below
          animate={{ opacity: 1, scale: 1 }} // Set final position
          exit={{ opacity: 0, scale: 0.9 }} // Animate out upward
          transition={{ type: "spring", stiffness: "300", damping: "30", duration: 0.5  }}
          onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='flex flex-col items-center justify-center gap-2'>
          <div className='w-[260px] h-[300px] flex
                   bg-gray-200 rounded-md items-center justify-center justify-center relative'>
              <Image src={item.image} alt={item.name} width={200} height={200} className='' />
              <div className={`absolute bottom-[10%] transition-all ${isHover ? 'animate-slideUp': 'animate-slideDown'}`}>
                  <ProductReaction />
              </div>
          </div>
          <h1 className='mt-2'>{item.name}</h1>
          <p className='font-bold mb-6'>{item.price || "$30.00"}</p>
      </motion.div>
  )
}

export default FeaturedProductLayout