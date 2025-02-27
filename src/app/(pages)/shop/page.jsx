
import Color from './Color';
import PopularSize from './PopularSize';
import LatestProducts from '@/components/featuredProducts/LatestProducts';
import Departments from './Departments';
import Price from './Price';
import SaleOff from './SaleOff';
import Products from './Products';

const Page = () => {
    return (
        < div className='flex flex-wrap gap-4 justify-between w-full px-4 2xl:p-0' >
            {/* left items */}
            <div div className='flex flex-col w-[280px] gap-8' >
                <Departments />
                <Price />
                <Color />
                <PopularSize />
                <LatestProducts />
            </div >
            {/* -------------- */}
            {/* right items */}
            <div className='flex flex-col w-[880px]'>
                <SaleOff />
                {/* horizontal line */}
                <div className='border-b-[1px] border-gray-300 my-[50px]' ></div>
                {/* ----------------- */}
                <Products />
            </div>
        </div >
    )
}

export default Page