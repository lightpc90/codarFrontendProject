'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { LuHeart } from "react-icons/lu";
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram, TiSocialPinterest } from "react-icons/ti";

import QuantityButton from './QuantityButton';
import PreviewCarousel from './PreviewCarousel';



const Preview = () => {
    const [quantity, setQuantity] = useState(1)
    return (
        <div className='flex gap-4 justify-between w-full'>
            <div className='w-[600px] '>
                <Image src={`/images/product-details-1.jpg.webp`} alt='product image' width={500} height={500} className='w-full' />
                <div className='w-full h-[150px] mt-6'>
                    <PreviewCarousel />
                </div>
            </div>
            {/* right */}
            <div className='flex flex-col gap-5'>
                <h1 className='font-bold text-2xl'>{`Vegetable's Package`}</h1>
                <div className='flex items-center gap-2 text-sm'>
                    <span className='flex text-yellow-500'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStarHalfStroke />
                    </span>
                    <p className='text-rose-800'>(18 reviews)</p>
                </div>
                <p className='text-rose-800 text-2xl font-bold'>$50.00</p>
                <p className='w-[550px]'>
                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                    Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula
                    elementum sed sit amet dui. Proin eget tortor risus.
                </p>
                {/* --------- */}
                <div className='flex items-center gap-2 h-[50px]'>
                    <QuantityButton quantity={quantity} setQuantity={setQuantity} />
                    <button className='bg-primary px-6 py-2 h-[50px] font-bold text-white'>ADD TO CART</button>
                    <button className='bg-gray-200 text-gray-500 px-6 py-2 h-[50px] font-bold'>
                        <LuHeart />
                    </button>
                </div>
                <div className='border-b-[1px] border-gray-200 w-full my-6'></div>
                <div className='flex gap-[100px]'>
                    <div className='flex flex-col gap-4'>
                        <p className='font-bold'>Availability</p>
                        <p className='font-bold'>Shipping</p>
                        <p className='font-bold'>Weight</p>
                        <p className='font-bold'>Share on</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p>In Stock</p>
                        <p>01 day shipping. <span className='text-rose-800'>Free pickup today</span></p>
                        <p>0.5kg</p>
                        <div className='flex items-center gap-3 text-lg'>
                            <TiSocialFacebook />
                            <TiSocialTwitter />
                            <TiSocialInstagram />
                            <TiSocialPinterest />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preview