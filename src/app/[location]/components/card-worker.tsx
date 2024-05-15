"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faHouse,
  faCheck,
  faBriefcase,
  faMoneyCheck,
} from "@fortawesome/free-solid-svg-icons";

import { Badge } from "@/components/ui/badge";

import { useRouter } from "next/navigation";

import getLabel from "@/utils/get-label";
import getMoneyFormat from "@/utils/get-money-format";

import {
  categoriesList,
  locationsList,
  modalityList,
  verificationsList,
} from "@/data/data";

interface Props {
  worker: Professional;
}

export default function CardWorker({ worker }: Props) {
  const router = useRouter();

  const handleClick = () =>
    router.push(`/${worker.location}/${worker.service}/${worker.id}`);

  return (
    <div
      onClick={handleClick}
      className={`
        bg-background 
        rounded 
        shadow-sm 
        w-full
        p-3
        flex
        flex-col
        transition-shadow
        cursor-pointer
        border
        hover:shadow-lg
        dark:border-gray-500
        dark:hover:shadow-slate-50
        dark:hover:shadow-sm
        relative
        `}
    >
      <div className="hidden md:block absolute top-3 right-3">
        <span className="text-primary font-bold text-lg">
          {"Desde " + getMoneyFormat(worker.price)}
        </span>
      </div>
      <div
        className="
        w-full
        flex
        justify-start
        items-start
        gap-5"
      >
        <div
          className={` 
          flex
          flex-col
          gap-1
          justify-start
          items-start
          py-2`}
        >
          <img
            src={worker.image}
            alt={worker.service}
            width={400}
            height={400}
            className="
              w-28 
              h-28
              object-cover
              rounded
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
          gap-1
          md:gap-0
          "
        >
          <h3
            className={`
              font-semibold 
              mb-1
              sm:text-lg 
              md:text-xl
             `}
          >
            {worker.name + " " + worker.lastName}
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
            {getLabel(worker.location, locationsList)}
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
            {getLabel(worker.locationService, modalityList)}
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
            {getLabel(worker.service, categoriesList)}
          </span>

          <span
            className={`
              md:hidden
              text-sm 
              sm:text-base
              text-foreground
              flex
              items-center
              gap-2`}
          >
            <FontAwesomeIcon icon={faMoneyCheck} className="text-primary" />
            {"Desde " + worker.price + " ARS"}
          </span>

          <span className="text-foreground text-sm py-2">
            {worker.likes > 0 ? (
              <strong>{worker.likes + " Personas lo recomiendan"}</strong>
            ) : null}
          </span>
        </div>
      </div>

      <div
        className={`

          flex
          flex-col
       `}
      >
        {worker.verifications && worker.verifications.length ? (
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
            {worker.verifications.map((verification) => {
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
      </div>
    </div>
  );
}
