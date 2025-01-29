import React from 'react'
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
    MdFormatListBulleted
} from 'react-icons/md'

const LatestProducts = () => {
    return (
        <div className=' w-full'>
            <span className='flex gap-2 justify-between w-full items-center'>
                <h2 className='font-bold text-2xl my-4'>Latest Products</h2>
                <div className="flex gap-2 items-center">
                    <button className="bg-gray-300 inline-flex p-2">
                        <MdOutlineKeyboardArrowLeft size={20} />
                    </button>
                    <button className="bg-gray-300 inline-flex p-2">
                        <MdOutlineKeyboardArrowRight size={20} />
                    </button>
                </div>
            </span>
            {/* carousel */}
            <div className='bg-gray-700 h-[500px]'></div>
        </div>
    )
}

export default LatestProducts