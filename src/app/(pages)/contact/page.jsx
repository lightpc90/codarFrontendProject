import React from 'react'
import Contact from './Contact'
import Map from './Map'

const page = () => {
  return (
    <div className='w-full flex flex-col items-center '>
      <Contact/>
      <Map/>
      {/* form */}
    </div>
  )
}

export default page