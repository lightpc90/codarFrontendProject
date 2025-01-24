import React from 'react'
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";

const ProductDemandLayout = ({ title }) => {
    return (
        <div className="flex-1">
            <span className="flex gap-2 items-center justify-between">
                <h2 className="font-bold text-2xl">{title}</h2>
                <div className="flex gap-2 items-center">
                    <button className="bg-gray-300 inline-flex p-2">
                        <MdOutlineKeyboardArrowLeft size={22} />
                    </button>
                    <button className="bg-gray-300 inline-flex p-2">
                        <MdOutlineKeyboardArrowRight size={22} />
                    </button>
                </div>
            </span>
            {/* --- */}
            <div className="w-full bg-gray-200 h-[500px] my-6">
                
            </div>
        </div>
    )
}

export default ProductDemandLayout