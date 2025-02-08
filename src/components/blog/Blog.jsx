import React from 'react'
import BlogLayout from './BlogLayout'
import { Blogs } from '@/utils/data'

const Blog = () => {
    return (
        <div className='flex flex-col items-center w-full 2xl:w-[1200px] mx-auto'>
           
            <div className='flex my-8'>

                {Blogs.map((blog, i) => (
                    <BlogLayout key={i} blog={blog} />
                ))}
            </div>
        </div>
    )
}

export default Blog