import React from 'react'
import SearchBar from './SearchBar'
import BlogCategories from './BlogCategories'
import RecentNews from './RecentNews'
import SearchBy from './SearchBy'

const Page = () => {
  return (
    <div className='flex gap-4 justify-between'>
      <div className=''>
        <SearchBar/>
        <BlogCategories/>
        <RecentNews/>
        {/* search by */}
        <SearchBy/>

      </div>
      {/* right side */}
      <div>
        {/* list of blogs */}
      </div>

    </div>
  )
}

export default Page