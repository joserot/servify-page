import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "./components/hero";
import Content from "./components/content";
import FooterContact from "./components/footer-contact";

import getOneProfessional from "@/services/get-one-professional";

import getProfile from "@/services/get-profile";

import { notFound } from "next/navigation";

import existInList from "@/utils/exist-in-list";

import { locationsList, categoriesList } from "@/data/data";

export default async function ProfessionalPage({
  params,
}: {
  params: { location: string; service: string; id: string };
}) {
  const id = params.id;
  const location = params.location;
  const service = params.service;

  const professional: Professional | null = await getOneProfessional(id);
  const user: User | null = await getProfile();

  const existLocation = existInList(location, locationsList);
  const existService = existInList(service, categoriesList);

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
          <Hero professional={professional} user={user} />
          <Content professional={professional} user={user} />
        </div>
      </div>
      <FooterContact professional={professional} user={user} />
      <Footer />
    </main>
  );
}
