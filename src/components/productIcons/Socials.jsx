import Link from 'next/link';
import React from 'react'
import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin, TiSocialPinterest } from "react-icons/ti";

const Socials = () => {
    return (
        <div className='flex gap-4 items-center'>
            <Link href="/" className={`bg-white inline-flex w-9 h-9 justify-center items-center rounded-full transition-all duration-500 delay-100 hover:bg-primary hover:text-white`}>
                <TiSocialFacebook  size={22} />
            </Link>
            <Link href="/" className={`bg-white inline-flex w-9 h-9 justify-center items-center rounded-full transition-all duration-500 delay-100 hover:bg-primary hover:text-white`}>
                <TiSocialTwitter size={22} />
            </Link>
            <Link href="/" className={`bg-white inline-flex w-9 h-9 justify-center items-center rounded-full transition-all duration-500 delay-100 hover:bg-primary hover:text-white`}>
                <TiSocialLinkedin size={22} />
            </Link>
            <Link href="/" className={`bg-white inline-flex w-9 h-9 justify-center items-center rounded-full transition-all duration-500 delay-100 hover:bg-primary hover:text-white`}>
                <TiSocialPinterest size={22} />
            </Link>
        </div>
    )
}

export default Socials