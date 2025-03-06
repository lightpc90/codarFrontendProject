'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { CartSection } from './NavBar'
import { Email, Language, Login, Socials } from './ContactBar'
import { CgMenu } from "react-icons/cg";
import Link from 'next/link'
import { RiArrowDownSFill } from "react-icons/ri";
import { useMobileMenu } from '../mobileMenuContext/MobileMenuContext'

const menuLinks = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "Pages", link: "#" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
]
const pagesLinks = [
    { name: "Shop Details", link: "/shop-details" },
    { name: "Shopping Cart", link: "/shopping-cart" },
    { name: "Check Out", link: "/checkout" },
    { name: "Blog Details", link: "/blog-details" },
]

const PagesMenu = () => {
    const [pagesOpen, setPagesOpen] = React.useState(false)
    const { setOpenSlideIn } = useMobileMenu()
    {
        return (
            <div>
                <button className='flex items-center gap-2' onClick={() => setPagesOpen(!pagesOpen)}>
                    Pages
                    <span className={`transition-all ${pagesOpen ? 'rotate-0' : 'rotate-[-90deg]'}`}>
                        <RiArrowDownSFill />
                    </span>
                </button>
                <AnimatePresence>
                    {pagesOpen && (
                        <motion.ul
                            onClick={(e) => e.stopPropagation()}
                            key={'mobile-menu'}
                            initial={{ opacity: 0.5, maxHeight: 0 }}
                            animate={{ opacity: 1, maxHeight: 400 }}
                            exit={{ opacity: 0.5, maxHeight: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className='flex flex-col gap-4 mt-3 bg-inherit'>
                            {pagesLinks.map((link, i) => (
                                (
                                    <li key={i} className='text-sm pl-4'>
                                        <Link onClick={() => setOpenSlideIn(false)} href={link.link}>{link.name}</Link>
                                    </li>
                                )
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        )
    }
}

const MobileSlideIn = () => {
    const { setOpenSlideIn } = useMobileMenu()
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}

            className='lg:hidden absolute top-0 left-0 w-[70%] h-screen shadow-md bg-white z-50 flex flex-col gap-6 p-8'
        >
            {/* logo */}
            <div className='w-[120px] '>
                <Image src="/images/logo.png.webp" alt="logo" width={100} height={100} className='w-full' />
            </div>
            {/* cart section */}
            <CartSection />
            {/* country and login */}
            <span className='flex items-center gap-4'>
                <Language />
                <Login />
            </span>
            {/* navlinks and social */}
            <div className='flex flex-col gap-1'>
                <div className='bg-zinc-700 w-full py-2 text-white flex text-sm flex-col gap-2 px-3'>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className='w-fit p-2 text-sm self-end bg-zinc-900 rounded-md flex gap-1'>
                        MENU <CgMenu size={20} />
                    </button>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.ul
                                key={'mobile-menu'}
                                initial={{ opacity: 0.5, maxHeight: 0 }}
                                animate={{ opacity: 1, maxHeight: 400 }}
                                exit={{ opacity: 0.5, maxHeight: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className='flex flex-col gap-4 bg-inherit p-4'>
                                {menuLinks.map((link, i) => (
                                    link.name === "Pages" ? (
                                        <>
                                            <PagesMenu />
                                        </>
                                    ) : (
                                        <li key={i} className='text-sm '>
                                            <Link onClick={() => setOpenSlideIn(false)} href={link.link}>{link.name}</Link>
                                        </li>
                                    )
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
                <Socials />
            </div>
            {/* email and company's preposition */}
            <div className='text-sm'>
                <Email />
                <p>Free Shipping for all Order of $99</p>
            </div>
        </motion.div>
    )
}

export default MobileSlideIn