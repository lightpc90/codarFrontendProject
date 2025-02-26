'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import {motion} from "framer-motion"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductReaction from '@/components/productIcons/ProductReaction';


const products = [
  { image: "/images/dried-fruit.webp", name: `Raisin'n'nuts` },
  { image: "/images/grapes.png", name: `Raisin'n'nuts` },
  { image: "/images/vegetables.png", name: `Vegetables' Package` },
  { image: "/images/mango.png", name: `Raisin'n'nuts` },
  { image: "/images/drink-fruits.webp", name: `Mixed fruits` },
  { image: "/images/burger.png", name: `Raisin'n'nuts` },
]

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  pagination: true,
  autoplaySpeed: 5000,
  arrows: false,
  cssEase: "ease-in-out", // Custom easing
};

const Layout = ({ product }) => {
  const [isHover, setHover] = useState(false)
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }} // Animate in from below
      animate={{ opacity: 1, scale: 1 }} // Set final position
      exit={{ opacity: 0, scale: 0.9 }} // Animate out upward
      transition={{ type: "spring", stiffness: "300", damping: "30", duration: 0.5 }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='flex flex-col items-center justify-center gap-2'>
      <div className='w-[270px] h-[250px] flex
                   bg-gray-200 rounded-md items-center justify-center relative'>
        <Image src={product.image} alt={`image`} width={170} height={170} className='' />
        <div className={`absolute bottom-[10%] transition-all ${isHover ? 'animate-slideUp' : 'animate-slideDown'}`}>
          <ProductReaction />
        </div>
        <span className='bg-rose-700 text-white p-1 absolute top-3 left-3
         h-[40px] w-[40px] text-sm flex items-center justify-center rounded-full'>-20%</span>
      </div>
      <p className='text-gray-400 text-sm'>Dried Fruit</p>
      <h1 className='mt-2'>{product.name}</h1>
      <div>
      <span className='font-bold mb-6 mr-2'>{product.price || "$30.00"}</span>
        <span className='text-gray-400'>$30.00</span>
      </div>
    </motion.div>
  )
}


const SaleOff = () => {
  return (
    <div className='w-full'>
      <span className='text-4xl inline-flex font-bold border-b-4 border-primary pb-2 mb-12'>Sale Off</span>
      <div className=' h-[350px] max-w-[1000px]'>
        <Slider {...settings}>
          {products.map((product, index) => (
           <Layout key={index} product={product}/>
         ))}
        </Slider>
      </div>
    </div>
  )
}

export default SaleOff