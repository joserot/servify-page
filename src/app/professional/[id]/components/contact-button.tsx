import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import ModalLogin from "./modal-login";

export default function ContactButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="hidden md:flex absolute top-0 right-0 gap-2 items-center text-lg font-bold">
          Contactar
          <FontAwesomeIcon icon={faWhatsapp} />
        </Button>
      </DialogTrigger>
      <ModalLogin />
    </Dialog>
  );
}
