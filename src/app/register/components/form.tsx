"use client";

import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/ui/loading-button";
import { useToast } from "@/components/ui/use-toast";

import register from "@/services/register";

import { useRouter } from "next/navigation";

import revalidateUrl from "@/app/actions";

import { useState } from "react";

export default function Form() {
  const router = useRouter();

  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = event.currentTarget.userName.value;
    const lastName = event.currentTarget.lastName.value;
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    setIsLoading(true);

    const response = await register({ name, lastName, email, password });

    setIsLoading(false);

    if (response.status === 201) {
      revalidateUrl("/");
      router.push("/");
    } else {
      toast({
        variant: "destructive",
        title: response,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full  flex flex-col gap-4">
      <Input required type="text" placeholder="Nombre" name="userName" />
      <Input required type="text" placeholder="Apellido" name="lastName" />
      <Input required type="email" placeholder="Email" name="email" />
      <Input
        required
        type="password"
        placeholder="Contraseña"
        name="password"
      />
      <LoadingButton loading={isLoading}>Registrarse</LoadingButton>
    </form>
  );
}
