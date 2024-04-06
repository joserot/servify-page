import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import Jobs from "./jobs";
import Recommends from "./recommends";
import ModalLogin from "./modal-login";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";

export default function Content() {
  return (
    <div>
      <div className="w-full flex justify-center">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Trabajos</TabsTrigger>
            <TabsTrigger value="password">Recomendaciones</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Jobs />
          </TabsContent>
          <TabsContent value="password">
            <Recommends />
          </TabsContent>
        </Tabs>
      </div>
      <div className="hidden md:flex w-full pt-10  ">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full items-center text-lg font-bold gap-2">
              Contactar <FontAwesomeIcon icon={faWhatsapp} />
            </Button>
          </DialogTrigger>
          <ModalLogin />
        </Dialog>
      </div>
    </div>
  );
}
