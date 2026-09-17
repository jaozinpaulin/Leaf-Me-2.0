import Hero from "@/components/Hero";
import Kingdoms from "@/components/Kingdoms";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedSpecies from "@/components/FeaturedSpecies";


export default function Home() {
  return (
    <main className="min-h-screen bg-leaf-bg text-leaf-text">
      <Navbar />
      <Hero />
      <Kingdoms />
      <FeaturedSpecies />
      <Footer />
    </main>
  );
}