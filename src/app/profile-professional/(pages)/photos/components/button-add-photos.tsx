"use client";

import ModalAddPhotos from "./modal-add-photos";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import { useState } from "react";

interface Props {
  professional: Professional;
  user: User;
}

export default function ButtonAddPhotos({ professional, user }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setOpen(true);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">Agregar fotos</Button>
      </DialogTrigger>
      <ModalAddPhotos
        professional={professional}
        user={user}
        isOpen={open}
        setOpen={setOpen}
      />
    </Dialog>
  );
}
