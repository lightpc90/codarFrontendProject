import dynamic from "next/dynamic";
import Blog from "@/components/blog/Blog";
import FeauturedProducts from "@/components/featuredProducts/FeauturedProducts";
import LatestProducts from "@/components/featuredProducts/LatestProducts";
import ReviewProducts from "@/components/featuredProducts/ReviewProducts";
import TopRatedProducts from "@/components/featuredProducts/TopRatedProducts";
import HomeCarousel from "@/components/carousel/HomeCarousel";

// const HomeCarousel = dynamic(() => import("@/components/carousel/HomeCarousel"), {
//   ssr: false,
//   loading: () => <p className="w-full flex justify-center items-center 2xl:w-[1100px] mx-auto my-[50px] ">Loading Carousel...</p>,
// });// 

export default function Home() {
  return (
      <main className=" flex flex-col w-full h-full overflow-hidden">
        <div className="w-full flex px-2 justify-center items-center 2xl:w-[1160px] mx-auto my-[50px] ">
          <HomeCarousel />
        </div>
        <FeauturedProducts />
        <div className="flex flex-wrap px-8 2xl:px-0 max-w-[1200px] overflow-hidden mx-auto justify-center 2xl:justify-between gap-3 2xl:gap-8 my-[50px]">
          <LatestProducts />
          <TopRatedProducts />
          <ReviewProducts />
        </div>
        <h1 className='text-center text-3xl font-bold'>From The Blog</h1>
        {/* horizontal line */}
        <div className='border-b-4 border-primary w-[80px] my-4 mx-auto'></div>
        {/* ----- */}
        <Blog />
      </main>
  );
}
