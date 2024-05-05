"use client";

import Link from "next/link";
import logout from "@/services/logout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faUsers,
  faUserTie,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import { usePathname } from "next/navigation";

import clsx from "clsx";

import { Button } from "@/components/ui/button";

const linksList = [
  {
    label: "Usuarios",
    value: "/dashboard/users",
    icon: faUsers,
  },
  {
    label: "Profesionales",
    value: "/dashboard/professionals",
    icon: faUserTie,
  },
  {
    label: "Contactos",
    value: "/dashboard/contacts",
    icon: faEnvelope,
  },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-primary">
      <Link
        href="/dashboard/users"
        className="
            text-4xl
            font-extrabold
            text-white
            mb-5
            "
      >
        Profesio
      </Link>
      <div className="flex grow justify-between space-x-2 flex-col md:space-x-0 md:space-y-2">
        <div className="flex flex-col gap-2">
          {linksList.map((link) => {
            return (
              <Link
                className={clsx(
                  "text-lg font-semibold flex gap-3 items-center p-3 rounded-md hover:bg-white hover:text-primary transition-all",
                  {
                    "bg-white text-primary": pathname === link.value,
                  },
                  {
                    "text-white": pathname !== link.value,
                  }
                )}
                key={link.value}
                href={link.value}
              >
                <FontAwesomeIcon className="w-6" icon={link.icon} />
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="hidden h-auto w-full grow rounded-md bg-primary md:block"></div>
        <form>
          <Button
            onClick={logout}
            variant={"secondary"}
            className="mt-6 flex h-[48px] md:w-full grow items-center justify-center gap-2 md:flex-none md:justify-start md:mt-0"
          >
            <FontAwesomeIcon className="w-5" icon={faRightToBracket} />
            Cerrar sesión
          </Button>
        </form>
      </div>
    </div>
  );
}
