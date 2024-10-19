import Image from "next/image";
import Link from "next/link";
import React from "react";
import pipe2 from "../../../public/image/pipe2.png"
import fitting1 from "../../../public/image/fittings1.png"
import bib4 from "../../../public/image/bib4.png"
import solution1 from "../../../public/image/solution1.png"
import coil4 from "../../../public/image/coil4.png"
import china1 from "../../../public/image/china1.png"
import bulb2 from "../../../public/image/bulb2.png"
import breaker3 from "../../../public/image/breaker3.png"

export default function Categories() {
  return (
    <div className="mb-[100px] mt-[100px]">
      {/* Headings */}
      <div className="text-center mb-10">
        <h1 className="text-myBlackPara scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl">
          Our Categories
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-20 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* Tailbooks */}
      <div>
         {/* Headings */}
      <div className="text-center mb-30">
        <h1 className="text-myBlackPara scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl pt-14">
          Sanitary Items
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {/* Categories 1 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
         <div className="mb-7 mt-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
             <Link href={"/pipe"} className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={pipe2}
          />
          <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackPara/70 text-center text-myWhite w-full">
                <h1 className="uppercase">Pipes</h1>
            </div>
            {/* Responsive Picture */}
            <div className="block lg:hidden absolute bottom-4 duration-500 z-[100] scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackPara/70 text-center text-myWhite w-full">
                <h1 className="uppercase">Pipes</h1>
            </div>
        </Link>
        </div>
      </div>
      {/* Categories 2 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
         <div className="mb-7 mt-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
             <Link href={"/fitting"} className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={fitting1}
          />
          <div className="hidden lg:block absolute -bottom-24  group-hover:bottom-2 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackPara/70 text-center text-myWhite w-full">
                <h1 className="uppercase">Fittings</h1>
            </div>
            {/* Responsive Picture */}
            <div className="block lg:hidden absolute bottom-4 duration-500 z-[100] scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackPara/70 text-center text-myWhite w-full">
                <h1 className="uppercase">Fittings</h1>
            </div>
        </Link>
        </div>
      </div>
      {/* Categories 3 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
         <div className="mb-7 mt-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
             <Link href={"bibcock"} className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={bib4}
          />
          <div className="hidden lg:block absolute -bottom-24  group-hover:bottom-2 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackPara/70 text-center text-myWhite w-full">
                <h1 className="uppercase">Bib Cock</h1>
            </div>
            {/* Responsive Picture */}
            <div className="block lg:hidden absolute bottom-4 duration-500 z-[100] scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackPara/70 text-center text-myWhite w-full">
                <h1 className="uppercase">Bib Cock</h1>
            </div>
        </Link>
        </div>
      </div>
      {/* Categories 4 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
         <div className="mb-7 mt-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
             <Link href={"/solution"} className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={solution1}
          />
          <div className="hidden lg:block absolute -bottom-24  group-hover:bottom-2 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackPara/70 text-center text-myWhite w-full">
                <h1 className="uppercase">CPVC Solution</h1>
            </div>
            {/* Responsive Picture */}
            <div className="block lg:hidden absolute bottom-4 duration-500 z-[100] scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackPara/70 text-center text-myWhite w-full">
                <h1 className="uppercase">CPVC Solution</h1>
            </div>
        </Link>
        </div>
      </div>
    </div>
    </div>
    </section>
    </div>
     {/* Tailbooks */}
     <div>
         {/* Headings */}
      <div className="text-center mb-30">
        <h1 className="text-myBlackPara scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl pt-14">
          Electric Items
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
       {/* Categories 5 */}
       <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
         <div className="mb-7 mt-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
             <Link href={"/coil"} className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={coil4}
          />
          <div className="hidden lg:block absolute -bottom-24  group-hover:bottom-2 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackPara/70 text-center text-myWhite w-full">
                <h1 className="uppercase">Coils</h1>
            </div>
            {/* Responsive Picture */}
            <div className="block lg:hidden absolute bottom-4 duration-500 z-[100] scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackPara/70 text-center text-myWhite w-full">
                <h1 className="uppercase">Coils</h1>
            </div>
        </Link>
        </div>
      </div>
      {/* Categories 6 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
         <div className="mb-7 mt-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
             <Link href={"/sheet"} className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={china1}
          />
          <div className="hidden lg:block absolute -bottom-24  group-hover:bottom-2 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackPara/70 text-center text-myWhite w-full">
                <h1 className="uppercase">China Sheet</h1>
            </div>
            {/* Responsive Picture */}
            <div className="block lg:hidden absolute bottom-4 duration-500 z-[100] scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackPara/70 text-center text-myWhite w-full">
                <h1 className="uppercase">China Sheet</h1>
            </div>
        </Link>
        </div>
      </div>
      {/* Categories 7 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
         <div className="mb-7 mt-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
             <Link href={"/bulb"} className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={bulb2}
          />
          <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackPara/70 text-center text-myWhite w-full">
                <h1 className="uppercase">Bulbs</h1>
            </div>
            {/* Responsive Picture */}
            <div className="block lg:hidden absolute bottom-4 duration-500 z-[100] scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackPara/70 text-center text-myWhite w-full">
                <h1 className="uppercase">Bulbs</h1>
            </div>
        </Link>
        </div>
      </div>
      {/* Categories 8 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
         <div className="mb-7 mt-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
             <Link href={"/breaker"} className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={breaker3}
          />
          <div className="hidden lg:block absolute -bottom-24  group-hover:bottom-2 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackPara/70 text-center text-myWhite w-full">
                <h1 className="uppercase">Breakers</h1>
            </div>
            {/* Responsive Picture */}
            <div className="block lg:hidden absolute bottom-4 duration-500 z-[100] scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackPara/70 text-center text-myWhite w-full">
                <h1 className="uppercase">Breakers</h1>
            </div>
        </Link>
        </div>
      </div>
    </div>
    </div>
    </section>
    </div>
    </div>
  );
}
