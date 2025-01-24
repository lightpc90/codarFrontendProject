'use client'

import Link from 'next/link';
import React from 'react'
import { IoMenu } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Categories } from '@/utils/data';

const DepartmentCat = () => {
    return (
        <div>

            <button className='bg-primary text-white p-2 h-12 font-bold w-[250px] flex gap-2 items-center justify-around'>
                <span className='flex gap-2'>
                    <IoMenu size={22} />
                    All departments
                </span>
                <RiArrowDropDownLine size={22} />
            </button>
            <div className='flex flex-col gap-3 pl-6 py-4 border-[1px] transition-all duration-500 ease-in-out'>
                {Categories.map((item) => (
                    <Link key={item} href={`/`}>{item}</Link>
                ))}
            </div>
        </div>
    )
}

export default DepartmentCat