import CardWorker from "./card-worker";

interface Props {
  professionals: Professional[];
}

export default function Cards({ professionals }: Props) {
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
