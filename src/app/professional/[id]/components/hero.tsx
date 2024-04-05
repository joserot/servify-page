import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faHouse,
  faStar,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="mb-10">
      <div
        className="
        flex 
        gap-5
        md:gap-10
        items-center    
        border-b
      border-gray-300 
        pb-5"
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
          <Button className="hidden md:flex absolute top-0 right-0 gap-2 items-center text-lg font-bold">
            Contactar
            <FontAwesomeIcon icon={faWhatsapp} />
          </Button>
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
      <div className="pt-5">
        <p className="text-sm text-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
          blandit ipsum. Donec efficitur at urna quis fringilla. Vestibulum a
          suscipit lectus. Proin sit amet augue cursus, dictum ipsum nec,
          iaculis est. Quisque at consequat libero, eleifend mollis dui. Aliquam
          erat volutpat. In ultrices cursus est eget blandit. Cras hendrerit
          quam quis varius pellentesque.
        </p>
      </div>
    </div>
  );
}
