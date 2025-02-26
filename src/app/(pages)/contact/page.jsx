import React from 'react'
import Contact from './Contact'
import Map from './Map'
import LeaveMessage from './LeaveMessage'

const Page = () => {
  return (
    <div className='w-full flex flex-col items-center '>
      <Contact/>
      <Map/>
      {/* form */}
      <div className='w-full p-4'>
      <LeaveMessage/>
      </div>
    </div>
  )
}

export default Page