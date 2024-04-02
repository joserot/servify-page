import Header from "@/components/header";
import Hero from "./components/hero";
import Categories from "./components/categories";
import About from "./components/about";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Categories />
      <About />
      <Footer />
    </main>
  );
}
