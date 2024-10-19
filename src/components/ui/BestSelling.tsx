"use client"

import React from 'react'
import BestSellingCard from './BestSellingCard'
import { useAppSelector } from '@/app/store/hooks'
export default function BestSelling() {
  const product = useAppSelector((state) => state.products)
  const bestSelling = product.slice(0,4)
  return (
    <div className="mb-[100px] mt-[100px]">
      {/* Headings */}
    <div className="text-center mb-10">
      <h1 className="text-myBlackPara scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl">
        Best Selling Products
      </h1>
      <div className="flex mt-2 justify-center">
        <div className="w-20 h-1 rounded-full bg-myOrange inline-flex" />
      </div>
    </div>
    {/* Best Selling Products*/}
    <div className="flex flex-wrap justify-center gap-5">
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
    </div>
    </div>
  )
}
