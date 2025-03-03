'use client'

import Link from 'next/link';
import { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Categories } from '@/utils/data';
import { AnimatePresence, motion } from 'framer-motion';

const DepartmentCat = () => {
    const [showLinks, setShowLinks] = useState(false)
    return (
        <div className='mb-6 xl:mb-[50px] w-full xl:w-[250px]'>
            <button onClick={() => setShowLinks(!showLinks)}
                className='bg-primary text-white p-2 h-12 font-bold 
                w-full xl:w-[250px] flex gap-2 items-center justify-around'>
                <span className='flex gap-2'>
                    <IoMenu size={22} />
                    All departments
                </span>
                <RiArrowDropDownLine size={22} />
            </button>
            <AnimatePresence>
                {showLinks &&
                    <motion.div
                        initial={{ opacity: 0, y: -50 }} 
                        animate={{ opacity: 1, y: '0' }} // Set final position
                        exit={{ opacity: 0, y: -50 }} // Animate out upward
                        className=' bg-white w-full xl:w-[250px] flex flex-col gap-3 pl-6 py-4 border-[1px] transition-all duration-500 ease-in-out '>
                        {Categories.map((item) => (
                            <Link key={item} href={`/`}>{item}</Link>
                        ))}
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default DepartmentCat