'use client'
import Image from "next/image"
import { useState } from "react"
import QuantityButton from "../shop-details/QuantityButton"

const CartItemLayout = ({ image, name, }) => {
  const [quantity, setQuantity] = useState(1)
  return (
    <>
      <div className='flex items-center gap-2 justify-center lg:justify-between w-full'>
        <div className='flex flex-col  w-[70px] lg:w-[100px] lg:flex-row lg:items-center gap-4'>
          <div className='bg-gray-300 lg:h-[100px] h-[70px] w-[70px] lg:w-[100px] p-4 shrink-0'>
            <Image alt='product image' src={'/images/fruits.png'} width={100} height={100} className='w-full h-full object-center' />
          </div>
          <span className='text-sm lg:text-lg'>{`Vegetable's Package`}</span>
        </div>
        <div className='flex items-center text-sm gap-2 lg:gap-12 lg:text-xl font-bold justify-between lg:w-[480px]'>
          <span>$55.00</span>
          <QuantityButton quantity={quantity} setQuantity={setQuantity} />
          <span>{`$${55.00 * quantity}`}</span>
          <span className='text-gray-400 font-light'>X</span>
        </div>
      </div>

      <div className='border-b-[1px] border-gray-300 w-full my-6' />
    </>
  )
}

export default CartItemLayout