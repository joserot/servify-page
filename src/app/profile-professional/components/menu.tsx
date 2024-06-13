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

import { Separator } from "@/components/ui/separator";

const linksList = [
  // {
  //   label: "Destaca tu perfil",
  //   value: "/profile-professional/details",
  //   icon: faStar,
  // },
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

  {
    label: "Editar tu perfil",
    value: "/profile-professional",
    icon: faPen,
  },
];

export default function Menu() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2 items-start justify-start mb-5">
      {linksList.map((link) => {
        const active = pathname === link.value;

        return (
          <Link
            key={link.value}
            className={`
              text-lg
              text-primary
              ${active ? "font-bold" : ""}
              flex
              gap-2
              items-center
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
      <Separator />
    </nav>
  );
}
