import { Button } from "@/components/ui/button";
import CardPhoto from "./card-photo";

const cardsList = [
  "/service-2.jpg",
  "/service-3.jpg",
  "/service-4.jpg",
  "/service-5.jpg",
  "/service-2.jpg",
  "/service-3.jpg",
  "/service-4.jpg",
  "/service-5.jpg",
];

export default function Content() {
  return (
    <div className="w-full flex flex-col gap-5 relative">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {cardsList.map((card, i) => {
          return <CardPhoto key={i} src={card} />;
        })}
      </div>
      <div className="w-full bg-card sticky bottom-0 py-5">
        <Button className="w-full">Agregar fotos</Button>
      </div>
    </div>
  );
}
