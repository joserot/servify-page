import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function Revision() {
  return (
    <div className="w-full flex flex-col gap-3 p-3 border border-gray-300 dark:border-gray-600 mb-5 rounded-md">
      <span className="text-primary font-bold text-xl flex items-center gap-2">
        <FontAwesomeIcon icon={faCircleInfo} />
        Tu perfil está en revision
      </span>
      <p className="text-foreground">
        Tu perfil se encuentra en revision actualmente, cada vez que se crea o
        actualiza un perfil lo revisaremos para asegurarnos que cumpla con
        nuestras politicas, una vez lo aprobemos podrás ver tu perfil en el
        sitio.
      </p>
    </div>
  );
}
