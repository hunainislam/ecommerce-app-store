"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "./button";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { useState } from "react";
import { addToCart, addCart } from "@/app/store/features/cart";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BestSellingCardAddToCart({ products }: { products: string }) {
  // Get the current product based on the products prop
  const product = useAppSelector((state) =>
    state.products.find((value) => value.products === products)
  );

  // Access the cart state to check if the product is already in the cart
  const cart = useAppSelector((state) => state.cart);

  // Add to Cart functionality
  const dispatch = useAppDispatch();

  // Set initial cart item details
  const [cartItem, setCartItem] = useState({
    id: product?.id,
    title: product?.title,
    image: product?.image[0],
    products: product?.products,
    price: product?.price,
    discount: product?.discount,
    category: product?.category,
    size: product?.size[0],
    quantity: 1, // Default quantity to 1
    color: product?.color[0],
  });

  // Toast notification
  const notify = (message: string) =>
    toast.success(message, {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  // Add to cart handler
  const handleAddToCart = () => {
    // Check if the product with the same size and color is already in the cart
    const existingProduct = cart.find(
      (item: any) =>
        item.id === cartItem.id &&
        item.size === cartItem.size &&
        item.color === cartItem.color
    );

    if (existingProduct) {
      // If the product exists, increase its quantity
      dispatch(addCart(cartItem));
      notify("Product quantity increased!");
    } else {
      // If the product does not exist, add a new product to the cart
      dispatch(addToCart(cartItem));
      notify("Product added to cart!");
    }
  };

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
          {/* Size selection */}
          <div className="flex items-center">
            <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead">
              Shop Items
            </span>
            <div className="form-control w-full max-w-xs">
              <select
                onChange={(e) => setCartItem({ ...cartItem, size: e.target.value })}
                className="select select-bordered bg-[#FAFAFA] text-myBlackPara"
              >
                <option disabled selected>
                  Select Items
                </option>
                {product?.size.map((item: any, i: any) => (
                  <option key={i}>{item}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Color selection */}
          <div className="flex mt-5">
            <span className="mr-3 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight">
              Color
            </span>
            {product?.color.map((item: any, i: number) => (
              <button
                key={i}
                onClick={() => setCartItem({ ...cartItem, color: item })}
                className="border-2 border-gray-300 mr-1
                     rounded-full w-6 h-6 focus:outline-none active:border-black focus:black"
                style={{ backgroundColor: item }}
              />
            ))}
          </div>
          {/* Add to Cart Button */}
          <div className="w-fit">
            <Button
              onClick={handleAddToCart}
              className="group mt-5 w-full bg-myBlackPara hover:bg-transparent text-myWhite hover:text-myBlackPara scroll-m-20 border-b pb-2 text-xs font-semibold tracking-tight rounded-xl"
            >
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
  );
}
