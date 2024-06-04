import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "./components/hero";
import FormRecommendations from "./components/form-recommendations";

import getOneProfessional from "@/services/get-one-professional";

import getProfile from "@/services/get-profile";

import { notFound } from "next/navigation";

import { locationsList, categoriesList } from "@/data/data";
import existInList from "@/utils/exist-in-list";

import { Metadata } from "next";

import { SITE_URL, OG_IMG } from "@/constants/constants";

import getLabel from "@/utils/get-label";

import genPageMetadata from "@/app/gen-page-metadata";

interface Props {
  params: { location: string; service: string; id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const location = params.location;
  const service = params.service;

  return genPageMetadata(
    "Recomendar",
    `Encuentra ${getLabel(service, categoriesList)} en ${getLabel(
      location,
      locationsList
    )}`,
    `${SITE_URL}/${location}/${service}/${id}/recomendar`,
    OG_IMG,
    ``
  );
}

export default async function RecommendationsPage({ params }: Props) {
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
    <main className="md:bg-gray-200 md:dark:bg-gray-800 relative">
      <Header user={user} />
      <div
        className="
        min-h-[90vh]
        "
      >
        <div
          className="        
        md:bg-background 
        md:w-11/12
        max-w-3xl
        mx-auto
        my-10
        md:rounded-md
        md:shadow-sm
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
