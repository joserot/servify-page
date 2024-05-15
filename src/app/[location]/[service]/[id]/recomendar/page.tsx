import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "./components/hero";
import FormRecommendations from "./components/form-recommendations";

import getOneProfessional from "@/services/get-one-professional";

import getProfile from "@/services/get-profile";

import { notFound } from "next/navigation";

import { locationsList, categoriesList } from "@/data/data";
import existInList from "@/utils/exist-in-list";

export default async function RecommendationsPage({
  params,
}: {
  params: { id: string; location: string; service: string };
}) {
  const id = params.id;
  const location = params.location;
  const profession = params.service;

  const professional: Professional | null = await getOneProfessional(id);
  const user: User | null = await getProfile();

  const existLocation = existInList(location, locationsList);
  const existService = existInList(profession, categoriesList);

  if (!professional || !existLocation || !existService) {
    notFound();
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
