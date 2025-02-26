import Image from 'next/image'
import React from 'react'

const CarouselLayout = ({ productName, productImage }) => {
    return (
        <div className='relative h-[280px] mx-2 bg-gray-200 flex items-center justify-center'>
            <Image src={productImage} alt='hero' width={100} height={100} className='w-[150px]' />
            <p className='bg-white font-bold text-lg p-2 w-[180px] absolute bottom-5 right-1/2 translate-x-1/2 text-center'>{productName}</p>
        </div>
    )
}

export default CarouselLayout