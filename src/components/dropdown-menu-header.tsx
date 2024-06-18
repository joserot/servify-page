"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
          <Avatar className="h-7 w-7">
            <AvatarImage
              className="object-cover"
              src={user ? user.image : "/placeholder-user.webp"}
              alt="foto de perfil"
            />
            <AvatarFallback>
              {user ? user.name[0] + user.lastName[0] : ""}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <LinksMenu user={user} />
    </DropdownMenu>
  );
}

function LinksMenu({ user }: Props) {
  let typeUser = null;

  if (user?.roles.includes("professional")) {
    typeUser = "professional";
  } else if (user) {
    typeUser = "user";
  }

  if (!user) {
    return (
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <Link href={"/register"}>
            <DropdownMenuItem>Registrate</DropdownMenuItem>
          </Link>
          <Link href={"/register-professional"}>
            <DropdownMenuItem>Registrate como profesional</DropdownMenuItem>
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
    );
  }

  if (typeUser === "professional") {
    return (
      <DropdownMenuContent className="w-56">
        <div className="flex py-4 px-2 gap-3 items-center">
          <Avatar className="h-10 w-10">
            <AvatarImage
              className="object-cover"
              src={user ? user.image : "/placeholder-user.webp"}
              alt="foto de perfil"
            />
            <AvatarFallback>
              {user ? user.name[0] + user.lastName[0] : ""}
            </AvatarFallback>
          </Avatar>

          <span>{user.name + " " + user.lastName}</span>
        </div>

        <DropdownMenuGroup>
          <Link href={"/profile-professional"}>
            <DropdownMenuItem>Perfil</DropdownMenuItem>
          </Link>
          <Link href={"/profile-professional/preview"}>
            <DropdownMenuItem>Vista previa de tu perfil</DropdownMenuItem>
          </Link>
          <Link href={"/profile-professional/photos"}>
            <DropdownMenuItem>Agrega fotos de tus trabajos</DropdownMenuItem>
          </Link>
          <Link href={"/profile-professional/recommendations"}>
            <DropdownMenuItem>Obtén recomendaciones</DropdownMenuItem>
          </Link>
          <Link href={"/contact"}>
            <DropdownMenuItem>Soporte</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <button className="w-full" onClick={logout}>
          <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
        </button>
      </DropdownMenuContent>
    );
  }

  if (typeUser === "user") {
    return (
      <DropdownMenuContent className="w-56">
        <div className="flex py-4 px-2 gap-3 items-center">
          <Avatar className="h-10 w-10">
            <AvatarImage
              className="object-cover"
              src={user ? user.image : "/placeholder-user.webp"}
              alt="foto de perfil"
            />
            <AvatarFallback>
              {user ? user.name[0] + user.lastName[0] : ""}
            </AvatarFallback>
          </Avatar>
          <span>{user.name + " " + user.lastName}</span>
        </div>

        <DropdownMenuGroup>
          <Link href={"/profile"}>
            <DropdownMenuItem>Perfil</DropdownMenuItem>
          </Link>
          <Link href={"/contact"}>
            <DropdownMenuItem>Contacto</DropdownMenuItem>
          </Link>
          <Link href={"/offer-your-services"}>
            <DropdownMenuItem>Ofrecé tus servicios</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <button className="w-full" onClick={logout}>
          <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
        </button>
      </DropdownMenuContent>
    );
  }
}
