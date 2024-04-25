"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import ModalLogin from "./modal-login";

import sendWhatsapp from "@/utils/send-whatsapp";

import { useState } from "react";

interface Props {
  professional: Professional;
  user: User | null;
  type?: "absolute" | "static";
}

export default function ContactButton({
  professional,
  user,
  type = "absolute",
}: Props) {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!user) {
      setOpen(true);
    } else {
      sendWhatsapp(
        professional.phone,
        "Me contacto desde servify por sus servicios"
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={handleClick}
          className={`
            hidden 
            md:flex 
            absolute 
            top-0 
            right-0 
            gap-2 
            items-center 
            text-lg 
            font-bold ${type === "static" ? "static w-full" : "absolute"}`}
        >
          Contactar
          <FontAwesomeIcon icon={faWhatsapp} />
        </Button>
      </DialogTrigger>
      <ModalLogin />
    </Dialog>
  );
}
