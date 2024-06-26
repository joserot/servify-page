import { cities } from "@/data/cities";

export default function getLocationsList() {
  const listOfCities = [];

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    for (let j = 0; j < city.ciudades.length; j++) {
      const cityCity = city.ciudades[j];

      listOfCities.push({
        label: cityCity.nombre,
        value: cityCity.id,
      });
    }
  }

  return listOfCities;
}
