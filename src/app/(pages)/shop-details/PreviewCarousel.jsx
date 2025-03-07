'use client'

import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const productImages = [
    "/images/pepper.webp",
    "/images/veges.png",
    "/images/vegetables.png",
    "/images/dried-fruit.webp",
    "/images/pepper.webp",
    "/images/vegetables.png",
]

const settings = {
    dots: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    pagination: true,
    autoplaySpeed: 5000,
    arrows: false,
    cssEase: "ease-in-out", // Custom easing
};

const ImageLayout = ({image}) => {
    return (
        <div className='lg:h-[120px] h-[80px] w-[80px] lg:w-[120px] bg-gray-300 ' >
            <Image src={image} alt='carousel image' height={100} width={100} className='h-full w-full object-fit object-center' />
        </div>
    )
}

const PreviewCarousel = () => {
  return (
      <Slider {...settings}>
          {productImages.map((image, index) => (
              <ImageLayout key={index} image={image} />
          ))}
      </Slider>
  )
}

export default PreviewCarousel