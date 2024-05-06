"use client";

import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import ModalDelete from "@/components/modal-delete";

import deleteRecommend from "../services/delete-recommend";

import revalidateUrl from "@/app/actions";

import { useToast } from "@/components/ui/use-toast";

import { useState } from "react";

interface Props {
  id: string;
}

export default function ButtonDeleteRecommend({ id }: Props) {
  const { toast } = useToast();

  const [open, setOpen] = useState(false);

  const handleClick = async () => {
    const response = await deleteRecommend(id);

    if (response.status === 201 || response.status === 200) {
      revalidateUrl("/dashboard/recommendations");
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
