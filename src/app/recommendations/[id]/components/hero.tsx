import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <div className="mb-10">
      <div
        className="
        flex 
        flex-col
        justify-center
        gap-4
        items-center"
      >
        <h1 className="text-center text-3xl font-bold">Recomieda a Carlos</h1>
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

      <div className="pt-2">
        <div
          className={`
              border-t 
              border-gray-300 
              flex 
              justify-center 
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
        <p className="text-sm text-foreground text-center">
          Con tu recomendación ayudas a Carlos a obtener más clientes y
          contribuyes a dar transparencia en nuestra plataforma para que más
          personas puedan usarla.
        </p>
      </div>
    </div>
  );
}
