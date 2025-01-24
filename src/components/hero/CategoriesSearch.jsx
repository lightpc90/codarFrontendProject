import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

const CategoriesSearch = () => {
    return (
        <div className='flex'>
            <div className='flex items-center gap-2 h-[50px] border-2 p-4'>
                <div className='flex gap-4 items-center font-bold'>
                    All Categories
                    <RiArrowDropDownLine />
                </div>
                <span className='text-gray-400'>|</span>
                <input type='text' name='search' placeholder='What do you need?' className='p-2 outline-none 2xl:w-[330px]' />
            </div>
            <button className='bg-primary p-2 font-bold text-white h-[50px] w-[100px]'>SEARCH</button>
        </div>
    )
}

export default CategoriesSearch