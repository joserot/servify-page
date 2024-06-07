import Header from "@/components/header";
import Footer from "@/components/footer";

import getProfile from "@/services/get-profile";

import { Separator } from "@/components/ui/separator";

import Menu from "../../components/menu";
import Content from "./components/content";

export default async function ProfessionalPage() {
  const user: User | null = await getProfile();

  return (
    <main className="md:bg-gray-200 md:dark:bg-gray-800 relative">
      <Header user={user} />
      <div
        className="
        min-h-[90vh]
        "
      >
        <div
          className="        
          md:bg-card
          md:w-11/12
          max-w-3xl
          mx-auto
          my-10
          md:rounded-md
          md:shadow-sm
          p-5
          md:p-10"
        >
          <Menu />
          <Separator />
          <span className="block text-3xl font-bold my-5 text-center">
            Sube fotos de tus trabajos
          </span>
          <p className="text-foreground text-center mb-5">
            Sube hasta 10 fotos de tus ultimos trabajos realizados, estos se
            mostrarán en tu perfil
          </p>
          <Content />
        </div>
      </div>

      <Footer />
    </main>
  );
}
