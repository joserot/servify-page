import ContentSearcher from "./components/content-searcher";

import { locationsList } from "@/data/data";
import existInList from "@/utils/exist-in-list";

import { notFound } from "next/navigation";

export default async function SearcherPage({
  searchParams,
  params,
}: {
  params: { location: string };
  searchParams?: {
    location?: string;
    profession?: string;
    locationService?: string;
    orderBy?: string;
    page?: string;
  };
}) {
  const location = params.location;
  const profession = "";
  const locationService = searchParams?.locationService || "";
  const orderBy = searchParams?.orderBy || "";

  const currentPage = Number(searchParams?.page) || 1;

  const existLocation = existInList(location, locationsList);

  if (!existLocation) {
    notFound();
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
