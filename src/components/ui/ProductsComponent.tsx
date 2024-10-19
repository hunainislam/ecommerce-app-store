"use client"

import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'

export default function ProductsComponent({image}: string | string[] | StaticImageData | any) {
    const [path, setPath] = useState("")
  return (
    <div><Image src={path ? path : image[0]} alt={"ecommerce"} width={400} height={400}/>
    <div className="mt-2 flex items-center justify-evenly mx-auto">
    {image.map((item: string, i: number) => (
      <div key={i} className="cursor-pointer w-16 h-16">
      <Image src={item} alt={"picture"} width={60} height={60} onClick={() => setPath(item)}/>
  </div>
    ))}
    </div>
    </div>
  )
}
