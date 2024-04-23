"use client";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "./ui/button";

interface Props {
  children: React.ReactNode;
  callback: () => void;
  title: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function ModalDelete({
  children,
  callback,
  title,
  open,
  setOpen,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="mx-auto w-11/12 max-w-[500px] h-full flex flex-col justify-center items-center">
          <span className="block mb-4 text-xl font-bold text-center">
            {title}
          </span>
          <div className="w-full flex items-center gap-3 justify-center">
            <Button onClick={callback} variant={"destructive"}>
              Eliminar
            </Button>
            <Button onClick={() => setOpen(false)}>Cancelar</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
