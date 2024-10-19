"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./button";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { addCart, deleteItem, SubtractCart } from "@/app/store/features/cart";

export default function CartCard() {
  const cartArray = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch()
  return (
    <div>
      {cartArray.length >= 1 &&
        cartArray.map((item, i) => (
          <div key={i} className="flex px-10 py-3">
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              width={80}
              height={80}
              className="w-[100px] h-[100px]"
            />
            {/* Some Info */}
            <div className="flex px-5 justify-between items-center w-full">
              <div>
                {/* Title */}
                <h2 className="text-sm font-semibold leading-none line-clamp-1 text-myBlackHead">
                  {item.title}
                </h2>
                {/* Size */}
                <p className="mt-2 text-sm text-myBlackPara/80 font-semibold leading-none line-clamp-1">
                  size:&nbsp;
                  <span>{item.size}</span>
                </p>
                {/* Color */}
                <p className="mt-2 text-sm text-myBlackPara/80 font-semibold leading-none line-clamp-1">
                  color:&nbsp;
                  <span>
                    <button
                    className="border-2 border-gray-300 mr-1 rounded-full w-[15px] h-[15px] focus:outline-none active:border-none focus:none"
                    style={{ backgroundColor: item.color }}
                  /></span>
                </p>
                {/* Quantity */}
                <div className="mt-2 flex items-center">
                  <Button className="group hover:bg-myWhite bg-myBlackPara text-myWhite hover:text-myBlackPara w-fit h-fit rounded-lg text-xs duration-300">
                    <FaMinus onClick={() => dispatch(SubtractCart(item))} className="h-2 w-2 group-hover:text-myBlackPara" />
                  </Button>
                  <div className="mr-2 ml-2 scroll-m-20 font-semibold text-sm tracking-tight text-myBlackHead/80">
                  {item.quantity}
                  </div>
                  <Button onClick={() => dispatch(addCart(item))} className="group hover:bg-myWhite bg-myBlackPara text-myWhite hover:text-myBlackPara w-fit h-fit rounded-lg text-xs duration-300">
                    <FaPlus className="h-2 w-2 group-hover:text-myBlackPara" />
                  </Button>
                </div>
                {/* Price and Delete */}
                <div className="lg:hidden mt-2 flex flex-col gap-2">
                  <h3 className="text-sm font-semibold leading-none line-clamp-1 text-myBlackPara">
                    <span>Price:&nbsp;</span>&#36;
                    {item.discount > 0
                      ? (item.price - (item.price * item.discount) / 100) *
                        item.quantity
                      : item.price * item.quantity}
                  </h3>
                  <FaTrash onClick={() => dispatch(deleteItem(item.uuid))} className="text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer" />
                </div>
              </div>
            </div>
            {/* Price and Delete */}
            <div className="hidden lg:flex flex-col items-end gap-5">
              <h3 className="text-sm font-semibold leading-none line-clamp-1 text-myBlackPara">
                <span>Price:&nbsp;</span>&#36;
                {item.discount > 0
                      ? (item.price - (item.price * item.discount) / 100) *
                        item.quantity
                      : item.price * item.quantity}
              </h3>
              <FaTrash onClick={() => dispatch(deleteItem(item.uuid))} className="text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer" />
            </div>
          </div>
        ))}
    </div>
  );
}
