import getLabel from "@/utils/get-label";

import { locationsList, categoriesList } from "@/data/data";

interface Props {
  location?: string;
  profession?: string;
}

export default function TitleSearch({ location, profession }: Props) {
  if (!location) return null;

  let text = "";

  if (!profession) {
    text = `Profesionales en ${getLabel(location, locationsList)}`;
  } else {
    text = `${getLabel(profession, categoriesList)} en ${getLabel(
      location,
      locationsList
    )}`;
  }

  return (
    <h1 className="text-center text-2xl font-bold text-balance">{text}</h1>
  );
}
