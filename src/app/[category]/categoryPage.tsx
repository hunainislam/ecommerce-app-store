"use client";

import BestSellingCard from "../../components/ui/BestSellingCard";
import { useAppSelector } from "../store/hooks";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const product = useAppSelector((state) => state.products);
  const bestSelling = product.filter(
    (value) => value.category == params.category
  );
  return (
    <div>
      {/* Headings */}
      <div className="text-center mb-10">
        <h1 className="text-myBlackPara scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl capitalize">
          {params.category}
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-20 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* Category Page Start Here */}
      <div className="flex flex-wrap justify-center gap-5">
        {bestSelling.map((items: any, i) => (
          <BestSellingCard
            key={i}
            src={items.image[0]}
            alt={items.title}
            title={items.title}
            description={items.description}
            price={items.price}
            category={items.category}
            products={items.products}
            discount={items.discount}
          />
        ))}
      </div>
    </div>
  );
}
