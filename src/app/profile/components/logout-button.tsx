"use client";

import { Button } from "@/components/ui/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import logout from "@/services/logout";

export default function LogoutButton() {
  return (
    <div className="pt-5">
      <Button
        onClick={logout}
        variant={"destructive"}
        className="flex items-center gap-2"
      >
        <FontAwesomeIcon icon={faArrowRightFromBracket} /> Cerrar sesión
      </Button>
    </div>
  );
}
