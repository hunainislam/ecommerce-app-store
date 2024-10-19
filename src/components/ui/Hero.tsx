import React from 'react'
import { Button } from './button'
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Hero() {
  return (
    <div className="mb-[100px]">
      <div className="hero min-h-[80vh] bg-fixed bg-center bg-no-repeat custom-img">
    <div className="hero-overlay bg-opacity-30"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myWhite">All Sanitary & <span className="text-myBlackPara">Electric Items</span></h1>
        <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight text-myWhite">
        Z.H Sanitary & Electric Store offers quality sanitary and electrical products, ensuring reliable solutions for homes and businesses.
        </p>
        <Button className="bg-transparent hover:bg-transparent outline outline-offset-2 outline-1 text-myWhite group hover:rounded-3xl duration-300 hover:outline-myOrange">
      <MdOutlineShoppingCart className="mr-2 h-6 w-6 group-hover:text-myOrange group-hover:animate-bounce" /> Shop Now
    </Button>
      </div>
    </div>
  </div></div>
  )
}
