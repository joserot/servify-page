import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { Button } from "@/components/ui/button";

export default function FooterContact() {
  return (
    <div className="fixed bottom-0 left-0 w-full md:hidden bg-background items-center justify-center p-4">
      <Button className="w-full flex gap-2 items-center text-lg font-bold">
        Contactar
        <FontAwesomeIcon icon={faWhatsapp} />
      </Button>
    </div>
  );
}
