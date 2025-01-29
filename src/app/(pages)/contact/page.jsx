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
      <LeaveMessage/>
    </div>
  )
}

export default Page