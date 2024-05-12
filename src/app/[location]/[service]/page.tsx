import ContentSearcher from "../components/content-searcher";

import { locationsList, categoriesList } from "@/data/data";
import existInList from "@/utils/exist-in-list";

import { redirect } from "next/navigation";

export default async function SearcherPage({
  searchParams,
  params,
}: {
  params: { location: string; service: string };
  searchParams?: {
    location?: string;
    profession?: string;
    locationService?: string;
    orderBy?: string;
    page?: string;
  };
}) {
  const location = params.location;
  const profession = params.service;
  const locationService = searchParams?.locationService || "";
  const orderBy = searchParams?.orderBy || "";

  const currentPage = Number(searchParams?.page) || 1;

  const existLocation = existInList(location, locationsList);
  const existService = existInList(profession, categoriesList);

  if (!existLocation || !existService) {
    redirect("/404");
  }

  return (
    <ContentSearcher
      location={location}
      profession={profession}
      locationService={locationService}
      orderBy={orderBy}
      page={currentPage}
    />
  );
}
