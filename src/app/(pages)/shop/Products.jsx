import FeaturedProductLayout from '@/components/featuredProducts/FeaturedProductLayout'
import { FeaturedProducts } from '@/utils/data'
import Link from 'next/link'
import { IoIosArrowRoundForward } from "react-icons/io";
import React from 'react'
import { IoGrid } from 'react-icons/io5'
import { MdFormatListBulleted, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import Pagination from './Pagination';

const Products = () => {
    return (
        <div className='w-full flex flex-col items-center'>
            <div className='flex flex-col lg:flex-row gap-2 items-center justify-between'>
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
            <div className='flex flex-wrap gap-4 justify-center 2xl:justify-between my-8'>
                {FeaturedProducts.map((product, i) => (
                    <FeaturedProductLayout key={i} item={product} />
                ))}
            </div>
            <div className='w-full'>
                <Pagination />
            </div>
        </div>
    )
}

export default Products