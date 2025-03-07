import React, { Suspense } from 'react'
import SearchBar from './SearchBar'
import BlogCategories from './BlogCategories'
import RecentNews from './RecentNews'
import SearchBy from './SearchBy'
import ListOfBlogs from './ListOfBlogs'

const Page = () => {
  return (
      <div className='flex flex-col w-full px-4 2xl:flex-row gap-4 justify-center 2xl:justify-between'>
        <div className='w-full'>
          <SearchBar />
          <BlogCategories />
          <RecentNews />
          <SearchBy />
        </div>
        {/* right side */}
        <div className=''>
          <ListOfBlogs />
        </div>
      </div>
  )
}

export default Page