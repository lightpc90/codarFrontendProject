import Link from 'next/link'
import React from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Color = () => {
    return (

        <div>
            <h2 className='font-bold text-2xl' >Colors</h2>
            <div>
                <div className='flex gap-8'>
                    {/* first column */}
                    <div className='flex flex-col gap-2'>
                        <Link href={`/shop`} className='flex gap-4 items-center'>
                            <div className='h-4 w-4 rounded-full border-2 border-slate-800'>
                            </div>
                            White
                        </Link>
                        <Link href={`/shop`} className='flex gap-4 items-center'>
                            <div className='h-4 w-4 rounded-full bg-red-800'>
                            </div>
                            Red
                        </Link>
                        <Link href={`/shop`} className='flex gap-4 items-center'>
                            <div className='h-4 w-4 rounded-full bg-sky-600'>
                            </div>
                            Blue
                        </Link>
                    </div>
                    {/* second column */}
                    <div className='flex flex-col gap-2'>
                        <Link href={`/shop`} className='flex gap-4 items-center'>
                            <div className='h-4 w-4 rounded-full bg-gray-600'>
                            </div>
                            Gray
                        </Link>
                        <Link href={`/shop`} className='flex gap-4 items-center'>
                            <div className='h-4 w-4 rounded-full bg-black'>
                            </div>
                            Black
                        </Link>
                        <Link href={`/shop`} className='flex gap-4 items-center'>
                            <div className='h-4 w-4 rounded-full bg-green-600'>
                            </div>
                            Green
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Color