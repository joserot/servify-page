import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faHouse,
  faStar,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { Badge } from "@/components/ui/badge";

import ContactButton from "./contact-button";

export default function Hero() {
  return (
    <div className="mb-10">
      <div
        className="
        flex 
        gap-5
        md:gap-10
        items-center"
      >
        <div>
          <img
            src="/user-1.webp"
            width={150}
            height={150}
            alt="Jose Rotchen"
            className="
            w-24
            h-24
            md:w-40 
            md:h-40 
            rounded-full 
            object-cover   
            border
          border-gray-300"
          />
        </div>
        <div
          className="
          w-2/3
          flex
          flex-col
          justify-start
          items-start
          relative
          "
        >
          <ContactButton />

          <h3
            className={`
              font-semibold 
              mb-1
              sm:text-lg 
              md:text-xl
             `}
          >
            Carlos Rodriguez
          </h3>
          <span
            className={`
              text-sm 
              sm:text-base
              text-foreground
              flex
              items-center
              gap-2`}
          >
            <FontAwesomeIcon icon={faMapLocationDot} className="text-primary" />
            Posadas, Misiones
          </span>
          <span
            className={`
              text-sm 
              sm:text-base
              text-foreground
              flex
              items-center
              gap-2`}
          >
            <FontAwesomeIcon icon={faHouse} className="text-primary" />
            En tu domicilio
          </span>
          <span
            className={`
              text-sm 
              sm:text-base
              text-foreground
              flex
              items-center
              gap-2`}
          >
            <FontAwesomeIcon icon={faBriefcase} className="text-primary" />
            Gasista matriculado
          </span>
          <div
            className={`
            my-1
            text-sm 
            sm:text-base
              text-yellow-500 `}
          >
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <span className="text-foreground ml-2 text-sm">(16)</span>
          </div>
        </div>
      </div>
      <div className="pt-2">
        <div
          className={`
              border-t 
              border-gray-300 
              flex 
              justify-start 
              items-start 
              flex-wrap 
              py-2 
              gap-2`}
        >
          {["Experincia verificada", "Matrícula verificada"].map(
            (verification) => {
              return (
                <Badge
                  key={verification}
                  className={`
                 text-xs 
                  sm:text-sm
                 bg-green-500
                 flex
                 items-center
                 gap-2 
              `}
                >
                  <FontAwesomeIcon icon={faCheck} /> {verification}
                </Badge>
              );
            }
          )}
        </div>
        <p className="text-sm text-foreground">
          Soy un gasista matriculado con amplia experiencia en instalaciones de
          gas y plomería. A lo largo de mi carrera, he trabajado en una variedad
          de proyectos, desde pequeñas reparaciones hasta instalaciones
          completas en edificios residenciales y comerciales.
        </p>
      </div>
    </div>
  );
}
