"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faHouse,
  faStar,
  faCheck,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

import { Badge } from "@/components/ui/badge";

import { useRouter } from "next/navigation";

interface Props {
  worker: Professional;
}

export default function CardWorker({ worker }: Props) {
  const router = useRouter();

  const handleClick = () => router.push("/professional/1");

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
        `}
    >
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
          `}
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
            {worker.location}
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
            {worker.serviceLocation}
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
            {worker.service}
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
            <span className="text-foreground ml-2 text-sm">
              ({worker.recommendations})
            </span>
          </div>
        </div>
      </div>

      <div
        className={`

          flex
          flex-col
       `}
      >
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
                <FontAwesomeIcon icon={faCheck} /> {verification}
              </Badge>
            );
          })}
        </div>
      </div>
    </div>
  );
}
