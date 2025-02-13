"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import CarouselLayout from "./CarouselLayout";

export const carouselProducts = [
    { productName: "VEGETABLES", productImage: "/images/vegetables.png" },
    { productName: "FRESH FRUITS", productImage: "/images/fresh-fruits.png" },
    { productName: "DRINK FRUITS", productImage: "/images/drink-fruits.webp" },
    { productName: "DRIED FRUITS", productImage: "/images/dried-fruit.webp" },
    { productName: "FRESH MEAT", productImage: "/images/fresh-meat.png" },
]

const HomeCarousel = () => {
    const swiperRef = useRef(null);

    return (
        <div className="relative w-full">
            {/* Custom Navigation Buttons */}
            <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute left-[-30px] top-1/2 -translate-y-1/2 z-10 border-[1px] border-gray-300 text-gray-800 px-1 py-5 hover:bg-gray-600 transition"
            >
                <MdOutlineKeyboardArrowLeft size={20} />
            </button>

            <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-10 border-[1px] border-gray-300 text-gray-800 px-1 py-5 hover:bg-gray-600 transition"
            >
                <MdOutlineKeyboardArrowRight size={20} />
            </button>

            {/* Swiper Slider */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={4}
                loop={true}
                autoplay={{ delay: 3000 }}
                onSwiper={(swiper) => (swiperRef.current = swiper)} // Attach Swiper instance to ref
                breakpoints={{
                    1024: { slidesPerView: 4 }, // Large screens
                    768: { slidesPerView: 2 }, // Tablets
                    480: { slidesPerView: 1 }, // Mobile
                }}
            >
                {carouselProducts.map((product, index) => (
                    <SwiperSlide key={index}>
                        <CarouselLayout productName={product.productName} productImage={product.productImage} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HomeCarousel;
