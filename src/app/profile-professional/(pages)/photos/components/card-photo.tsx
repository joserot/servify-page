import { Button } from "@/components/ui/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface Props {
  src: string;
}

export default function CardPhoto({ src }: Props) {
  return (
    <div>
      <img
        className="h-auto w-full object-cover rounded-sm cursor-pointer"
        width={200}
        height={200}
        alt="Trabajo realizado"
        src={src}
      />
      <div className="w-full">
        <Button className="w-full" variant="destructive">
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
    </div>
  );
}
