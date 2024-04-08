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

export function DropdownMenuHeader() {
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
            className="h-7 w-7 rounded-full "
            src="/placeholder-user.webp"
            alt="foto de perfil"
          />
        </Button>
      </DropdownMenuTrigger>
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
    </DropdownMenu>
  );
}
