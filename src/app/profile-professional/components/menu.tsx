"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImages,
  faComments,
  faStar,
  faIdCard,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

import { usePathname } from "next/navigation";

const linksList = [
  // {
  //   label: "Destaca tu perfil",
  //   value: "/profile-professional/details",
  //   icon: faStar,
  // },
  {
    label: "Agrega fotos de tus trabajos",
    value: "/profile-professional/photos",
    icon: faImages,
  },
  {
    label: "Obtén recomendaciones",
    value: "/profile-professional/recommendations",
    icon: faComments,
  },
  // {
  //   label: "Vista previa de tu perfil",
  //   value: "/profile-professional/preview",
  //   icon: faIdCard,
  // },
  {
    label: "Editar tu perfil",
    value: "/profile-professional",
    icon: faPen,
  },
];

export default function Menu() {
  const pathname = usePathname();

  const filterLinksList = linksList.filter((link) => {
    return link.value !== pathname;
  });

  return (
    <nav className="flex flex-col gap-2 items-start justify-start mb-5">
      {filterLinksList.map((link) => {
        return (
          <Link
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
