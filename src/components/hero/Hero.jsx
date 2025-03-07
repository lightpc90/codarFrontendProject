'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import DepartmentCat from './DepartmentCat'
import CategoriesSearch from './CategoriesSearch'
import PhoneContact from './PhoneContact'
import HeroCard from './HeroCard'

const Hero = () => {
  const pathname = usePathname()
  return (
    <div className='flex flex-wrap w-full px-4 2xl:px-[380px]  xl:justify-between mt-6 '>
      <DepartmentCat />
      {/* Search, Phone and hero card --Right side */}
      <div className='flex flex-col w-full gap-4 2xl:w-[820px]'>
        {/* right top */}
        <div className='flex flex-wrap justify-between gap-4'>
          {/* search and phone */}
          <CategoriesSearch />
          <PhoneContact />
        </div>
        {/* right bottom */}
        {pathname === '/' &&
          <HeroCard />
        }
      </div>
    </div>
  )
}

export default Hero