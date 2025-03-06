"use client"

import { useState } from 'react'
import QuantityButton from '../shop-details/QuantityButton'
import Image from 'next/image'
import { BiLoaderCircle } from "react-icons/bi";
import DiscountInput from './DiscountInput';
import CartTotal from './CartTotal';

const cartItems = [
  {
    image: '/images/fruits.png',
    name: 'Vegetable\'s Package',
    price: '$55.00',
    quantity: 1,
    total: '$110.00',
  },
  {
    image: '/images/fresh-frt.png',
    name: `Fresh Garden Vegetables`,
    price: '$55.00',
    quantity: 1,
    total: '$110.00',
  },
  {
    image: '/images/plantain.png',
    name: `Organic Bananas`,
    price: '$55.00',
    quantity: 1,
    total: '$110.00',
  },
]

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
          <span>{`$${110.00 * quantity}`}</span>
          <span className='text-gray-400 font-light'>X</span>
        </div>
      </div>

      <div className='border-b-[1px] border-gray-300 w-full my-6' />
    </>
  )
}

const page = () => {
  return (
    <div className='flex flex-col items-start gap-8 w-[100vw]'>
      {/* table header */}
      <div className='flex items-center gap-6 w-full justify-center lg:justify-between'>
        <span className='2xl:text-xl font-bold'>Products</span>
        <div className='flex items-center gap-8 lg:gap-[110px] text-xl font-bold justify-start lg:w-full max-w-[480px] '>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
          <span className='opacity-0'>X</span>
        </div>
      </div>

      <div className='border-b-[1px] border-gray-300 w-full my-6' />
      {cartItems.map((item, index) => (
        <CartItemLayout key={index} image={item.image} name={item.name} />
      ))}

      <div className='w-full flex flex-col lg:flex-row gap-4 items-center justify-between '>
        <button className='bg-gray-200 py-2 px-8 font-bold text-gray-500'>CONTINUE SHOPPING</button>
        <button className='bg-gray-200 py-2 px-8 font-bold text-gray-500 flex items-center gap-2'>
          <BiLoaderCircle />
          UPDATE CART</button>
      </div>
      {/* coupon and checkout card */}
      <div className='flex flex-col items-center lg:items-start px-4 lg:px-0 w-full lg:flex-row gap-4 lg:justify-between'>
        <DiscountInput />
        <CartTotal />
      </div>
    </div>
  )
}

export default page