import React from 'react'

const CartTotal = () => {
  return (
      <div className='flex flex-col gap-6 w-[550px] bg-gray-200 p-6 font-bold'>
          <span className='text-xl'>Cart Total</span>
          <div className='flex items-center justify-between'>
              <span>Subtotal</span>
              <span className='text-rose-700'>$454.98</span>
          </div>
          <span className='inline-flex h-[1px] w-full bg-gray-300'></span>
          <div className='flex items-center justify-between'>
              <span>Total</span>
              <span className='text-rose-700'>$454.98</span>
          </div>
          <button className='bg-primary text-white p-3 text-center'>PROCEED TO CHECKOUT</button>
    </div>
  )
}

export default CartTotal