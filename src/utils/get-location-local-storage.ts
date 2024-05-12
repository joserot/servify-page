import existInList from "./exist-in-list";

import { locationsList } from "@/data/data";

export default function getLocationLocalStorage() {
  let locationLocalStorage = null;

  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) locationLocalStorage = localStorage?.getItem("location");

  if (!locationLocalStorage) return null;

  const existLocation = existInList(locationLocalStorage, locationsList);

  if (!existLocation) return null;

  return locationLocalStorage;
}
