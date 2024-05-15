import ContentSearcher from "./components/content-searcher";

import { locationsList } from "@/data/data";
import existInList from "@/utils/exist-in-list";

import { notFound } from "next/navigation";

import genPageMetadata from "@/app/gen-page-metadata";

import { Metadata } from "next";

import { SITE_URL, OG_IMG } from "@/constants/constants";

import getLabel from "@/utils/get-label";

interface Props {
  params: { location: string };
  searchParams?: {
    location?: string;
    profession?: string;
    locationService?: string;
    orderBy?: string;
    page?: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = params.location;

  return genPageMetadata(
    `Profesionales en ${getLabel(location, locationsList)}`,
    `Encuentra al profesional para el servicio que necesitas en ${getLabel(
      location,
      locationsList
    )}`,
    `${SITE_URL}/${location}`,
    OG_IMG,
    ``
  );
}

export default async function SearcherPage({ searchParams, params }: Props) {
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
