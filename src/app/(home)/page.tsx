import Header from "@/components/header";
import Hero from "./components/hero";
import Categories from "./components/categories";
import About from "./components/about";
import Footer from "@/components/footer";

import getProfile from "@/services/get-profile";

export default async function Home() {
  const user: User | null = await getProfile();

  return (
    <main>
      <Header user={user} />
      <Hero />
      <Categories />
      <About />
      <Footer />
    </main>
  );
}
