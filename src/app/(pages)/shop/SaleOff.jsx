import Image from 'next/image'
import React from 'react'

const Layout = ()=>{
  return (
    <div className='flex w-[300px] flex-col gap-6 items-center'>
      <div className='h-[300px] w-full relative'>
        <Image src={''} width={100} height={100} />
        <div className='h-[80px] w-[80px] bg-rose-800 text-white flex items-center justify-center absolute top-5 left-5' >-20%</div>
      </div>
      <div>
        <p>Dried Fruit</p>
        <p className=''>{`Raisin'n'nuts`}</p>
        <p className='font-bold'>{`$30.00`} <span className='line-through font-light'>$36.00</span> </p>
      </div>
    </div>
  )
}
  
  const SaleOffItems = () => {
    return (
      <div className='flex gap-12'>
        <Layout />
        <Layout />
        <Layout />
      </div>
    )
  }

const SaleOff = () => {
  return (
      <div >
          <span className='text-4xl inline-flex font-bold border-b-4 border-primary pb-2 mb-12'>Sale Off</span>
          <div className='bg-gray-400 h-[300px]'></div>
      </div>
  )
}

export default SaleOff