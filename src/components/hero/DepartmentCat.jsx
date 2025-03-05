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
                        initial={{ opacity: 0.5, maxHeight: 0 }}
                        animate={{ opacity: 1, maxHeight: 500 }} // Set final position
                        exit={{ opacity: 0.5, maxHeight: 0 }} // Animate out upward
                        // transition={{ type: "spring", stiffness: 100, damping: 50 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className=' bg-white w-full xl:w-[250px] overflow-hidden flex flex-col gap-3 pl-6 py-4 border-[1px] '>
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