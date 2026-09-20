import Hero from "@/components/Hero";
import Kingdoms from "@/components/Kingdoms";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedSpecies from "@/components/FeaturedSpecies";
import ExploreLife from "@/components/ExploreLife";
import About from "@/components/About";




export default function Home() {
  return (
    <main className="min-h-screen bg-leaf-bg text-leaf-text">
      <Navbar />
      <Hero />
      <Kingdoms />
      <ExploreLife />
      <FeaturedSpecies />
      <About />
      <Footer />
    </main>
  );
}