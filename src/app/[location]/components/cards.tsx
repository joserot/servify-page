import CardWorker from "./card-worker";
import getProfessionals from "@/app/searcher/services/get-professionals";
import TitleSearch from "./title-search";

interface Props {
  location: string;
  profession: string;
  locationService: string;
  orderBy: string;
}

export default async function Cards({
  location,
  profession,
  locationService,
  orderBy,
}: Props) {
  const professionals: Professional[] = await getProfessionals(
    location,
    profession,
    locationService,
    orderBy
  );

  if (!professionals || !professionals.length) {
    return (
      <p className="text-center py-10">
        ¡Ups! Lo sentimos pero no hemos encontrado pofesionales para esta
        búsqueda.
      </p>
    );
  }

  return (
    <section
      className="
        flex 
        flex-col 
        justify-center
        items-center
        gap-5
        w-full "
    >
      <TitleSearch location={location} profession={profession} />
      {professionals.map((professional) => {
        return <CardWorker key={professional.id} worker={professional} />;
      })}
    </section>
  );
}
