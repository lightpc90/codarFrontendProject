'use client'

import { useState } from 'react'
import { FiPlus, FiMinus } from "react-icons/fi";

const QuantityButton = ({quantity, setQuantity}) => {
    const handlePlus = () => {
         setQuantity(quantity + 1)
    }
    const handleMinus = () => {
        if (quantity > 0) setQuantity(quantity - 1)
        else if (quantity <= 0) setQuantity(0)
    }
    return (
        <div className='flex items-center h-[40px] text-gray-500'>
            <button onClick={handleMinus} className='bg-gray-200 px-4 h-full'>
                <FiMinus />
            </button>
            <p className='bg-gray-200 px-4 h-full flex items-center justify-center font-light'>
            {quantity}
            </p>
            <button onClick={handlePlus} className='bg-gray-200 px-4 h-full' >
                <FiPlus />
            </button>
          
        </div>
    )
}

export default QuantityButton