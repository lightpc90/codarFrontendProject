
import Blog from "@/components/blog/Blog";
import Carousel from "@/components/carousel/Carousel";
import FeauturedProducts from "@/components/featuredProducts/FeauturedProducts";
import LatestProducts from "@/components/featuredProducts/LatestProducts";
import ReviewProducts from "@/components/featuredProducts/ReviewProducts";
import TopRatedProducts from "@/components/featuredProducts/TopRatedProducts";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <main className="w-full">

        <Carousel />
        <FeauturedProducts />
        <div className="flex flex-wrap 2xl:w-[1200px] mx-auto justify-center gap-8 my-[100px]">
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
    </div>
  );
}
