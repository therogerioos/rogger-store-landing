import { Socials } from "@/components/Socials";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Brands } from "@/components/Brands";
import { About } from "@/components/About";
import { Header } from "@/components/Header";


export default function Home() {
  return (

    <main>
      <Header />
      <Hero />
      <Socials />
      <Brands />
      <About />
      <Footer />
    </main>

  );
}
