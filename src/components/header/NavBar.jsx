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

const Navbar = () => {
    const pathname = usePathname()
    const [showComponent, setShowComponent] = useState(false);
    const linkRef = useRef(null); // Ref to track the 'page' link element
    const tooltipRef = useRef(null);
    const timeoutRef = useRef(null);


    const handleMouseEnter = () => {
        // clear any pending hide operations
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }
        setShowComponent(true);
    };

    const handleMouseLeave = (event) => {
        if (tooltipRef.current?.contains(event.relatedTarget)) return; // Don't hide the tooltip
        // start hiding after delay
        timeoutRef.current = setTimeout(() => {
            setShowComponent(false)
        }, 300)
    };

    const handleTooltipMouseLeave = (event) => {
        // Check if the mouse is moving to the 'page' link
        if (linkRef.current?.contains(event.relatedTarget)) return; // Don't hide the tooltip

        // start hiding after delay
        timeoutRef.current = setTimeout(() => {
            setShowComponent(false)
        }, 300)
    };

    // clear timeout on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [])
    // Calculate the position of the 'page' link
    const getTooltipPosition = () => {
        if (linkRef.current) {
            const rect = linkRef.current.getBoundingClientRect();
            return {
                top: rect.bottom + window.scrollY + 5, // 5px below the link
                left: rect.left + window.scrollX
            };
        }
        return { top: 0, left: 0 };
    };

    const tooltipPosition = getTooltipPosition();
    console.log("ref: ", linkRef.current)
    console.log("top: ", tooltipPosition.top)
    console.log("left: ", tooltipPosition.left)
    return (
        <div className='flex flex-col xl:flex-row gap-8 mt-6 justify-between px-8 2xl:px-[380px] items-center w-full'>
            <div className='flex items-center justify-between w-full xl:w-[120px]'>
                <div className='w-[120px] '>
                    <Image src="/images/logo.png.webp" alt="logo" width={100} height={100} className='w-full' />
                </div>
                <div className='xl:hidden'>
                    X
                </div>
            </div>
            <div className='hidden xl:flex gap-12 font-bold'>
                {Navlinks.map(({ name, link }, i) => (
                    <Link
                        key={i} href={name === 'pages' ? pathname : link}
                        // spread conditional event handler and ref
                        {...(name === 'pages' && {
                            onMouseEnter: handleMouseEnter,
                            onMouseLeave: handleMouseLeave
                        })}
                        ref={name === 'pages' ? linkRef : null}

                        className={`transition-all duration-500 delay-100 
                            ${pathname === link && 'text-primary'} 
                            ${name === 'pages' && 'relative'}
                          hover:text-primary`}
                    >{name.toUpperCase()}</Link>
                ))}
                <div className={`absolute `} style={{
                    top: `${tooltipPosition.top}px`,
                    left: `${tooltipPosition.left}px`,
                    zIndex: 1000
                }}>
                    <AnimatePresence>
                        {showComponent &&
                            <motion.div
                                key={'tooltip'}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 100 }}
                                transition={{ duration: 0.5, }}
                                ref={tooltipRef}
                                onMouseLeave={handleTooltipMouseLeave} // Handle mouse leave for the tooltip
                            >
                                <PagesTooltip />
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>
            </div>
            {/* navlinks end here */}
            <div className='flex gap-8 items-center'>
                <div className='flex gap-4 items-center text-[22px]'>
                    <Likes />
                    <Carts />
                </div>
                <p className='text-sm'>item: <span className='font-bold '>$150.00</span></p>
            </div>
        </div>
    )
}

export default Navbar