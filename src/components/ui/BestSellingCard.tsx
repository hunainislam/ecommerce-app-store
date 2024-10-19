import React from "react";
import Image from "next/image";
import { Button } from "./button";
import { FaHeart } from "react-icons/fa6";
import Link from "next/link";
import BestSellingCardAddToCart from "./BestSellingCardAddToCart";

export default function BestSellingCard({
  src,
  title,
  description,
  price,
  category,
  products,
  discount,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
  price: number;
  category: string,
  products: string,
  discount: number,
}) {
  return (
    <div>
      {/* Best Selling Card */}
      <div className="max-w-[350px] h-[25rem] p-4 mx-auto shadow-md rounded-xl relative group">
        <Link href={`/${category}/${products}`}>
        {/* Image Div */}
        <div className="block h-[12rem] rounded overflow-hidden">
          <Image src={src} alt={"Picture"} width={400} height={400} />
        </div>
        <div className="mt-4">
          {/* Title */}
          {title && (
            <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0 text-myBlackPara line-clamp-1">
              {title}
            </h2>
          )}
          {/* Description */}
          {description && (
            <p className="scroll-m-20 border-b pb-2 text-xs font-semibold tracking-tight first:mt-0 text-myBlackHead line-clamp-1 mt-2">
              {description}
            </p>
          )}
          {/* Price */}
          {price && (
            <div className="flex gap-3">
            <p className={`scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0 text-myBlackPara line-clamp-1 mt-2 ${discount > 0 && "line-through decoration-2 decoration-myOrange/70"}`}>
              ${price}
            </p>
            {/* Discounted Values */}
            {discount > 0 && (<p className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0 text-myBlackPara line-clamp-1 mt-2">
            ${price - ((price*discount) / 100)}
          </p>)}
          </div>
          )}
          </div>
          </Link>
          {/* Buttons Div*/}
          <div>
            <div className="absolute bottom-2 right-2">
              <BestSellingCardAddToCart products = {products} />
            </div>

              <Button className="group bg-myBlackPara hover:bg-transparent text-myWhite hover:text-myBlackPara scroll-m-20 border-b pb-2 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2 left-2">
                <FaHeart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
                Buy Now
              </Button>
              {discount > 0 && (
                <div className="scroll-m-20 text-xs font-semibold tracking-tight text-myWhite bg-myOrange absolute top-0 left-2 w-[87px] p-2 text-center uppercase rounded-tl-xl rounded-bl-2xl myDiscount">{`${discount}% off`}</div>
              )}
            </div>
        </div>
      </div>
  );
}
