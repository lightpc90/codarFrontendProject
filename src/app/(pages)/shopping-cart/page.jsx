"use client"

import { useState } from 'react'
import QuantityButton from '../shop-details/QuantityButton'
import Image from 'next/image'
import { BiLoaderCircle } from "react-icons/bi";
import DiscountInput from './DiscountInput';
import CartTotal from './CartTotal';

const page = () => {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className='flex flex-col gap-12 w-full'>
      {/* table header */}
      <div className='flex items-center gap-2 w-full justify-between'>
        <span>Products</span>
        <div className='flex items-center gap-12 text-xl font-bold justify-between w-[480px] '>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
          <span className='opacity-0'>X</span>
        </div>
      </div>

      <hr />
      {/* table body first row */}
      <div className='flex items-center gap-2 justify-between w-full'>
        <div className='flex items-center gap-4'>
          <div className='bg-gray-300 h-[100px] w-[100px] p-4'>
          <Image alt='product image' src={'/images/fruits.png'} width={100} height={100} className='w-full h-full object-center' />
          </div>
          <span className='text-lg'>{`Vegetable's Package`}</span>
        </div>
        <div className='flex items-center gap-12 text-xl font-bold justify-between w-[480px]'>
          <span>$55.00</span>
          <QuantityButton quantity={quantity} setQuantity={setQuantity} />
          <span>$110.00</span>
          <span className='text-gray-400 font-light'>X</span>
        </div>
      </div>

      <hr />
      {/* body second row */}
      <div className='flex items-center gap-2 justify-between w-full'>
        <div className='flex items-center gap-4'>
          <div className='bg-gray-300 h-[100px] w-[100px] p-4'>
          <Image alt='product image' src={'/images/fresh-frt.png'} width={100} height={100} className='h-full w-full object-center' />
          </div>
          <span className='text-lg'>{`Fresh Garden Vegetables`}</span>
        </div>
        <div className='flex items-center gap-12 text-xl font-bold justify-between w-[480px]'>
          <span>$55.00</span>
          <QuantityButton quantity={quantity} setQuantity={setQuantity} />
          <span>$110.00</span>
          <span className='text-gray-400 font-light'>X</span>
        </div>
      </div>

      <hr />
      {/* body third row */}
      <div className='flex items-center gap-2 justify-between w-full'>
        <div className='flex items-center gap-4'>
          <div className='bg-gray-300 h-[100px] w-[100px] p-4'>
            <Image alt='product image' src={'/images/plantain.png'} width={100} height={100}
              className='h-full w-full object-center'
            />
          </div>
          <span className='text-lg'>{`Organic Bananas`}</span>
        </div>
        <div className='flex items-center gap-12 text-xl font-bold justify-between w-[480px]'>
          <span>$55.00</span>
          <QuantityButton quantity={quantity} setQuantity={setQuantity} />
          <span>$110.00</span>
          <span className='text-gray-400 font-light'>X</span>
        </div>
      </div>

      <hr />

      <div className='w-full flex items-center justify-between '>
        <button className='bg-gray-200 py-2 px-8 font-bold text-gray-500'>CONTINUE SHOPPING</button>
        <button className='bg-gray-200 py-2 px-8 font-bold text-gray-500 flex items-center gap-2'>
          <BiLoaderCircle />
          UPDATE CART</button>
      </div>
      {/* coupon and checkout card */}
      <div className='flex justify-between'>
        <DiscountInput />
        <CartTotal />
      </div>
    </div>
  )
}

export default page