import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdCalendarToday } from "react-icons/md";
import { FaRegComment } from "react-icons/fa6";

const BlogLayout = ({blog}) => {
  return (
      <div className=' w-[380px] flex flex-col gap-4 mb-[60px]'>
          <Image src={blog.image} width={400} height={400} />
          <div className='flex items-center text-gray-500'>
              <MdCalendarToday/> 
              <span className='mr-6'>{blog.timestamp}</span>
              <FaRegComment />
              5
          </div>
          <Link href={'/blog'} className='font-bold text-xl'>{blog.title}</Link>
          <p className='text-gray-500'>{blog.content}</p>
      <Link href={'/blog'} className='flex gap-3 items-center 
          w-fit px-6 py-3 border-[1px] rounded-3xl'>READ MORE <IoIosArrowRoundForward /> </Link>
    </div>
  )
}

export default BlogLayout