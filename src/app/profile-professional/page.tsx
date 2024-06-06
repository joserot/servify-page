import Header from "@/components/header";
import Footer from "@/components/footer";

import getProfile from "@/services/get-profile";

import Form from "./components/form";
import Revision from "./components/revision";
import Menu from "./components/menu";

import { Separator } from "@/components/ui/separator";

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
          <Revision />
          <Menu />
          <Separator />
          <span className="block text-3xl font-bold my-5">Tu perfil</span>
          <Form />
        </div>
      </div>

      <Footer />
    </main>
  );
}
