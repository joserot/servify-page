"use client";

import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import ModalDelete from "@/components/modal-delete";

import deleteProfessional from "../services/delete-professional";

import revalidateUrl from "@/app/actions";

import { useToast } from "@/components/ui/use-toast";

import { useState } from "react";

interface Props {
  id: string;
}

export default function ButtonDeleteProfessional({ id }: Props) {
  const { toast } = useToast();

  const [open, setOpen] = useState(false);

  const handleClick = async () => {
    const response = await deleteProfessional(id);

    if (response.status === 201 || response.status === 200) {
      revalidateUrl("/dashboard/professionals");
      setOpen(false);
    } else {
      toast({
        variant: "destructive",
        title: response,
      });
    }
  };

  return (
    <ModalDelete
      title="¿Desea eliminar este profesional?"
      callback={handleClick}
      open={open}
      setOpen={setOpen}
    >
      <Button variant={"destructive"}>
        <FontAwesomeIcon className="w-3" icon={faTrash} />
      </Button>
    </ModalDelete>
  );
}
