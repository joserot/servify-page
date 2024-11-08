import Header from "@/components/header";
import Footer from "@/components/footer";

import getProfile from "@/services/get-profile";

import Menu from "../../components/menu";
import Content from "./components/content";

export default async function ProfessionalPage() {
  const user: User = await getProfile();

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
          <span className="block text-3xl font-bold my-5 text-center">
            Obtén recomendaciones
          </span>
          <p className="text-foreground text-center mb-5">
            Haz que tus clientes escaneen el código QR o vayan al link para
            recomendarte
          </p>
          <Content user={user} />
        </div>
      </div>

      <Footer />
    </main>
  );
}
