"use client"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { FaShoppingCart } from "react-icons/fa"
import { Button } from "./button"
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { useState } from "react";
import { addToCart } from "@/app/store/features/cart";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BestSellingCardAddToCart({products}: {products: string}) {
  // Calling Product
    const product = useAppSelector((state) => state.products).find((value) => value.products == products);

    // Add To Cart
    const dispatch = useAppDispatch()
    // Setting Cart Item
    const [cartItem, setCartItem] = useState({
      id: product?.id,
      title: product?.title,
      image: product?.image[0],
      products: product?.products,
      price: product?.price,
      discount: product?.discount,
      category: product?.category,
      size: product?.size[0],
      quantity: product?.quantity,
      uuid: product?.quantity,
      color: product?.color[0]
    });

    // Toast
    const notify = () =>
      toast.success("Product Added Successfuly", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  return (
    <div>
        <Popover>
      <PopoverTrigger asChild>
      <Button className="group bg-myBlackPara hover:bg-transparent text-myWhite hover:text-myBlackPara scroll-m-20 border-b pb-2 text-xs font-semibold tracking-tight rounded-xl">
                <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
                Add to Cart
              </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[15rem]">
        {/* Size */}
        <div className="flex items-center">
                <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead">
                  Shop Items
                </span>
                <div className="form-control w-full max-w-xs">
                  <select
                    onChange={(e) =>
                      setCartItem({ ...cartItem, size: e.target.value })
                    }
                    className="select select-bordered bg-[#FAFAFA] text-myBlackPara"
                  >
                    <option disabled selected>
                      Select Items
                    </option>
                    {product?.size.map((item, i) => (
                      <option key={i}>{item}</option>
                     ))} 
                  </select>
                </div>
              </div>
              {/* Colors */}
              <div className="flex mt-5">
                <span className="mr-3 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight">
                  Color
                </span>
                {product?.color.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setCartItem({ ...cartItem, color: item })}
                    className="border-2 border-gray-300 mr-1
                     rounded-full w-6 h-6 focus:outline-none active:border-black focus:black"
                     style={{ backgroundColor: item }}
                  />
                 ))} 
              </div>
              {/* Add To Cart */}
              <div className="w-fit" onClick={notify}>
              <Button onClick={() => dispatch(addToCart(cartItem))} className="group mt-5 w-full bg-myBlackPara hover:bg-transparent text-myWhite hover:text-myBlackPara scroll-m-20 border-b pb-2 text-xs font-semibold tracking-tight rounded-xl">
                <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
                Add to Cart
              </Button>
              </div>
      </PopoverContent>
    </Popover>
    <ToastContainer
    position="top-left"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
    </div>
  )
}
