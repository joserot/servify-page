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
    label: "Editar tu perfil",
    value: "/profile-professional",
    icon: faPen,
  },
  {
    label: "Vista previa de tu perfil",
    value: "/profile-professional/preview",
    icon: faIdCard,
  },

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
];

export default function Menu() {
  const pathname = usePathname();

  return (
    <nav className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
      {linksList.map((link) => {
        const active = pathname === link.value;

        return (
          <Link
            key={link.value}
            className={`
              border
              border-primary
              p-2
              rounded-md
              text-lg
              text-primary
              ${active ? "font-bold bg-primary text-white" : ""}
              flex
              gap-2
              items-center
              justify-center
              transition-all
              hover:underline
              `}
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
