
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
            {/* main */}
            <div className='flex gap-6 justify-between w-full'>
                {/* left items */}
                <div className='flex flex-col w-[250px] gap-8 '>
                    <Departments />
                    <Price />
                    <Color />
                    <PopularSize />
                    <LatestProducts />
                </div>
                {/* -------------- */}
                {/* right items */}
                <div className=''>
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