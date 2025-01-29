import Link from 'next/link'
import React from 'react'

const categories = [
    { category: 'All', link: '/blog',  },
    { category: 'Beauty', link: '/blog', count: '20' },
    { category: 'Food', link: '/blog', count: '5' },
    { category: 'Life Style', link: '/blog', count: '9' },
    { category: 'Travel', link: '/blog', count: '10' },
]

const BlogCategories = () => {
    return (
        <div className='mt-[60px]'>
            <h1 className='font-bold text-2xl my-6'>Categories</h1>
            <div className='flex flex-col gap-6'>
                {categories.map(({ category, link, count }, i) => (
                    <Link key={i} href={link}>  
                        <span className='mr-1'>{category}</span>
                        <span>{`${count ? `(${count})` : ''}`}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default BlogCategories