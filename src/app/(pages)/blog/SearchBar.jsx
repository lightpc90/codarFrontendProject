import React from 'react'
import { LiaSearchSolid } from "react-icons/lia";

const SearchBar = () => {
    return (
        <div className='w-[350px] relative'>
            <input type='text' id='search' placeholder='Search...'
                className='py-3 rounded-2xl border-[1px] border-gray-300 w-full pl-6 pr-[25px] outline-none'
            />
            <div className='absolute right-[20px] top-[50%] translate-y-[-50%] text-gray-500'>
                <LiaSearchSolid size={20} />
            </div>
        </div>
    )
}

export default SearchBar