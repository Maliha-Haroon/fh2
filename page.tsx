// import TopHeader from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/layout/hero";
import FeaturedProducts from "./components/layout/fp";
import ClassicProduct from "./components/layout/CP";
import ItemsSection from "./components/layout/items";
import FeaturedPosts from "./components/layout/featurepost";



export default function Home() {
  return (
    <>
      {/* <TopHeader /> */}
      <Hero />
      <ItemsSection />

      <FeaturedProducts />
      <ClassicProduct />
      <FeaturedPosts/>
      <Footer />
      
      
    </>
  );
}
