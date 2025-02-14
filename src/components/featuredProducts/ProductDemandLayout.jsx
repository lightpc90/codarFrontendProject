'use client'

import {useRef} from 'react'
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import CategoryCarousel from '../carousel/CategoryCarousel';

const ProductDemandLayout = ({ title }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    // create a function that uses the refs to slide the swiper on the buttons
    const handlePrev = () => {
        prevRef.current?.click();
    }
    const handleNext = () => {
        nextRef.current?.click();
    }
    return (
        <div className="flex-1 w-[370px]">
            <span className="flex gap-2 items-center justify-between">
                <h2 className="font-bold text-2xl">{title}</h2>
                <div className="flex gap-2 items-center">
                    <button onClick={handlePrev} className="bg-gray-300 inline-flex p-2">
                        <MdOutlineKeyboardArrowLeft size={22} />
                    </button>
                    <button onClick={handleNext} className="bg-gray-300 inline-flex p-2">
                        <MdOutlineKeyboardArrowRight size={22} />
                    </button>
                </div>
            </span>
            {/* --- */}
            <div className=" h-[410px] my-12">
                <CategoryCarousel key={title} prevRef={prevRef} nextRef={nextRef} />
            </div>
        </div>
    )
}

export default ProductDemandLayout