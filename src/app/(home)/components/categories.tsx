import { categoriesList } from "@/data/data";

import ServicesCard from "./service-card";

import { Button } from "@/components/ui/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Categories() {
  return (
    <article className=" flex justify-center items-center mb-24 md:mb-44">
      <div className="w-11/12 max-w-7xl flex flex-col justify-start items-start">
        <h2 className="font-bold text-xl lg:text-2xl mb-5">
          Servicios Populares
        </h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-5">
          {categoriesList.map((service, index) => (
            <ServicesCard
              key={index}
              service={service.label}
              image={service.image}
            />
          ))}
        </div>
        {/* <Button variant="link" className="self-end flex gap-2 items-center">
          Ver todos los servicios
          <FontAwesomeIcon icon={faArrowRight} />
        </Button> */}
      </div>
    </article>
  );
}
