"use client";

import { useRef } from "react";
import Slider from "react-slick";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
    { name: "Crab Pool Security", price: "$30.00", image: "/images/vegs.webp" },
    { name: "Crab Pool Security", price: "$30.00", image: "/images/pepper2.webp" },
    { name: "Crab Pool Security", price: "$30.00", image: "/images/chicken.webp" },
];

const CategoryCarouselItem = () => {
    return (
        <div className="flex flex-col gap-4 justify-around">
            {items.map((item, index) => (
                <div key={index} className="flex gap-6">
                    <Image src={item.image} alt={item.name} width={100} height={100} className="w-[110px]" />
                    <div className="pt-2">
                        <p>{item.name}</p>
                        <p className="font-bold">{item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const CategoryCarousel = ({ prevRef, nextRef }) => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 800, // Adjust speed (higher = smoother)
        cssEase: "ease-in-out", // Apply ease-in-out effect
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className="relative h-full">
            <button
                ref={prevRef}
                onClick={() => sliderRef.current?.slickPrev()}
                className="hidden absolute left-[-30px] top-1/2 -translate-y-1/2 z-10 border-[1px] border-gray-300 text-gray-800 px-1 py-5 hover:bg-gray-600 transition"
            >
                <MdOutlineKeyboardArrowLeft size={20} />
            </button>
            <button
                ref={nextRef}
                onClick={() => sliderRef.current?.slickNext()}
                className="hidden absolute right-[-40px] top-1/2 -translate-y-1/2 z-10 border-[1px] border-gray-300 text-gray-800 px-1 py-5 hover:bg-gray-600 transition"
            >
                <MdOutlineKeyboardArrowRight size={20} />
            </button>

            <Slider ref={sliderRef} {...settings}>
                {Array.from({ length: 2 }).map((_, i) => (
                    <div key={i}>
                        <CategoryCarouselItem />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CategoryCarousel;
