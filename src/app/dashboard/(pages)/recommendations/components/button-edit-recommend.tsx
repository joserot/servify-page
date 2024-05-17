"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import FormEditRecommend from "./form-edit-recommend";

interface Props {
  id: string;
}

export default function ButtonEditRecommend({ id }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <FontAwesomeIcon className="w-3" icon={faPen} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="mx-auto w-11/12 max-w-[500px] h-full flex flex-col justify-center items-center">
          <span className="block mb-4 text-3xl font-bold text-center">
            Editar recomendación
          </span>
          <FormEditRecommend id={id} setOpen={setOpen} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
