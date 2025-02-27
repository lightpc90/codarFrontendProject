import Image from 'next/image'
import React from 'react'

const HeroCard = () => {
  return (
      <div className='h-[450px] bg-secondary flex items-center justify-center p-8'>
          <div className='flex flex-1 shrink-0 flex-col gap-4'>       
              <p className='text-primary font-bold font-mono'>FRUIT FRESH</p>
              <p className='font-bold text-3xl 2xl:text-5xl'>Vegetable 100% Organic</p>
              <p>Free Pickup and Delivery Available</p>
              <button className='bg-primary w-fit py-2 px-6 font-bold text-white'>SHOP NOW</button>
          </div>
          {/* fruit image */}
          <Image src={`/images/fresh-fruits.png`} alt='fresh fruit' width={200} height={200} className='flex-1' />
    </div>
  )
}

export default HeroCard