import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Marquee from "@/components/sections/Marquee";
import Categories from "@/components/sections/Categories";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Storage from "@/components/sections/Storage";
import Heritage from "@/components/sections/Heritage";
import Trust from "@/components/sections/Trust";
import Gifting from "@/components/sections/Gifting";
import Testimonials from "@/components/sections/Testimonials";
import Newsletter from "@/components/sections/Newsletter";
import Features from "@/components/sections/Features";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Marquee />
      <Categories />
      <FeaturedProducts />
      <Storage />
      <Heritage />
      <Trust />
      <Gifting />
      <Testimonials />
      <Newsletter />
      <Features />
    </>
  );
}
