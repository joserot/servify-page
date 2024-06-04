"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import ModalLogin from "./modal-login";

import sendWhatsapp from "@/utils/send-whatsapp";

import { useState } from "react";

import { PROJECT_NAME } from "@/constants/constants";

interface Props {
  professional: Professional;
  user: User | null;
}

export default function FooterContact({ professional, user }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!user) {
      setOpen(true);
    } else {
      sendWhatsapp(
        professional.phone,
        `Me contacto desde ${PROJECT_NAME} por sus servicios`
      );
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full md:hidden bg-background items-center justify-center p-4">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            onClick={handleClick}
            className="w-full flex gap-2 items-center text-lg font-bold"
          >
            Contactar
            <FontAwesomeIcon icon={faWhatsapp} />
          </Button>
        </DialogTrigger>
        <ModalLogin />
      </Dialog>
    </div>
  );
}
