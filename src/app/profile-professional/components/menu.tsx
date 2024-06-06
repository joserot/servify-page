import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImages,
  faComments,
  faStar,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";

const linksList = [
  {
    label: "Destaca tu perfil",
    value: "/profile/details",
    icon: faStar,
  },
  {
    label: "Agrega fotos de tus trabajos",
    value: "/profile/photos",
    icon: faImages,
  },
  {
    label: "Obtén recomendaciones",
    value: "/profile/recommendations",
    icon: faComments,
  },
  {
    label: "Vista previa de tu perfil",
    value: "/profile/preview",
    icon: faIdCard,
  },
];

export default function Menu() {
  return (
    <nav className="flex flex-col gap-2 items-start justify-start mb-5">
      {linksList.map((link) => {
        return (
          <Link
            target="_blank"
            key={link.value}
            className="
              text-lg
              text-primary
              flex
              gap-2
              items-center
              transition-all
              hover:underline
              "
            href={link.value}
          >
            {link.label}
            <FontAwesomeIcon icon={link.icon} />
          </Link>
        );
      })}
    </nav>
  );
}
