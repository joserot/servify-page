"use client";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { LoadingButton } from "./ui/loading-button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "./ui/input";

import changePassword from "@/services/change-password";

import { useToast } from "./ui/use-toast";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function ModalChangePassword({
  children,
  open,
  setOpen,
}: Props) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const currentPassword = event.currentTarget.currentPassword.value;
    const newPassword = event.currentTarget.newPassword.value;

    if (!currentPassword || !newPassword) {
      return;
    }

    setIsLoading(true);

    const response = await changePassword(currentPassword, newPassword);

    setIsLoading(false);

    if (response.status === 200 || response.status === 201) {
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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="mx-auto w-11/12 max-w-[500px] h-full flex flex-col justify-center items-center">
          <span className="block mb-4 text-xl font-bold text-center">
            Cambiar contraseña
          </span>
          <form onSubmit={handleSubmit} className="w-full  flex flex-col gap-4">
            <Label className="flex flex-col gap-1 w-full">
              Contraseña actual
              <Input
                required
                type="password"
                placeholder="*********"
                name="currentPassword"
              />
            </Label>

            <Label className="flex flex-col gap-1 w-full">
              Contraseña nueva
              <Input
                required
                type="password"
                placeholder="*********"
                name="newPassword"
              />
            </Label>

            <LoadingButton loading={isLoading} className="text-bold text-white">
              Cambiar
            </LoadingButton>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
