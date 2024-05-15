import ContentSearcher from "../components/content-searcher";

import { locationsList, categoriesList } from "@/data/data";
import existInList from "@/utils/exist-in-list";

import genPageMetadata from "@/app/gen-page-metadata";

import { notFound } from "next/navigation";

import { Metadata } from "next";

import { SITE_URL, OG_IMG } from "@/constants/constants";

import getLabel from "@/utils/get-label";

interface Props {
  params: { location: string; service: string };
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
  const service = params.service;

  return genPageMetadata(
    `${getLabel(service, categoriesList)} en ${getLabel(
      location,
      locationsList
    )}`,
    `Encuentra ${getLabel(service, categoriesList)} en ${getLabel(
      location,
      locationsList
    )}`,
    `${SITE_URL}/${location}/${service}`,
    OG_IMG,
    `${location}/${service}`
  );
}

export default async function SearcherPage({ searchParams, params }: Props) {
  const location = params.location;
  const profession = params.service;
  const locationService = searchParams?.locationService || "";
  const orderBy = searchParams?.orderBy || "";

  const currentPage = Number(searchParams?.page) || 1;

  const existLocation = existInList(location, locationsList);
  const existService = existInList(profession, categoriesList);

  if (!existLocation || !existService) {
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
