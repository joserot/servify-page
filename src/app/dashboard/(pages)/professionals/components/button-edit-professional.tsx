"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import FormEditProfessional from "./form-edit-professional";

export default function ButtonEditProfessional() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <FontAwesomeIcon className="w-3" icon={faPen} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="mx-auto w-11/12 max-w-[500px] h-full flex flex-col justify-center items-center">
          <span className="block mb-4 text-3xl font-bold text-center">
            Editar profesional
          </span>
          <FormEditProfessional />
        </div>
      </DialogContent>
    </Dialog>
  );
}
