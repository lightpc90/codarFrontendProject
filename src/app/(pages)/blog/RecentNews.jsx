import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const news = [
    { title: '09 Kinds Of Vegetables That Protect The Liver', timestamp: 'MAR 05, 2019', image: '/images/recentNews1.webp' },
    { title: 'Tips You To Balance Nutrition Meal Day', timestamp: 'MAR 05, 2019', image: '/images/recentNews2.webp' },
    { title: '4 Principles To Help You Lose Weight With Vegetables', timestamp: 'MAR 05, 2019', image: '/images/recentNews3.webp' },
]

const RecentNews = () => {
    return (
        <div className='mt-[60px]'>
            <h1 className='font-bold text-2xl my-6'>Recent News</h1>
            <div className='flex flex-col gap-6'>
                {news.map(({ title, timestamp, image }, i) => (
                    <Link key={i} href={`/blog`} className='flex gap-3 h-[70px] w-[280px]'>
                        <Image src={image} alt={title} width={100} height={100} className='h-full' />
                        <div className='w-full text-sm flex flex-col justify-between'>
                            <p className='font-bold'>{title}</p>
                            <p>{ timestamp}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default RecentNews