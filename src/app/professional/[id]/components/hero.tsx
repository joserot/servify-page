import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faHouse,
  faStar,
  faBriefcase,
  faMoneyCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { Badge } from "@/components/ui/badge";

import ContactButton from "./contact-button";

import getLabel from "@/utils/get-label";

import {
  categoriesList,
  locationsList,
  modalityList,
  verificationsList,
} from "@/data/data";

interface Props {
  professional: Professional;
}

export default function Hero({ professional }: Props) {
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
            src={professional.image}
            width={150}
            height={150}
            alt={professional.name + " " + professional.lastName}
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
            {professional.name + " " + professional.lastName}
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
            {getLabel(professional.location, locationsList)}
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
            {getLabel(professional.locationService, modalityList)}
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
            {getLabel(professional.service, categoriesList)}
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
            <FontAwesomeIcon icon={faMoneyCheck} className="text-primary" />
            {"Desde " + professional.price + " ARS"}
          </span>

          <span className="text-foreground text-sm py-2">
            {professional.likes > 0 ? (
              <strong>{professional.likes + " Personas lo recomiendan"}</strong>
            ) : null}
          </span>
        </div>
      </div>
      <div className="pt-2">
        {professional.verifications && professional.verifications.length ? (
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
            {professional.verifications.map((verification) => {
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
                  <FontAwesomeIcon icon={faCheck} />
                  {getLabel(verification, verificationsList)}
                </Badge>
              );
            })}
          </div>
        ) : null}
        <p className="text-sm text-foreground">{professional.description}</p>
      </div>
    </div>
  );
}
