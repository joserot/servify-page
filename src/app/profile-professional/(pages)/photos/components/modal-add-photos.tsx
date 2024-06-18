"use client";

import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";

import { LoadingButton } from "@/components/ui/loading-button";
import { Input } from "@/components/ui/input";

import { useState } from "react";

import { useToast } from "@/components/ui/use-toast";

import addPhotos from "../services/add-photos";

import revalidateUrl from "@/app/actions";

interface Props {
  professional: Professional;
  user: User;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}

export default function ModalAddPhotos({
  professional,
  user,
  isOpen,
  setOpen,
}: Props) {
  const [files, setFiles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!files.length) {
      toast({
        variant: "destructive",
        title: "Introduce alguna foto",
      });

      return;
    }

    setIsLoading(true);

    const response = await addPhotos(professional.id, user.id, files);

    setIsLoading(false);

    if (response.status === 201 || response.status === 200) {
      revalidateUrl("/profile-professional/photos");
      toast({
        title: "Cambios guardados",
      });
      setOpen(false);
    } else {
      toast({
        variant: "destructive",
        title: response,
      });
    }
  };

  function handleChange(e: React.SyntheticEvent<HTMLInputElement>) {
    const filesList = e.currentTarget.files;

    let filesArray: any[] = [];

    if (filesList) {
      for (let i = 0; i < filesList.length; i++) {
        if (filesArray.length < 10) {
          {
            filesArray.push(filesList[i]);
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
            id="form-submit-photos"
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
                      src={URL.createObjectURL(file)}
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
          <LoadingButton
            form="form-submit-photos"
            className="w-full"
            loading={isLoading}
          >
            Guardar cambios
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
