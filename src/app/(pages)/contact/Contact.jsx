import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { WiTime3 } from "react-icons/wi";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (
      <div className='flex items-center justify-between w-full'>
          {/* phone */}
          <div className='flex flex-col items-center gap-3'>
              <span className='text-primary'>              
              <FaPhoneAlt size={36} /> 
              </span>
              <h1 className='font-bold text-2xl'>Phone</h1>
              <p className='text-gray-500'>+01-3-8888-6868</p>
          </div>
          {/* address */}
          <div className='flex flex-col items-center gap-3'>
              <span className='text-primary'>
                  <IoLocationOutline size={36} />
              </span>
              <h1 className='font-bold text-2xl'>Address</h1>
              <p className='text-gray-500'>60-49 Road 11378 New York</p>
          </div>
         
          {/* open time */}
          <div className='flex flex-col items-center gap-3'>
              <span className='text-primary'>
                  <WiTime3 size={36} />
              </span>
              <h1 className='font-bold text-2xl'>Open Time</h1>
              <p className='text-gray-500'>10:00 am to 23:00 pm</p>
          </div>
          {/* email */}
          <div className='flex flex-col items-center gap-3'>
              <span className='text-primary'>
                  <TfiEmail size={36} />
              </span>
              <h1 className='font-bold text-2xl'>Email</h1>
              <p className='text-gray-500'>hello@colorlib.com</p>
          </div>
    </div>
  )
}

export default Contact