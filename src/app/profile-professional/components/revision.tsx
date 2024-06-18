import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

interface Props {
  active: boolean;
}

export default function Revision({ active }: Props) {
  if (active) {
    return null;
  }

  return (
    <div className="w-full flex flex-col gap-3 p-3 mb-5 rounded-md bg-primary">
      <span className="text-white font-bold text-xl flex items-center gap-2">
        <FontAwesomeIcon icon={faCircleInfo} />
        Tu perfil está en revision
      </span>
      <p className="text-white">
        Tu perfil se encuentra en revision actualmente, cada vez que se crea o
        actualiza un perfil lo revisaremos para asegurarnos que cumpla con
        nuestras politicas, una vez lo aprobemos podrás ver tu perfil en el
        sitio.
      </p>
    </div>
  );
}
