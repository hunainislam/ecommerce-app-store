import BestSelling from "@/components/ui/BestSelling";
import Categories from "@/components/ui/Categories";
import FeatureProduct from "@/components/ui/FeatureProduct";
import Hero from "@/components/ui/Hero";
import Promotion from "@/components/ui/Promotion";
import Services from "@/components/ui/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureProduct />
      <Services />
      <Promotion />
      <Categories />
      <BestSelling />
    </div>
  );
}
