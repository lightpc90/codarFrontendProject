import Link from 'next/link';
import React from 'react'
import { LiaTagSolid } from "react-icons/lia";
import BillingDetails from './BillingDetails';

const Page = () => {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <div className='bg-gray-200 w-[100%] p-4 flex items-center justify-center gap-2 border-t-[1px] border-primary text-gray-400'>
        <LiaTagSolid />
        <h3>Have a coupon? <Link href="/" className='border-b-[1px] border-gray-400 p-0'>Click here</Link> to enter your code</h3>
      </div>
      <BillingDetails />
    </div>
  )
}
export default Page