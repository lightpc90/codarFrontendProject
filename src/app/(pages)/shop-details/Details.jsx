import Link from 'next/link'
import React from 'react'

const Details = () => {
  return (
      <div className='w-full my-[70px]'>
          <div className='flex items-center justify-between gap-2'>
              <div className='border-b-[1px] border-gray-300 flex-1'></div>
              <div className='flex items-center gap-6 justify-between flex-1'>
                  <Link href={`/shop-details#tabs-1`} className={`font-bold text-gray-500`}>Description</Link>
                  <Link href={`/shop-details#tabs-2`} className={`font-bold text-gray-500`}>Information</Link>
                  <Link href={`/shop-details#tabs-3`} className={`font-bold text-gray-500`}>Reviews(1)</Link>
              </div>
              <div className='border-b-[1px] border-gray-300 flex-1'></div>
          </div>
    </div>
  )
}

export default Details