"use client"

import { Button } from '@/components/ui/button'
import CartCard from '@/components/ui/CartCard'
import { useAppSelector } from '../store/hooks'

export default function CartPage() {
    const cartArray = useAppSelector((state) => state.cart)
    const total = cartArray.reduce((total, arr) => {
        return (total+((arr.price-(arr.price*arr.discount) / 100))*arr.quantity)
    },0)
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1">
    {/* Items */}
    <div className="col-span-2">
        <CartCard />
    </div>
    {/* Summary */}
    <div className="bg-myBlackPara/5 p-5 rounded-xl">
    {/* Heading */}
    <h2 className="scroll-m-20 text-lg font-semibold tracking-tight uppercase text-myBlackPara">Order Summary</h2>
    {/* Divider */}
    <div className="divider mt-0 mb-1"></div>
    {/* Prices */}
    <div className="scroll-m-20 text-sm font-medium tracking-tight text-myBlackHead ">
        {/* Products Prices */}
        <div className="flex items-center justify-between capitalize">
            <h2>Sub Total</h2>
            <h2>${total}</h2>
        </div>
        {/* Delivery Charges */}
        <div className="flex items-center justify-between capitalize">
            <h2>Delivery Charges</h2>
            <h2>TBD</h2>
        </div>
        {/* Services Charges */}
        <div className="flex items-center justify-between capitalize">
            <h2>Sales Tax</h2>
            <h2>TBD</h2>
        </div>
    </div>
    {/* Divider */}
    <div className="divider mt-0 mb-1"></div>
    {/* Estimate Total */}
    <div className="flex items-center justify-between uppercase font-semibold text-sm tracking-tight text-myBlackPara">
            <h2>Estimated Total</h2>
            <h2>${total}</h2>
        </div>
        {/* Divider */}
    <div className="divider mt-0 mb-1"></div>
    {/* Checkout Button */}
    <div className="flex items-center justify-center w-full">
        <Button className="bg-myBlackPara hover:bg-transparent duration-300 text-myWhite hover:text-myBlackPara scroll-m-20 text-xs font-medium tracking-tight hover:shadow-md uppercase rounded-xl">Proceed to Checkout</Button>
    </div>
    {/* Divider */}
    <div className="divider mt-1 mb-1"></div>
    {/* Note */}
    <p className="text-xs font-semibold tracking-tight text-myBlackPara w-[97%] text-center italic">
        {`* Delivery Charges and the Sales Tax will be Calculated in the Checkout Page`}
    </p>
    </div>
</div>
  )
}
