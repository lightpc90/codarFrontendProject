import React from 'react'
import { FaPhone } from "react-icons/fa6";

const PhoneContact = () => {
  return (
      <div className='flex gap-4 items-center'>
          <div className='h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center text-primary'>
              <FaPhone/>
          </div>
          <div>
              <p className='font-bold'>+65 11.188.888</p>
              <p className='text-sm'>support 24/7 time</p>
          </div>
    </div>
  )
}

export default PhoneContact