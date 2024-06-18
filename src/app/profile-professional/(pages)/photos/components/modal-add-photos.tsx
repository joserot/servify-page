"use client";

import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useState } from "react";

interface Props {
  professional: Professional;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}

export default function ModalAddPhotos({
  professional,
  isOpen,
  setOpen,
}: Props) {
  const [files, setFiles] = useState<string[]>([]);

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  function handleChange(e: React.SyntheticEvent<HTMLInputElement>) {
    const filesList = e.currentTarget.files;

    let filesArray: string[] = [];

    if (filesList) {
      for (let i = 0; i < filesList.length; i++) {
        if (filesArray.length < 10) {
          {
            filesArray.push(URL.createObjectURL(filesList[i]));
          }
        }
      }

      setFiles(filesArray);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className={"overflow-y-auto max-h-screen pb-0"}>
        <div className="mx-auto w-11/12 max-w-[500px] h-full flex flex-col justify-center items-center relative">
          <span className="block text-3xl font-bold my-5 text-center">
            Sube fotos de tus trabajos
          </span>
          <p className="text-foreground text-center mb-5 text-balance">
            Sube hasta 10 fotos de tus ultimos trabajos realizados, estos se
            mostrarán en tu perfil
          </p>
          <form
            onSubmit={handleSubmit}
            className="
                 w-full 
                flex
                flex-col
                gap-2
                "
          >
            {files.length ? (
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
                {files.map((file, i) => {
                  return (
                    <img
                      key={i}
                      src={file}
                      className="h-[200px] w-full object-cover rounded-sm"
                    />
                  );
                })}
              </div>
            ) : null}
            <Input
              type="file"
              multiple
              name="images"
              accept="image/*"
              max={10}
              onChange={handleChange}
            />
          </form>
        </div>
        <DialogFooter className="sticky bottom-0 left-0 w-full bg-background py-2 pb-6">
          <Button className="w-full">Subir</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
