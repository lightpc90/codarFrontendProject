import React from 'react'

const DiscountInput = () => {
  return (
      <div>
          <span className='font-bold text-xl mb-5 inline-flex'>Discount Codes</span>
          <div className='flex items-center gap-2'>
              <input type="text" name="discount" placeholder='Enter your coupon code' className='py-3 px-12 border-[1px] border-gray-300 outline-none w-[300px]' />
              <button className='bg-gray-700 p-3 font-bold text-white'>APPLY COUPON</button>
          </div>
    </div>
  )
}

export default DiscountInput