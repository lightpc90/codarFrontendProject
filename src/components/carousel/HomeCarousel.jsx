
"use client";

import Slider from "react-slick";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselLayout from "./CarouselLayout";

export const carouselProducts = [
    { productName: "VEGETABLES", productImage: "/images/vegetables.png" },
    { productName: "FRESH FRUITS", productImage: "/images/fresh-fruits.png" },
    { productName: "DRINK FRUITS", productImage: "/images/drink-fruits.webp" },
    { productName: "DRIED FRUITS", productImage: "/images/dried-fruit.webp" },
    { productName: "FRESH MEAT", productImage: "/images/fresh-meat.png" },
];

// Custom arrow components
const PrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute left-[-30px] top-1/2 -translate-y-1/2 z-10 border-[1px] border-gray-300 text-gray-800 px-1 py-5 hover:bg-gray-600 transition"
    >
        <MdOutlineKeyboardArrowLeft size={20} />
    </button>
);

const NextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-10 border-[1px] border-gray-300 text-gray-800 px-1 py-5 hover:bg-gray-600 transition"
    >
        <MdOutlineKeyboardArrowRight size={20} />
    </button>
);

const HomeCarousel = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "ease-in-out",
        className: "w-full",
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className="relative w-full">
            <Slider {...settings}>
                {carouselProducts.map((product, index) => (
                    <div key={index}>
                        <CarouselLayout productName={product.productName} productImage={product.productImage} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HomeCarousel;
