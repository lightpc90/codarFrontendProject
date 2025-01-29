import FeaturedProductLayout from '@/components/featuredProducts/FeaturedProductLayout'
import { FeaturedProducts } from '@/utils/data'
import Link from 'next/link'
import { IoIosArrowRoundForward } from "react-icons/io";
import React from 'react'
import { IoGrid } from 'react-icons/io5'
import { MdFormatListBulleted, MdOutlineKeyboardArrowDown } from 'react-icons/md'

const Products = () => {
    return (
        <div className=''>
            <div className='flex gap-2 items-center justify-between'>
                <div className='flex items-center '>
                    <span className='text-gray-400'>
                        Sort By
                    </span>
                    <button className='font-bold ml-6'>Default</button>
                    <MdOutlineKeyboardArrowDown size={22} />
                </div>
                <div className='flex gap-2 items-center'>
                    <span className='font-bold'>16</span>
                    <span className='text-gray-400'>
                        Products found
                    </span>
                </div>
                <div className='text-gray-400 flex items-center gap-3 '>
                    <IoGrid size={22} />
                    <MdFormatListBulleted size={22} />
                </div>
            </div>
            {/* list of products */}
            <div className='flex flex-wrap gap-4 justify-between my-8'>
                {FeaturedProducts.map((product, i) => (
                    <FeaturedProductLayout key={i} item={product} />
                ))}
            </div>
            <span className=' flex items-center'>
                {[1, 2, 3,].map((item, i) => (
                    <Link key={i} href={`/shop`} className='border-[2px] border-gray-300 h-8 w-8 inline-flex 
                items-center justify-center font-semibold text-gray-400 mr-6
                transition-all duration-500 delay-100 hover:bg-primary hover:border-none hover:text-white
                '>
                        {item}
                    </Link>
                ))}
                <Link href={`/shop`} className='border-[2px] border-gray-300 h-8 w-8 inline-flex 
                items-center justify-center font-semibold text-gray-500
                transition-all duration-500 delay-100 hover:bg-primary hover:border-none hover:text-white
                '>
                    <IoIosArrowRoundForward size={20}/>
                </Link>
                
            </span>
        </div>
    )
}

export default Products