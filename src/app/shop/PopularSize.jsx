import Link from 'next/link'
import React from 'react'

const PopularSize = () => {
    return (
        <div className='w-full 2xl:w-[200px]' >
            <h2 className='font-bold text-2xl my-6' >Popular Size</h2>
            <div className='flex flex-wrap gap-4'>
                <Link href={`/shop`} className='bg-gray-300 py-1 px-5'>Large</Link>
                <Link href={`/shop`} className='bg-gray-300 py-1 px-5'>Medium</Link>
                <Link href={`/shop`} className='bg-gray-300 py-1 px-5'>Small</Link>
                <Link href={`/shop`} className='bg-gray-300 py-1 px-5'>Tiny</Link>

            </div>
        </div>
    )
}

export default PopularSize