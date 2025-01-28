
import { DepartmentsInShop } from '@/utils/data'
import Link from 'next/link'
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight
} from 'react-icons/md'

const page = () => {
    return (
        <div>
            <div className='bg-slate-800 flex flex-col items-center justify-center text-white h-[150px]'>
                <h1 className='text-4xl font-bold '>
                    Organic Shop
                </h1>
                <span>
                    <Link href='/' className='font-bold mr-2'>Home-</Link>
                    Shop
                </span>
            </div>
            {/* main */}
            <div className='2xl:w-[1200px] mx-auto flex gap-4 my-[100px]'>
                {/* left items */}
                <div>

                    {/* deparment */}
                    <div>
                        <h2 className='font-bold text-2xl mb-8'>Department</h2>
                        {DepartmentsInShop.map((department, i) => (
                            <h5 key={i} className='my-4'>{department}</h5>
                        ))}
                    </div>
                    {/* price */}
                    <div className='my-12'>
                        <h2 className='font-bold text-2xl mb-6' >Price</h2>
                        <div className='h-6 w-[160px] bg-rose-800'></div>
                    </div>
                    {/* colors */}
                    <div>
                        <h2 className='font-bold text-2xl mb-6' >Colors</h2>
                        <div>
                            <div className='flex gap-8'>
                                {/* first column */}
                                <div className='flex flex-col gap-2'>
                                    <span className='flex gap-4 items-center'>
                                        <div className='h-4 w-4 rounded-full border-2 border-slate-800'>
                                        </div>
                                        White
                                    </span>
                                    <span className='flex gap-4 items-center'>
                                        <div className='h-4 w-4 rounded-full bg-red-800'>
                                        </div>
                                        Red
                                    </span>
                                    <span className='flex gap-4 items-center'>
                                        <div className='h-4 w-4 rounded-full bg-sky-600'>
                                        </div>
                                        Blue
                                    </span>
                                </div>
                                {/* second column */}
                                <div className='flex flex-col gap-2'>
                                    <span className='flex gap-4 items-center'>
                                        <div className='h-4 w-4 rounded-full bg-gray-600'>
                                        </div>
                                        Gray
                                    </span>
                                    <span className='flex gap-4 items-center'>
                                        <div className='h-4 w-4 rounded-full bg-black'>
                                        </div>
                                        Black
                                    </span>
                                    <span className='flex gap-4 items-center'>
                                        <div className='h-4 w-4 rounded-full bg-green-600'>
                                        </div>
                                        Green
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* popular size */}
                    <div className='w-full 2xl:w-[200px]' >
                        <h2 className='font-bold text-2xl my-6' >Popular Size</h2>
                        <div className='flex flex-wrap gap-4'>
                            <span className='bg-gray-300 py-1 px-5'>Large</span>
                            <span className='bg-gray-300 py-1 px-5'>Medium</span>
                            <span className='bg-gray-300 py-1 px-5'>Small</span>
                            <span className='bg-gray-300 py-1 px-5'>Tiny</span>

                        </div>
                    </div>
                    {/* latest products */}
                    <div className='mt-6'>
                        <span className='flex gap-2 justify-between w-full items-center'>
                            <h2 className='font-bold text-2xl my-4'>Latest Products</h2>
                            <div className="flex gap-2 items-center">
                                <button className="bg-gray-300 inline-flex p-2">
                                    <MdOutlineKeyboardArrowLeft size={20} />
                                </button>
                                <button className="bg-gray-300 inline-flex p-2">
                                    <MdOutlineKeyboardArrowRight size={20} />
                                </button>
                            </div>
                        </span>
                        {/* carousel */}
                        <div className='bg-gray-700 h-[500px]'></div>
                    </div>
                </div>
                {/* -------------- */}
                {/* right items */}
                <div className='w-full'>
                    {/* sale off */}
                    <div >
                        <span className='text-4xl inline-flex font-bold border-b-4 border-primary pb-2 mb-12'>Sale Off</span>
                        <div className='bg-gray-400 h-[300px]'></div>
                    </div>
                    {/* horizontal line */}
                    <div className='border-b-[1px] border-gray-300 my-[90px]' ></div>
                </div>
            </div>
        </div>
    )
}

export default page