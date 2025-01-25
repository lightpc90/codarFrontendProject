import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaRegCalendar } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";

const BlogLayout = ({ blog }) => {
    return (
        <div className='flex flex-1 flex-col gap-2 p-4'>
            {/* image */}
            <Image src={blog.image} alt='blog.title' width={200} height={240} className='w-full' />
            {/* timestamp and comment */}
            <div className='flex gap-4 items-center text-gray-400'>
                <span className='flex items-center gap-1'>
                    <FaRegCalendar />
                    {blog.timestamp}
                </span>
                <span className='flex gap-1 items-center'>
                    <FaRegComment />
                    5
                </span>
            </div>
            {/* title */}
            <Link href={`/`} className='font-bold text-xl'>{blog.title}</Link>
            {/* contents */}
            <p className='pr-4'>
                {blog.content}
            </p>
        </div>
    )
}

export default BlogLayout