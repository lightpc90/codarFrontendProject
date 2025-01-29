import Link from 'next/link'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Pagination = () => {
  return (
      <span className=' flex items-center'>
          {[1, 2, 3,].map((item, i) => (
              <Link key={i} href={`/shop`} className='border-[2px] border-gray-300 h-8 w-8 inline-flex 
                items-center justify-center font-semibold text-gray-400 mr-6
                transition-all duration-500 delay-100 hover:bg-primary hover:border-none hover:text-white
                '>
                  {item}
              </Link>
          ))}
          <Link href={`/shop`} className='border-[2px] border-gray-300 h-8 w-8 inline-flex 
                items-center justify-center font-semibold text-gray-500
                transition-all duration-500 delay-100 hover:bg-primary hover:border-none hover:text-white
                '>
              <IoIosArrowRoundForward size={20} />
          </Link>

      </span>
  )
}

export default Pagination