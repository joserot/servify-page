import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "./components/hero";
import Content from "./components/content";
import FooterContact from "./components/footer-contact";

export default function ProfessionalPage() {
  return (
    <main className="bg-gray-200 dark:bg-gray-800 relative">
      <Header />
      <div
        className="
        min-h-[90vh]
        "
      >
        <div
          className="        
        bg-background 
        md:w-11/12
        max-w-3xl
        mx-auto
        my-10
        md:rounded-md
        shadow-sm
        p-5
        md:p-10"
        >
          <Hero />
          <Content />
        </div>
      </div>
      <FooterContact />
      <Footer />
    </main>
  );
}
