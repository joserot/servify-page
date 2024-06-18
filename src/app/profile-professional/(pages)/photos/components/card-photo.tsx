"use client";

import { Button } from "@/components/ui/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import ModalDelete from "@/components/modal-delete";

import { useState } from "react";

import deletePhoto from "../services/delete-photo";

import revalidateUrl from "@/app/actions";

interface Props {
  src: string;
  user: User;
  professional: Professional;
}

export default function CardPhoto({ src, user, professional }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const callback = async () => {
    await deletePhoto(professional.id, user.id, src);
    await revalidateUrl("/profile-professional/photos");
    await setIsOpen(false);
  };

  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <img
        className="h-[200px] w-full object-cover rounded-sm cursor-pointer"
        width={200}
        height={200}
        alt="Trabajo realizado"
        src={src}
      />
      <div className="w-full">
        <ModalDelete
          callback={callback}
          title="¿Quiere eliminar esta foto?"
          open={isOpen}
          setOpen={setIsOpen}
        >
          <Button className="w-full" variant="destructive">
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </ModalDelete>
      </div>
    </div>
  );
}
