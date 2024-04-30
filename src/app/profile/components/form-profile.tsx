"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import editProfile from "../service/edit-profile";

import { useToast } from "@/components/ui/use-toast";

import revalidateUrl from "@/app/actions";

// import Link from "next/link";
import Image from "next/image";

interface Props {
  user: User;
}

export default function FormProfile({ user }: Props) {
  const { toast } = useToast();

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = event.currentTarget.userName.value;
    const lastName = event.currentTarget.lastName.value;

    const response = await editProfile(user.id, name, lastName);

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
          />
        </Label>
        <Label className="flex flex-col gap-1">
          Apellido
          <Input
            defaultValue={user.lastName}
            placeholder="Apellido"
            name="lastName"
          />
        </Label>
        <Label className="flex flex-col gap-1">
          Email
          <Input value={user.email} placeholder="Email" disabled />
        </Label>
        {/* <span className="text-sm">
          ¿Olvidaste tu contraseña?{" "}
          <Link className="text-primary hover:underline" href="/">
            Actualizar contraseña
          </Link>
        </span> */}
        <Label className="flex flex-col gap-1">
          Foto de perfil
          <div className="flex gap-2 items-center justify-start">
            <Image
              width={64}
              height={64}
              src={user.image}
              alt="Foto de perfil"
              className="w-16 h-16 rounded-full object-cover object-center"
            />
            <Input className="w-full" type="file" />
          </div>
        </Label>
        <Button className="w-auto self-start">Guardar cambios</Button>
      </form>
    </div>
  );
}
