import Card from "@/components/Card";
import ChooseUs from "@/components/ChooseUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";

export default async function Home() {

  return (
    <div>

      <Navbar />
      <Hero />
      <Card />
      <ChooseUs />
      <Newsletter />
      <Footer />

    </div>
  );
}
