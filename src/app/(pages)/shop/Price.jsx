import React from 'react'
import PriceRangeSlider from './RangeSlider'

const Price = () => {
  return (
    <div className='w-full'>
      <h2 className='font-bold text-2xl mb-6' >Price</h2>
      <div className='w-[280px]'>
        <PriceRangeSlider />
      </div>
    </div>
  )
}

export default Price