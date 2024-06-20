"use client";

import { LoadingButton } from "@/components/ui/loading-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import ModalChangePassword from "@/components/modal-change-password";

import editProfile from "../service/edit-profile";

import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

import revalidateUrl from "@/app/actions";

// import Link from "next/link";

interface Props {
  user: User;
}

export default function FormProfile({ user }: Props) {
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModalPassword, setOpenModalPassword] = useState(false);

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = event.currentTarget.userName.value;
    const lastName = event.currentTarget.lastName.value;
    const avatar = event.currentTarget.avatar.files[0];

    setIsLoading(true);

    const response = await editProfile(user.id, name, lastName, avatar);

    setIsLoading(false);

    if (response.status === 200 || response.status === 201) {
      toast({
        variant: "default",
        title: "Perfil actualizado",
      });
      revalidateUrl("profile");
    } else {
      toast({
        variant: "destructive",
        title: response,
      });
    }
  };

  return (
    <div className="pb-5 border-b border-gray-300">
      <span className="block text-3xl font-bold mb-5">Datos de tu perfil</span>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <Label className="flex flex-col gap-1">
          Nombre
          <Input
            defaultValue={user.name}
            placeholder="Nombre"
            name="userName"
            required
          />
        </Label>
        <Label className="flex flex-col gap-1">
          Apellido
          <Input
            defaultValue={user.lastName}
            placeholder="Apellido"
            name="lastName"
            required
          />
        </Label>
        <Label className="flex flex-col gap-1">
          Email
          <Input required value={user.email} placeholder="Email" disabled />
        </Label>

        <Label className="flex flex-col gap-1">
          Contraseña
          <ModalChangePassword
            open={isOpenModalPassword}
            setOpen={setOpenModalPassword}
          >
            <Button className="self-start" variant={"secondary"}>
              Cambiar contraseña
            </Button>
          </ModalChangePassword>
        </Label>

        <Label className="flex flex-col gap-1">
          Foto de perfil
          <div className="flex gap-2 items-center justify-start">
            <Avatar className="object-cover w-16 h-16 border border-gray-300">
              <AvatarImage
                className="object-cover"
                src={user ? user.image : "/placeholder-user.webp"}
                alt="foto de perfil"
              />
              <AvatarFallback className="text-xl">
                {user ? user.name[0] + user.lastName[0] : ""}
              </AvatarFallback>
            </Avatar>
            <Input name="avatar" className="w-full" type="file" />
          </div>
        </Label>
        <LoadingButton loading={isLoading} className="w-auto self-start">
          Guardar cambios
        </LoadingButton>
      </form>
    </div>
  );
}
