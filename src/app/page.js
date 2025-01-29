
import Blog from "@/components/blog/Blog";
import Carousel from "@/components/carousel/Carousel";
import FeauturedProducts from "@/components/featuredProducts/FeauturedProducts";
import LatestProducts from "@/components/featuredProducts/LatestProducts";
import ReviewProducts from "@/components/featuredProducts/ReviewProducts";
import TopRatedProducts from "@/components/featuredProducts/TopRatedProducts";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <main className="w-full">
        
        <Carousel />
        <FeauturedProducts />
        <div className="flex flex-wrap 2xl:w-[1200px] mx-auto justify-center gap-8 my-[100px]">
          <LatestProducts />
          <TopRatedProducts />
          <ReviewProducts/>
        </div>
        <Blog/>
      </main>
    </div>
  );
}
