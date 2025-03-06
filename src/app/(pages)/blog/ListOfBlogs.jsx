import React from 'react'
import BlogLayout from './BlogLayout'
import Pagination from '../shop/Pagination'

const blogs = [
  {
    title: "6 ways to prepare breakfast for 30",
    content: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
    timestamp: "May 4,2019",
    image: '/images/blog-2.jpg.webp'
  },
  {
    title: "Visit the clean farm in the US",
    content: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
    timestamp: "May 4,2019",
    image: '/images/blog-3.jpg.webp'
  },
  {
    title: "Cooking tips make cooking simple",
    content: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
    timestamp: "May 4,2019",
    image: '/images/blog-1.jpg.webp'
  },
  {
    title: "Cooking tips make cooking simple",
    content: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
    timestamp: "May 4,2019",
    image: '/images/blog-4.jpg.webp'
  },
  {
    title: "The Moment You Need To Remove Garlic From The Menu",
    content: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
    timestamp: "May 4,2019",
    image: '/images/blog-5.jpg.webp'
  },
  {
    title: "Cooking tips make cooking simple",
    content: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
    timestamp: "May 4,2019",
    image: '/images/blog-6.jpg.webp'
  },
]

const ListOfBlogs = () => {
  return (
    <div className='flex flex-wrap w-full gap-3 justify-between'>
      {blogs.map((blog, i) => (
        <BlogLayout key={i} blog={blog} />
      ))}
      <div className='border-b-[1px] border-gray-300 mb-2 w-full'></div>
      <Pagination/>
    </div>
  )
}

export default ListOfBlogs