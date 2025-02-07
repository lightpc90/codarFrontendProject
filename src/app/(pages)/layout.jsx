import React from 'react'

const PagesLayout = ({children}) => {
  return (
    <div className='w-[100vw] 2xl:w-[1200px] mx-auto flex gap-4 my-[100px]'>
      {children}
    </div>
  )
}

export default PagesLayout