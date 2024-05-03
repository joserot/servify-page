import CardWorker from "./card-worker";
import getProfessionals from "@/app/searcher/services/get-professionals";

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
    return <p>No se encontraron profesionales</p>;
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
      {professionals.map((professional) => {
        return <CardWorker key={professional.id} worker={professional} />;
      })}
    </section>
  );
}
