import ProductPage from "./productPage";


export default function Products({params}: {params: {products: string}}) {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
      <ProductPage params={params}/>
</section>
    </div>

  )
}
