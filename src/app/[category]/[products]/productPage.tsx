"use client";

import { Button } from "@/components/ui/button";
import ProductsComponent from "@/components/ui/ProductsComponent";
import { FaHeart, FaPlus, FaMinus } from "react-icons/fa";
import { useAppSelector } from "../../store/hooks";
import { useState } from "react";
import AddToCartToast from "../../../components/ui/AddToCartToast";

export default function ProductPage({
  params,
}: {
  params: { products: string };
}) {
  const product = useAppSelector((state) => state.products);
  const myProducts = product.filter(
    (value) => value.products == params.products
  );
  const [cartItem, setCartItem] = useState({
    id: myProducts[0].id,
    title: myProducts[0].title,
    image: myProducts[0].image[0],
    products: myProducts[0].products,
    price: myProducts[0].price,
    discount: myProducts[0].discount,
    category: myProducts[0].category,
    size: myProducts[0].size[0],
    quantity: myProducts[0].quantity,
    uuid: myProducts[0].quantity,
    color: myProducts[0].color[0]
  });
  return (
    <div>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* Image */}
          <ProductsComponent image={myProducts[0].image} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {/* Category */}
            <h2 className="scroll-m-20 text-sm font-semibold text-gray-500 tracking-widest uppercase">
              {myProducts[0].category}
            </h2>
            {/* Title Heading */}
            <h1 className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight mb-1 text-myBlackPara">
              {myProducts[0].title}
            </h1>
            {/* Rating */}
            <div className="rating rating-sm mt-2">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-myOrange"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-myOrange"
              />
            </div>
            {/* Description */}
            <p className="mt-2 leading-relaxed scroll-m-20 text-base font-normal text-myBlackHead">
              {myProducts[0].description}
            </p>
            <div className="flex mt-6 items-center mb-5">
              {/* Colors */}
              <div className="flex">
                <span className="mr-3 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight">
                  Color
                </span>
                {myProducts[0].color.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setCartItem({ ...cartItem, color: item })}
                    className="border-2 border-gray-300 mr-1 rounded-full w-6 h-6 focus:outline-none active:border-black focus:black"
                    style={{ backgroundColor: item }}
                  />
                ))}
              </div>
              {/* Size */}
              <div className="flex ml-6 items-center">
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
                    {myProducts[0].size.map((item, i) => (
                      <option key={i}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            {/* Quantity */}
            <div className="flex items-center">
              <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead">
                Quantity
              </span>
              <Button className="group bg-myBlackPara hover:bg-transparent text-myWhite hover:text-myBlackPara scroll-m-20 border-b pb-2 text-xs font-semibold tracking-tight rounded-xl w-fit h-fit">
                <FaMinus
                  onClick={() =>
                    setCartItem({
                      ...cartItem,
                      quantity:
                        cartItem.quantity <= 1 ? 1 : --cartItem.quantity,
                    })
                  }
                  className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300"
                />
                Less
              </Button>
              <div className="mr-2 ml-2 scroll-m-20 text-bs font-semibold tracking-tight">
                {cartItem.quantity}
              </div>
              <Button className="group bg-myBlackPara hover:bg-transparent text-myWhite hover:text-myBlackPara scroll-m-20 border-b pb-2 text-xs font-semibold tracking-tight rounded-xl w-fit h-fit">
                <FaPlus
                  onClick={() =>
                    setCartItem({ ...cartItem, quantity: ++cartItem.quantity })
                  }
                  className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300"
                />
                Add
              </Button>
            </div>
            {/* Divider */}
            <div className="divider"></div>
            <div className="flex items-center justify-between">
              {/* Price */}
              <div>
                <span
                  className={`scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead ${
                    cartItem.discount > 0 &&
                    "line-through decoration-2 decoration-myOrange/70"
                  }`}
                >
                  ${cartItem.price * cartItem.quantity}
                </span>
                {/* Discounted Values */}
                {cartItem.discount > 0 && (
                  <span className="ml-3 scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead">
                    $
                    {(cartItem.price -
                      (cartItem.price * cartItem.discount) / 100) *
                      cartItem.quantity}
                  </span>
                )}
              </div>
              {/* Add To Cart*/}
              <AddToCartToast cartItem= {cartItem}/>
            </div>
            {/* Buy Now */}
            <Button className="mt-3 w-full group bg-myBlackPara hover:bg-transparent text-myWhite hover:text-myBlackPara scroll-m-20 border-b pb-2 text-xs font-semibold tracking-tight rounded-xl">
              <FaHeart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
