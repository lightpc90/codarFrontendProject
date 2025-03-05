import React from 'react'
import { FeaturedProducts } from '@/utils/data'
import FeaturedProductLayout from '@/components/featuredProducts/FeaturedProductLayout'

const relatedProducts = FeaturedProducts.splice(0, 4)

const RelatedProduct = () => {
    return (
        <div className='flex flex-col gap-6 items-center w-full'>
            <div className='w-fit flex flex-col items-center gap-3'>
                <h1 className='font-bold text-3xl'>Related Product</h1>
                <div className='border-b-4 border-primary w-[35%]'></div>
            </div>
            <div className='flex flex-wrap items-center gap-4 justify-center lg:justify-between mt-6'>
                {relatedProducts.map((product, i) => (
                    <FeaturedProductLayout key={i} item={product} />
                ))}
            </div>
        </div>
    )
}

export default RelatedProduct