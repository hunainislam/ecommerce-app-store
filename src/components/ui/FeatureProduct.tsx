"use client"

import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BestSellingCard from './BestSellingCard';
import { useAppSelector } from '@/app/store/hooks';

export default function FeatureProduct() {
const bestSelling = useAppSelector((state) => state.products.slice(0,8))
  // Carousel Settings
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="mb-[100px] mt-[100px]">{/* Headings */}
    <div className="text-center mb-10">
      <h1 className="text-myBlackPara scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl">
        Featured Products
      </h1>
      <div className="flex mt-2 justify-center">
        <div className="w-20 h-1 rounded-full bg-myOrange inline-flex" />
      </div>
    </div>
    {/* Carousel */}
    <Slider {...settings}>
    {
        bestSelling.map((items: any, i) => (
          <BestSellingCard 
          key = {i}
          src= {items.image[0]} alt={items.title} title={items.title}
          description={items.description}
          price={items.price}
          category={items.category}
          products={items.products}
          discount={items.discount}
          />
        ))
      }
      </Slider>
    </div>
  )
}
