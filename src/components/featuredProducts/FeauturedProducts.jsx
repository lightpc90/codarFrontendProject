'use client'
 
import { useState } from 'react'
import { FeaturedProductLinks, FeaturedProducts } from '@/utils/data'
import FeaturedProductLayout from './FeaturedProductLayout'
import Image from 'next/image'


const categories = [
    'All', 'Orange', 'Fresh Meat', 'Vegetable', 'Fast Food,'
]

const FeauturedProducts = () => {
    const [filteredCategory, setFilteredCategory] = useState('All')

    const filteredProducts = filteredCategory === 'All'
        ? FeaturedProducts
        : FeaturedProducts.filter((product)=>product.category === filteredCategory)
    return (
        <div className='my-[100px] w-full flex flex-col items-center justify-center mx-auto 2xl:w-[1200px]'>
            <h1 className='text-center text-3xl font-bold'>Featured Product</h1>
            {/* horizontal line */}
            <div className='border-b-4 border-primary w-[80px] my-4'></div>
            {/* ----- */}
            <div className='flex flex-wrap items-center justify-center my-6 gap-4'>
                {FeaturedProductLinks.map((item, index) => (
                    <button onClick={() => setFilteredCategory(item)} key={index}
                    className={`pb-1 ${item === filteredCategory ? 'border-b-2 border-primary': ''}`}
                    >
                        {item}
                    </button>
                ))}
            </div>
            {/* ----- */}
            <div className='flex flex-wrap items-center justify-center gap-4'>
                {filteredProducts.map((item, index) => (
                <FeaturedProductLayout key={index} item={item}/>
                ))}
            </div>
            {/* ---- */}
            <div className='flex items-center gap-2 w-full'>
                <div className='p-3 2xl:px-16 flex flex-1 items-center justify-between bg-gradient-to-tr from-teal-300 to-teal-500 h-[250px]'>
                    <Image src={`/images/fruits.png`} alt='fruit' width={200} height={200}/>
                    <div className=''>
                        <h2 className='font-bold text-3xl'>Summer Fruit</h2>
                        <p className='text-xl'>100% Pure Natural Fruit Juice</p>
                        <button className='bg-red-800 py-1 px-3 rounded-sm text-white font-bold mt-2'>SHOP NOW</button>
                    </div>
                </div>
                <div className='p-3 2xl:px-16 flex flex-1 items-center justify-between bg-gradient-to-tr from-yellow-300 to-yellow-500  h-[250px]'>
                    <Image src={`/images/juice.png`} alt='fruit' width={200} height={200} />
                    <div className=''>
                        <h2 className='font-bold text-3xl'>Dried & Drink Fruits</h2>
                        <p className='text-xl'>With 25% All Teas</p>
                        <button className='bg-red-800 py-1 px-3 text-white font-bold mt-2 rounded-sm'>SHOP NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeauturedProducts