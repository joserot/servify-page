import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import ModalLogin from "./modal-login";

export default function FooterContact() {
  return (
    <div className="fixed bottom-0 left-0 w-full md:hidden bg-background items-center justify-center p-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full flex gap-2 items-center text-lg font-bold">
            Contactar
            <FontAwesomeIcon icon={faWhatsapp} />
          </Button>
        </DialogTrigger>
        <ModalLogin />
      </Dialog>
    </div>
  );
}
