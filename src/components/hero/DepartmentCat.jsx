'use client'

import Link from 'next/link';
import { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Categories } from '@/utils/data';

const DepartmentCat = () => {
    const [showLinks, setShowLinks] = useState(false)
    return (
        <div className='mb-[50px]'>
            <button onClick={() => setShowLinks(!showLinks)} className='bg-primary text-white p-2 h-12 font-bold w-[250px] flex gap-2 items-center justify-around relative'>
                <span className='flex gap-2'>
                    <IoMenu size={22} />
                    All departments
                </span>
                <RiArrowDropDownLine size={22} />
            </button>
            {showLinks &&
                <div className='absolute z-[1000] bg-white w-[250px] flex flex-col gap-3 pl-6 py-4 border-[1px] transition-all duration-500 ease-in-out'>
                    {Categories.map((item) => (
                        <Link key={item} href={`/`}>{item}</Link>
                    ))}
                </div>
            }
        </div>
    )
}

export default DepartmentCat