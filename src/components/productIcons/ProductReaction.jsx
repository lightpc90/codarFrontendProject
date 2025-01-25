'use client'

import Link from 'next/link';
import { useState } from 'react'
import { FaHeart, FaRetweet } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const ProductReaction = () => {
    
    return (
        <div className='flex gap-4'>
           
            <LinkComponent>
                <FaHeart />
            </LinkComponent>
            <LinkComponent>
                <FaRetweet />
            </LinkComponent>
            <LinkComponent>
                <FaCartShopping />
            </LinkComponent>
           
        </div>
    )
}

export default ProductReaction


const LinkComponent = ({ children }) => {
    const [isHover, setHover] = useState(false)
    return (
        <Link onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} href="/" className={`h-9 w-9 rounded-full bg-white flex items-center justify-center
          transition-all duration-500 delay-100 hover:bg-primary hover:text-white ${isHover ? 'animate-spin360' : 'animate-spin360Reverse'}`}>
            {children}
        </Link>
    )
}