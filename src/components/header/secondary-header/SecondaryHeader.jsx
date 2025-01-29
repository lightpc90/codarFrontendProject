'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'


const SecondaryHeader = () => {
    const pathname = usePathname()
    // secondary header should not render on home page
    if (pathname === '/') return

    let title = pathname.split('/')[1]
    const getTitle = () => {
        switch (title) {
            case 'contact':
                return { title: "Contact Us", desc: "Contact Us" }
            case 'shop':
                return { title: "Organi Shop", desc: "Shop" }
            default:
                return {
                    title: `${title[0].toUpperCase()}${title.slice(1)}`,
                    desc: `${title[0].toUpperCase()}${title.slice(1)}`
                }
        }
    }

    return (
        <div className='bg-slate-800 flex flex-col items-center justify-center text-white h-[150px]'>
            <h1 className='text-4xl font-bold '>
                {getTitle().title}
            </h1>
            <span>
                <Link href='/' className='font-bold mr-2'>Home-</Link>
                {getTitle().desc}
            </span>
        </div>
    )
}

export default SecondaryHeader