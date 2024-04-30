"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import logout from "@/services/logout";

interface Props {
  user?: User | null;
}

export function DropdownMenuHeader({ user }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="
          flex 
          justify-center 
          items-center 
          gap-2       
          rounded-full 
          border-2
          border-gray-200
          shadow-sm
          py-1 
          px-3
          "
          variant="outline"
        >
          <FontAwesomeIcon icon={faBars} />
          <Image
            height={28}
            width={28}
            className="h-7 w-7 rounded-full object-cover object-center"
            src={user ? user.image : "/placeholder-user.webp"}
            alt="foto de perfil"
          />
        </Button>
      </DropdownMenuTrigger>
      {!user ? (
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <Link href={"/register"}>
              <DropdownMenuItem>Registrate</DropdownMenuItem>
            </Link>
            <Link href={"/login"}>
              <DropdownMenuItem>Iniciar sesión</DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />
          <Link href={"/offer-your-services"}>
            <DropdownMenuItem>Ofrecé tus servicios</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      ) : (
        <DropdownMenuContent className="w-56">
          <div className="flex py-4 px-2 gap-3 items-center">
            <Image
              width={40}
              height={40}
              src={user.image}
              className="h-10 w-10 rounded-full object-cover object-center"
              alt={user.name}
            />
            <span>{user.name + " " + user.lastName}</span>
          </div>

          <DropdownMenuGroup>
            <Link href={"/profile"}>
              <DropdownMenuItem>Perfil</DropdownMenuItem>
            </Link>
            <Link href={"/contact"}>
              <DropdownMenuItem>Contacto</DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />
          <button className="w-full" onClick={logout}>
            <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
          </button>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
}
