
'use client'

import { useState, useRef, useEffect } from 'react'
import { Navlinks } from '@/utils/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Likes from '../productIcons/Likes'
import Carts from '../productIcons/Carts'
import PagesTooltip from './PagesTooltip'
import { motion, AnimatePresence } from "framer-motion"
import { CgMenu } from "react-icons/cg";
import { Email, Language, Login, Socials } from './ContactBar'

import MobileSlideIn from './MobileSlideIn'


export const CartSection = () => {
    return (
        <section className='flex gap-8 items-center'>
            <div className='flex gap-4 items-center text-[22px]'>
                <Likes />
                <Carts />
            </div>
            <p className='text-sm'>item: <span className='font-bold '>$150.00</span></p>
        </section>
    )
}

const Navbar = () => {
    const pathname = usePathname()
    const [showComponent, setShowComponent] = useState(false);
    const wrapperRef = useRef(null); // Parent wrapper ref
    const timeoutRef = useRef(null);

    // Consolidated hover handling
    const handleHoverStart = () => {
        clearTimeout(timeoutRef.current)
        setShowComponent(true)
    }

    const handleHoverEnd = () => {
        timeoutRef.current = setTimeout(() => {
            setShowComponent(false)
        }, 300) // Matched with animation duration
    }

    // Cleanup
    useEffect(() => {
        return () => clearTimeout(timeoutRef.current)
    }, [])

    return (
        <div className='flex flex-col xl:flex-row gap-8 mt-6 justify-between px-8 2xl:px-[380px] items-center w-full'>
            {/* Logo section */}
            <section className='flex items-center justify-between w-full xl:w-[120px]'>
                <div className='w-[120px] '>
                    <Image src="/images/logo.png.webp" alt="logo" width={100} height={100} className='w-full' />
                </div>
                <div className='xl:hidden border-[1px] border-gray-500 p-1 '>
                    <CgMenu size={25} />
                </div>
                {/* mobile slide in menu */}
                <AnimatePresence>
                    <MobileSlideIn />
                </AnimatePresence>
            </section>
            <section className='hidden xl:flex gap-12 font-bold'>
                {Navlinks.map(({ name, link }, i) => (
                    name === 'pages' ? (
                        <div
                            key={i}
                            ref={wrapperRef}
                            className='relative'
                            onMouseEnter={handleHoverStart}
                            onMouseLeave={handleHoverEnd}
                        >
                            <Link
                                href={pathname}
                                className={`transition-all duration-500 delay-100 
                                    ${pathname === link && 'text-primary'} 
                                    hover:text-primary`}
                            >
                                {name.toUpperCase()}
                            </Link>

                            <AnimatePresence>
                                {showComponent && (
                                    <motion.div
                                        key={'tooltip'}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ duration: 0.3 }}
                                        className='absolute top-full left-0 pt-2'
                                        onMouseEnter={handleHoverStart}
                                        onMouseLeave={handleHoverEnd}
                                    >
                                        <PagesTooltip />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <Link
                            key={i}
                            href={link}
                            className={`transition-all duration-500 delay-100 
                                ${pathname === link && 'text-primary'} 
                                hover:text-primary`}
                        >
                            {name.toUpperCase()}
                        </Link>
                    )
                ))}
            </section>

            {/* Cart section */}
            <section className='flex gap-8 items-center'>
                <div className='flex gap-4 items-center text-[22px]'>
                    <Likes />
                    <Carts />
                </div>
                <p className='text-sm'>item: <span className='font-bold '>$150.00</span></p>
            </section>
        </div>
    )
}

export default Navbar