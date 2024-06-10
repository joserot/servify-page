import Header from "@/components/header";
import Footer from "@/components/footer";

import getProfile from "@/services/get-profile";

import { Separator } from "@/components/ui/separator";

import Menu from "../../components/menu";
import Revision from "../../components/revision";

import Hero from "./components/hero";
import getOneProfessional from "@/services/get-one-professional";

export default async function ProfessionalPage() {
  const user: User | null = await getProfile();
  const professional: Professional | null = await getOneProfessional(
    "66316927d63290f5f8d153b6"
  );

  if (!professional) {
    return <div>No se encontró el perfil</div>;
  }

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
          {/* <Separator /> */}
          <Revision />
          <Hero professional={professional} user={user} />
        </div>
      </div>

      <Footer />
    </main>
  );
}
