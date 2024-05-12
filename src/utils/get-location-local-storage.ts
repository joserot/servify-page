"use client";

import existInList from "./exist-in-list";

import { locationsList } from "@/data/data";

export default function getLocationLocalStorage() {
  const locationLocalStorage = localStorage?.getItem("location");

  if (!locationLocalStorage) return null;

  const existLocation = existInList(locationLocalStorage, locationsList);

  if (!existLocation) return null;

  return locationLocalStorage;
}
