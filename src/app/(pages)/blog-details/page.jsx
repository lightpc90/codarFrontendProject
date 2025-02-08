import React from 'react'
import SearchBar from '../blog/SearchBar'
import BlogCategories from '../blog/BlogCategories'
import RecentNews from '../blog/RecentNews'
import SearchBy from '../blog/SearchBy'

// 
import { CgFacebook } from "react-icons/cg";
import { IoLogoTwitter } from "react-icons/io";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from 'next/image'


const page = () => {
  return (
    <div className='flex gap-4 justify-between'>
      <div className=''>
        <SearchBar />
        <BlogCategories />
        <RecentNews />
        <SearchBy />
      </div>
      {/* right side-- blog details */}
      <div>
        <Image src={'/images/blog-1.jpg.webp'} alt='blog' width={100} height={100} className=' w-full' />
        <p className='text-gray-500 py-6'>
          Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed
          sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
          Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo,
          lacinia eget consectetur sed, convallis at tellus. Sed porttitor lectus nibh.
          Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus
          convallis quis ac lectus. Proin eget tortor risus. Donec rutrum congue leo eget
          malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
          Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat.
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
        </p>
        <h2 className='font-bold text-3xl py-6'>
          The corner window forms a place within a place that is a resting point within
          the large space.
        </h2>
        <p className='text-gray-500 py-6'>
          The study area is located at the back with a view of the vast nature.
          Together with the other buildings, a congruent story has been managed in
          which the whole has a reinforcing effect on the components.
          The use of materials seeks connection to the main house, the adjacent stables
        </p>
        <div className='flex justify-between gap-2 items-center'>
          <div className='flex items-center gap-4 py-6'>
            <Image src={'/images/blog-1.jpg.webp'} alt='blog' width={100} height={100} className='h-[80px] w-[80px] rounded-full' />
            <span>
              <p className='font-bold'>Michael Scofield</p>
              <p className='text-gray-500'>Admin</p>
            </span>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-bold'>Categories: <span className='text-gray-500 font-light'>Food</span></p>
            <p className='font-bold'>Tags: <span className='text-gray-500 font-light'>All, Trending, Cooking, Healthy Food, Life Style</span></p>
            <div className='flex gap-4 items-center text-gray-500 text-xl'>
              <CgFacebook />
              <IoLogoTwitter />
              <FaGooglePlusG />
              <FaLinkedinIn />
              <MdEmail />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page