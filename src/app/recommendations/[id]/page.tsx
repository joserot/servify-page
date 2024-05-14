import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "./components/hero";
import FormRecommendations from "./components/form-recommendations";

import getOneProfessional from "@/services/get-one-professional";

import getProfile from "@/services/get-profile";

import { redirect } from "next/navigation";

export default async function RecommendationsPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;

  const professional: Professional | null = await getOneProfessional(id);
  const user: User | null = await getProfile();

  if (!professional) {
    redirect("/404");
  }

  return (
    <main className="bg-gray-200 dark:bg-gray-800 relative">
      <Header user={user} />
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
          <Hero professional={professional} />
          <FormRecommendations
            professionalName={professional.name}
            id={professional.id}
            user={user}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
