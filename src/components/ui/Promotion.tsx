import React from 'react'

export default function Promotion() {
  return (
    <div className="mb-[100px] mt-[100px]"> 
    {/* Headings */}
    <div className="text-center mb-10">
    <h1 className="text-myBlackPara scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl">
      Our Promotions
    </h1>
    <div className="flex mt-2 justify-center">
      <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
      {/* Promotions Start Here */}
      <div>
      </div>
    </div>
  </div>
  {/* Promotions Start Here */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {/* 1st Child */}
    <div
  className="hero h-[25rem] promotion-1 rounded-xl">
  <div className="hero-overlay bg-opacity-30 rounded-xl"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold uppercase text-myWhite">Get upto <span className="text-myOrange">60%</span> off</h1>
      <p className="scroll-m-20 text-xl font-semibold tracking-tight text-myWhite mt-2">
        Flash Sale, get upto 60% off on the Season Variant
      </p>
    </div>
  </div>
</div>
    {/* 2nd Child */}
    <div
  className="hero h-[25rem] promotion-2 rounded-xl">
  <div className="hero-overlay bg-opacity-30 rounded-xl"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold uppercase text-myWhite">Get upto <span className="text-myOrange">30%</span> off</h1>
      <p className="scroll-m-20 text-xl font-semibold tracking-tight text-myWhite mt-2">
        Flash Sale, get upto 60% off on the Season Variant
      </p>
    </div>
  </div>
</div>
  </div>
  </div>
  )
}
