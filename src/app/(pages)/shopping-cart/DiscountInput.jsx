import React from 'react'

const DiscountInput = () => {
  return (
      <div className='flex flex-col gap-4 w-full'>
          <span className='font-bold text-xl mb-5 inline-flex'>Discount Codes</span>
          <div className='flex flex-col w-full lg:flex-row lg:items-center gap-2'>
              <input type="text" name="discount" placeholder='Enter your coupon code' className='py-3 px-12 border-[1px] border-gray-300 outline-none lg:w-[300px]' />
              <button className='bg-gray-700 py-4 px-8 font-bold w-fit text-sm text-white'>APPLY COUPON</button>
          </div>
    </div>
  )
}

export default DiscountInput