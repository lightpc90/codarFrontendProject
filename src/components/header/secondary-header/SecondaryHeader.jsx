'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'


const SecondaryHeader = () => {
    const pathname = usePathname()
    // secondary header should not render on home page
    if (pathname === '/') return

    const title = pathname.split('/')[1]
    const getTitle = () => {
        switch (title) {
            case 'contact':
                return { title: "Contact Us", desc: "Contact Us" }
            case 'blog':
                return { title: "Blog", desc: "Blog" }
            case 'shop':
                return { title: "Organi Shop", desc: "Shop" }
            case 'shop-details':
                return { title: `Vegetable's Package`, category: `Vegetables`, desc: `Vegetable's Package` }
            case 'shopping-cart':
                return { title: `Shopping Cart`, desc: `Shopping Cart` }
            case 'checkout':
                return { title: `Checkout`, desc: `Checkout` }
            case 'blog-details':
                return {
                    title: `The Moment You Need To Remove Garlic From The Menu`, blogDetails: {
                        author: "By Micheal Scofield",
                        date: "January 14, 2019",
                        comments: "8 Comments"
                    }
                }
            default:
                return {
                    title: `${title[0].toUpperCase()}${title.slice(1)}`,
                    desc: `${title[0].toUpperCase()}${title.slice(1)}`
                }
        }
    }

    return (
        <div className={`relative bg-slate-800 flex flex-col items-center mt-12 justify-center text-white ${title === 'blog-details' ? "h-[350px]" : 'h-[230px] lg:h-[160px]'} bg-cover bg-center`}
            style={{ backgroundImage: "linear-gradient(rgba(5, 5, 5, 0.9), rgba(50, 50, 0, 0.7)), url('/images/tomatoes.jpg')" }} >
            <h1 className={` text-center font-[1000] lg:font-[900] ${pathname === '/blog-details' ? 'text-[25px] 2xl:text-[50px]' : 'text-[50px]' }`}>
                {getTitle().title}
            </h1>
            {title === "blog-details" ? <div className='flex justify-center flex-wrap gap-x-3 px-4 mt-4 items-center'>
                <span className='inline-flex '>{getTitle().blogDetails.author}</span>|
                <span className='inline-flex'>{getTitle().blogDetails.date}</span>|
                <span className='inline-flex'>{getTitle().blogDetails.comments}</span>
            </div> : <span>
                <Link href='/' className='font-bold mr-2'>Home-</Link>
                {getTitle().category && <Link href='/' className='font-bold mr-2'>Vegetables-</Link>}
                {getTitle().desc}
            </span>}
           
        </div>
    )
}

export default SecondaryHeader