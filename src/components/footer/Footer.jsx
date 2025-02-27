import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FooterLink1, FooterLink2 } from '@/utils/data'
import Socials from '../productIcons/Socials'

const Footer = () => {
    const date = new Date().getFullYear()
    console.log("date", date)
    return (
        <footer className='w-full flex flex-wrap justify-between bg-tertiary mt-auto p-8 2xl:px-[380px] py-[100px]'>
            <div className='w-full flex flex-wrap justify-between'>
                {/* logo and address */}
                <div>
                    <Image src="/images/logo.png.webp" alt="logo" width={100} height={100} />
                    <div className='flex flex-col gap-2 my-8'>
                        <p>Address: 60-49 Road 11378 New York</p>
                        <p>Phone: +65 11.188.888</p>
                        <p>Email: hello@colorlib.com</p>
                    </div>
                </div>

                {/* useful links  */}
                <div className='mb-8'>
                    <p className='font-bold mb-4'>Useful Links</p>
                    <div className='flex gap-8'>
                        <div className='flex flex-col gap-3'>
                            {FooterLink1.map((link) => (
                                <Link key={link.name} href={link.link}>{link.name}</Link>
                            ))}
                        </div>
                        <div className='flex flex-col gap-3'>

                            {FooterLink2.map((link) => (
                                <Link key={link.name} href={link.link}>{link.name}</Link>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Newsletter */}
                <div className='flex flex-col gap-2 '>
                    <p className='font-bold'>Join Our Newsletter Now</p>
                    <p className='text-sm'>Get E-mail updates about our latest shop and special offers.</p>
                    {/* create input element to submit email for newsletter */}
                    <span className=' 2xl:w-[380px] inline-flex mt-6'>
                        <input type='email' name='email' placeholder='Enter your mail'
                            className='p-2 h-10 2xl:w-[300px] flex-grow outline-none' />
                        <button className='bg-primary text-white font-bold h-10 px-4 '>SUBSCRIBE</button>
                    </span>
                    {/* social media handles */}
                    <div className='mt-6'>
                        <Socials />
                    </div>
                </div>
            </div>
            {/* horizontal line */}
            <div className='w-full h-[1px] bg-gray-300 mt-6'></div>
            {/* copyright */}
            <div className='w-full flex flex-wrap justify-center 2xl:justify-between items-center gap-3 mt-6'>
                <p className='text-sm text-gray-600'>`Copyright <span className='text-lg'>&copy;</span> {date} All rights reserved | Replical of
                    Colorlib template | made with love by <Link href={`/`} className='text-blue-800 font-bold 
                     transition-all duration-500 delay-100 hover:text-blue-600'>Gideon Abbey</Link> `
                </p>
                <div className='mt-4'>
                <Image src={`/images/payment-item.png.webp`} alt='payment cards' height={70} width={250} />
                </div>
            </div>
        </footer>
    )
}

export default Footer