// "use client";

// import { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import 'swiper/css/effect-coverflow';
// import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
// import Image from 'next/image'


// const items = [
//     { name: "Crab Pool Security", price: "$30.00", image: "/images/vegs.webp" },
//     { name: "Crab Pool Security", price: "$30.00", image: "/images/pepper.webp" },
//     { name: "Crab Pool Security", price: "$30.00", image: "/images/chicken.webp" },
// ]


// const CategoryCarouselItem = () => {
//     return (
//         <div className='flex flex-col gap-4 justify-around '>
//             <div className='flex gap-6'>
//                 <Image src="/images/vegs.webp" alt="vegs" width={100} height={100} className='w-[110px]  ' />
//                 <div className='pt-2'>
//                     <p>Crab Pool Security</p>
//                     <p className='font-bold'>$30.00</p>
//                 </div>
//             </div>
//             <div className='flex gap-6'>
//                 <Image src="/images/pepper2.webp" alt="vegs" width={100} height={100} className='w-[110px]' />
//                 <div className='pt-2'>
//                     <p>Crab Pool Security</p>
//                     <p className='font-bold'>$30.00</p>
//                 </div>
//             </div>
//             <div className='flex gap-6'>
//                 <Image src="/images/chicken.webp" alt="vegs" width={100} height={100} className='w-[110px] ' />
//                 <div className='pt-2'>
//                     <p>Crab Pool Security</p>
//                     <p className='font-bold'>$30.00</p>
//                 </div>
//             </div>
//         </div>
//     )
// }



// const CategoryCarousel = ({prevRef, nextRef}) => {
//     const swiperRef = useRef(null);

//     return (
//         <div className="relative h-full">
//             {/* Custom Navigation Buttons */}
//             <button
//                 ref={prevRef}
//                 onClick={() => swiperRef.current?.slidePrev()}
//                 className="absolute hidden left-[-30px] top-1/2 -translate-y-1/2 z-10 border-[1px] border-gray-300 text-gray-800 px-1 py-5 hover:bg-gray-600 transition"
//             >
//                 <MdOutlineKeyboardArrowLeft size={20} />
//             </button>
//             <button
//                 ref={nextRef}
//                 onClick={() => swiperRef.current?.slideNext()}
//                 className="absolute hidden right-[-40px] top-1/2 -translate-y-1/2 z-10 border-[1px] border-gray-300 text-gray-800 px-1 py-5 hover:bg-gray-600 transition"
//             >
//                 <MdOutlineKeyboardArrowRight size={20} />
//             </button>
//             {/* Swiper Slider */}
//             <Swiper
//                 modules={[Navigation, Pagination, Autoplay]}
//                 slidesPerView={1}
//                 speed={500}
//                 effect="slide"
//                 cssMode={true}
//                 loop={true}
//                 autoplay={{ delay: 3000 }}
//                 onSwiper={(swiper) => (swiperRef.current = swiper)} // Attach Swiper instance to ref
//             // breakpoints={{
//             //     1024: { slidesPerView: 1 }, // Large screens
//             //     768: { slidesPerView: 1 }, // Tablets
//             //     480: { slidesPerView: 1 }, // Mobile
//             // }}
//             >
//                 {Array.from({length: 2}).map((item, i) => (
//                     <SwiperSlide key={i}>
//                         <CategoryCarouselItem />
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };

// export default CategoryCarousel;

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
