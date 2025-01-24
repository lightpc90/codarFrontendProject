import React from 'react'
import DepartmentCat from './DepartmentCat'
import CategoriesSearch from './CategoriesSearch'
import PhoneContact from './PhoneContact'
import HeroCard from './HeroCard'

const Hero = () => {
  return (
      <div className='flex flex-wrap w-full px-4 2xl:px-[380px] justify-between mt-6 '>
          {/* All department --Left side */}
          <DepartmentCat/>
          {/* Search, Phone and hero card --Right side */}
          <div className='flex flex-col gap-4 2xl:w-[870px]'>
              {/* right top */}
              <div className='flex flex-wrap justify-between gap-4'>
                  {/* search and phone */}
                  <CategoriesSearch />
                  <PhoneContact/>
              </div>
              {/* right bottom */}
              <HeroCard/>
          </div>
    </div>
  )
}

export default Hero