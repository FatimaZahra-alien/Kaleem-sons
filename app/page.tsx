import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import ProductGrid from "@/components/ProductGrid";
import Slider from "@/components/Slider";
import Bestsellers from "@/components/Bestsellers";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";


export default function Home() {
  return (
    <>
      
      
      <Hero />
      
      <ProductGrid />
      <Slider />
      <Bestsellers />
      
      <Newsletter />
      <Reviews />
    </>
  );
}