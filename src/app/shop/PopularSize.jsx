import React from 'react'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'

const PopularSize = () => {
    return (
        <div className='w-full 2xl:w-[200px]' >
            <h2 className='font-bold text-2xl my-6' >Popular Size</h2>
            <div className='flex flex-wrap gap-4'>
                <span className='bg-gray-300 py-1 px-5'>Large</span>
                <span className='bg-gray-300 py-1 px-5'>Medium</span>
                <span className='bg-gray-300 py-1 px-5'>Small</span>
                <span className='bg-gray-300 py-1 px-5'>Tiny</span>

            </div>
        </div>
    )
}

export default PopularSize