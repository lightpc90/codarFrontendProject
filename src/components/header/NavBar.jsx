'use client'

import React from 'react'
import { Navlinks } from '@/utils/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Likes from '../productIcons/Likes'
import Carts from '../productIcons/Carts'

const Navbar = () => {
    const pathname = usePathname()
    return (
        <div className='flex justify-between px-8 2xl:px-[380px] items-center'>
            <div>
                <Image src="/images/logo.png.webp" alt="logo" width={100} height={100} />
            </div>
            <div className='flex gap-12 font-bold'>
                {Navlinks.map((link) => (
                    <Link  className={`transition-all duration-500 delay-100 ${pathname === link.link ? 'text-primary' : ''}  hover:text-primary`} key={link.name} href={link.link}>{link.name.toUpperCase()}</Link>
                ))}
            </div>
            <div className='flex gap-8 items-center'>

            <div className='flex gap-4 items-center text-[22px]'>
                <Likes />
                <Carts/>
                </div>
                <p className='text-sm'>item: <span className='font-bold '>$150.00</span></p>
            </div>
        </div>
    )
}

export default Navbar