import Link from 'next/link'
import React from 'react'

const searches = [
    "Apple", "Beauty", "Vegetables", "Fruit", "Healthy Food", "Lifestyle"
]
const SearchBy = () => {
    return (
        <div className='mt-[70px] w-[400px]'>
            <h1 className='font-bold text-2xl my-6'>Search By</h1>
            <div className='flex flex-wrap gap-2 w-full'>
                {searches.map((search, i) => (
                    <Link key={i} href={`/blog`}
                    className='py-2 px-6 bg-gray-100 '
                    >
                        {search }
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SearchBy