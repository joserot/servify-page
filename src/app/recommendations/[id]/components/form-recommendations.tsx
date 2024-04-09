import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

export default function FormRecommendations() {
  return (
    <form className="w-full flex flex-col gap-2">
      <div>
        <span className="block">Califica el servicio</span>
        <div className="flex gap-1 justify-start items-center">
          <button>
            <FontAwesomeIcon icon={faStarRegular} />
          </button>
          <button>
            <FontAwesomeIcon icon={faStarRegular} />
          </button>
          <button>
            <FontAwesomeIcon icon={faStarRegular} />
          </button>
          <button>
            <FontAwesomeIcon icon={faStarRegular} />
          </button>
          <button>
            <FontAwesomeIcon icon={faStarRegular} />
          </button>
        </div>
      </div>
      <Input placeholder="Nombre" />
      <Textarea placeholder="Recomendación (opcional)" />
      <Button className="self-end">Enviar</Button>
    </form>
  );
}
