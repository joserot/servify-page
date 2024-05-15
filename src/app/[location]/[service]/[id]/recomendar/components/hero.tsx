import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { Badge } from "@/components/ui/badge";

import getLabel from "@/utils/get-label";

import { verificationsList } from "@/data/data";

interface Props {
  professional: Professional;
}

export default function Hero({ professional }: Props) {
  return (
    <div className="mb-5">
      <div
        className="
        flex 
        flex-col
        justify-center
        gap-4
        items-center"
      >
        <h1 className="text-center text-3xl font-bold">
          Recomieda a {professional.name}
        </h1>
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
        <p className="text-foreground text-center py-5">
          Con tu recomendación ayudas a {professional.name} a obtener más
          clientes y contribuyes a dar transparencia en nuestra plataforma para
          que más personas puedan usarla.
        </p>
      </div>
    </div>
  );
}
