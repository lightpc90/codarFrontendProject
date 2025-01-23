import React from 'react'
import { MdEmail } from "react-icons/md";
import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin, TiSocialPinterest } from "react-icons/ti";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import Link from 'next/link';


const ContactBar = () => {
    return (

        <div className="hidden md:flex bg-secondary text-sm px-4 2xl:px-[380px]  h-[45px] items-center justify-between">
            <div className='flex gap-4'>
                <p className='flex gap-2 items-center'>
                    <MdEmail />
                    <span>hello@colorlib.com</span>
                </p>
                {/* vertical line break */}
                <div className='border-[2px] border-r-gray-400 h-[20px]'></div>
                <p>Free Shipping for all Order of $99</p>
            </div>
            <div className='flex gap-2 items-center'>
                {/* social media */}
                <Link href="/">
                <TiSocialFacebook size={20} />
                </Link>
                <Link href="/">
                <TiSocialTwitter size={20} />
                </Link>
                <Link href="/">
                <TiSocialLinkedin size={20} />
                </Link>
                <Link href="/">
                <TiSocialPinterest size={20} />
                </Link>
                {/* vertical line break */}
                <div className='border-[2px] border-r-gray-400 h-[20px]'></div>
                <Link href="/" className='flex gap-4 items-center'>
                    {/* USA flag */}
                    USA Flag
                    <span className='flex items-center'>

                    <p>English</p>
                    <RiArrowDropDownLine />
                    </span>
                </Link>
                {/* vertical line break */}
                <div className='border-[2px] border-r-gray-400 h-[20px]'></div>
                <Link href="/" className='flex gap-2 items-center'>
                    <IoPerson />
                    <p>Login</p>
                </Link>
            </div>
        </div>

    )
}

export default ContactBar