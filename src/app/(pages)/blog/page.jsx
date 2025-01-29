import React from 'react'
import SearchBar from './SearchBar'
import BlogCategories from './BlogCategories'
import RecentNews from './RecentNews'
import SearchBy from './SearchBy'
import { Blogs } from '@/utils/data'
import ListOfBlogs from './ListOfBlogs'

const Page = () => {
  return (
    <div className='flex gap-4 justify-between'>
      <div className=''>
        <SearchBar/>
        <BlogCategories/>
        <RecentNews/>
        <SearchBy/>
      </div>
      {/* right side */}
      <div>
        <ListOfBlogs/>
      </div>

    </div>
  )
}

export default Page