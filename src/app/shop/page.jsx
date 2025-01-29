
import { DepartmentsInShop } from '@/utils/data'
import Link from 'next/link'
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
    MdFormatListBulleted
} from 'react-icons/md'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoGrid } from "react-icons/io5";
import Color from './Color';
import PopularSize from './PopularSize';
import LatestProducts from '@/components/featuredProducts/LatestProducts';
import Departments from './Departments';
import Price from './Price';
import SaleOff from './SaleOff';
import Products from './Products';

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
                <div className='flex flex-col w-full 2xl:w-[400px] gap-8'>
                    <Departments />
                    <Price />
                    <Color />
                    <PopularSize />
                    <LatestProducts />
                </div>
                {/* -------------- */}
                {/* right items */}
                <div className='w-full'>
                    {/* sale off */}
                    <SaleOff />
                    {/* horizontal line */}
                    <div className='border-b-[1px] border-gray-300 my-[50px]' ></div>
                    {/* ----------------- */}
                <Products />
                </div>
            </div>
        </div>
    )
}

export default page